import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { Box, Button, Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const inputStyle = {
  color: "black",
  fontWeight: "500",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "16px",
  border: "1px solid #ced4da",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: "#fce883",
  },
  "::placeholder": {
    color: "#ced4da",
  },
};

export default function Stripe({ selectPlan, countryCode }: any) {
  const uId = authCookiesGet();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();

  let protocol: any;
  let hostname: any;
  let location: any;
  let currentUrl: any;

  if (typeof window !== "undefined") {
    protocol = window.location.protocol;
    hostname = window.location.hostname;
    location = window.location;
    currentUrl = window.location.href;
  }

  const domain = `${protocol}//${hostname}${
    location?.port ? ":" + location?.port : ""
  }`;

  const returnUrl = `${domain}/payment/success/done?return_url=${currentUrl}`;

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement),
    } as any);

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response: any = await axios.post("/api/stripePayment", {
          amount: selectPlan?.price * 100,
          id,
          currency: countryCode === "IN" ? "INR" : "USD",
          userId: uId,
          packageId: selectPlan?.id,
          packageName: selectPlan?.package_name,
          returnUrl: returnUrl,
        });

        if (response?.data?.next_action?.redirect_to_url?.url) {
          window.location.href =
            response?.data?.next_action?.redirect_to_url?.url;
          setIsLoading(false);
        }

        if (response.data.success) {
          toast.success("Successful payment");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    } else {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Box className="mb-5">
        <Typography className="font-medium mb-1">Card Number</Typography>
        <Box
          sx={{
            border: "1px solid  #ced4da",
            padding: "10px",
            borderRadius: ".375rem",
            height: "44px",
          }}
        >
          <CardNumberElement
            options={{
              style: {
                base: inputStyle,
              },
            }}
          />
        </Box>
      </Box>

      <Box className="flex gap-[20px] mb-5">
        <Box className="flex-1">
          <Typography className="font-medium mb-1">Expiration Date</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <CardExpiryElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
            />
          </Box>
        </Box>

        <Box className="flex-1">
          <Typography className="font-medium mb-1">CVV</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <CardCvcElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex items-start mb-6">
        <Box className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-[15px]"
            required
          />
        </Box>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  max-2sm:text-[12px]">
          I agree to CraftyArt's
          <span className="text-[#5961F8]"> Terms of Service </span> and
          <span className="text-[#5961F8]"> Privacy policy </span>
        </label>
      </Box>

      <Button
        className="bg_linear text-white w-full py-[10px] normal-case text-[17px]"
        onClick={handleSubmit}
      >
        Get CraftyArt Pro
      </Button>

      {isLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </>
  );
}
