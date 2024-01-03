import { Box, Button, Typography } from "@mui/material";
import {
  AddressElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getSessionVal,
  removeUnusedSessions,
  setSessionVal,
} from "@/redux/action/AuthToken";
import PhoneInput from "react-phone-input-2";
import { decryptData } from "@/aes-crypto";
import { setPurchaseItems } from "@/redux/reducer/templateDataReducer";
import { mainLoad } from "@/redux/reducer/actionDataReducer";

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

interface AddressProps {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export function Stripe({ countryCode }: any) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullName, setFullName] = useState<any>("");
  const [phoneNo, setPhoneNo] = useState<any>("");
  const userData = useSelector((state: any) => state.auth.userData);

  const handleSubmit = async (e: any) => {
    dispatch(mainLoad(true));

    const billing_details: {
      name: string;
      email: string;
      address: AddressProps | undefined;
      phone: string | undefined;
    } = {
      name: fullName,
      email: userData ? userData.email : "",
      address: undefined,
      phone: phoneNo,
    };
    e.preventDefault();

    if (countryCode !== "IN") {
      if (elements !== null) {
        const addressElement = await elements
          .getElement(AddressElement)!
          .getValue();
        if (addressElement.complete) {
          billing_details.name = addressElement.value.name;
          billing_details.address = addressElement.value.address;
          billing_details.phone = addressElement.value.phone;
        } else {
          dispatch(mainLoad(false));
          toast.error("Please provide details.");
          return;
        }
      }
    } else {
      if (fullName.trim().length === 0 || phoneNo?.trim().length !== 12) {
        if (fullName.trim().length === 0) {
          dispatch(mainLoad(false));
          toast.error("Please provide your name.");
        } else {
          dispatch(mainLoad(false));
          toast.error("Please provide valid mobile number.");
        }
        setIsLoading(false);
        return;
      }
    }

    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      billing_details: billing_details,
      type: "card",
      card: elements?.getElement(CardNumberElement),
    } as any);

    if (!error) {
      try {
        const { id } = paymentMethod;

        axios
          .post("/api/templatePayment/stripe", { pi: id })
          .then(async (res: any) => {
            const c: any = JSON.parse(decryptData(res));

            stripe
              ?.confirmCardPayment(c.client_secret)
              .then(async (data) => {
                if (data.error) {
                  toast.error(data.error.message!);
                } else if (data.paymentIntent) {
                  const datas = {
                    id: data.paymentIntent.id,
                    m: "Stripe",
                  };
                  setSessionVal("_pdf", JSON.stringify(datas));

                  axios
                    .post("/api/templatePayment/webhook")
                    .then((data: any) => {
                      const res: any = JSON.parse(decryptData(data));
                      if (res.success) {
                        const val: any = JSON.parse(
                          getSessionVal("_paf", "[]") || "[]"
                        );
                        const purDatas: any = [];
                        val.forEach((_: any) => {
                          purDatas.push({ id: _.id, type: _.type });
                        });
                        dispatch(setPurchaseItems(purDatas));
                        removeUnusedSessions();
                        toast.success(res.msg);
                      } else {
                        toast.error(res.msg);
                      }
                    })
                    .catch(() => {
                      toast.error("Payment failed");
                      dispatch(mainLoad(false));
                    });
                } else {
                  toast.error("Payment failed");
                  dispatch(mainLoad(false));
                }
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err: any) => {
            console.error(err);
            toast.error("Payment failed");
            dispatch(mainLoad(false));
          });
      } catch (error) {
        toast.error("Payment failed");
        dispatch(mainLoad(false));
      }
    } else {
      toast.error(error.message);
      dispatch(mainLoad(false));
    }
  };
  return (
    <>
      {countryCode === "IN" && (
        <>
          <Box className="mb-5">
            <Typography className="font-medium mb-1">Full name</Typography>
            <Box
              sx={{
                border: "1px solid  #ced4da",
                padding: "10px",
                borderRadius: ".375rem",
                height: "44px",
              }}
            >
              <input
                type="text"
                className="bg-transparent w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Box>
          </Box>

          <Box className="mb-5">
            <Typography className="font-medium mb-1">Phone number</Typography>
            <Box
              sx={{
                border: "1px solid  #ced4da",
                borderRadius: ".375rem",
                height: "44px",
              }}
            >
              <PhoneInput
                country="in"
                disableDropdown={true}
                countryCodeEditable={false}
                value={phoneNo}
                onChange={(e: any) => setPhoneNo(e)}
                inputStyle={{ width: "100%" }}
              />
            </Box>
          </Box>
        </>
      )}
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

      {countryCode !== "IN" && (
        <>
          <Box className="mb-5">
            <AddressElement
              options={{
                mode: "billing",
                fields: {
                  phone: "always",
                },
                validation: {
                  phone: {
                    required: "always",
                  },
                },
                defaultValues: {
                  address: {
                    country: countryCode,
                  },
                },
              }}
            />
          </Box>
        </>
      )}

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
        Process to pay
      </Button>
    </>
  );
}
