import React, { useEffect, useState } from "react";
import DialogModal from "../common/DialogBox";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { getCC, setSessionVal } from "@/src/redux/action/AuthToken";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "../payment/Stripe";
import { RazorpayPage } from "../payment/Razorpay";

interface TemplateData {
  id: string;
  type: number;
  usdAmount: string;
  usdVal: number;
  inrAmount: string;
  inrVal: number;
}

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tempData: TemplateData;
};

export default function ShowPremiumDialog({
  open,
  setOpen,
  tempData,
}: PropsType) {
  console.log("tempData: ", tempData);
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<string>("IN");
  const [openPaymentDialog, setOpenPaymentDialog] = useState<boolean>(false);
  const [stripeTestPromise, setStripeTestPromise] = useState<string | any>(
    null
  );
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    if (tempData && open) {
      const PUBLIC_KEY = `${process.env.NEXT_PUBLIC_STRIPE_KEY}`;
      const valStripe = loadStripe(PUBLIC_KEY);
      setStripeTestPromise(valStripe);

      const countryCodeVal: string = getCC();
      setCountryCode(countryCodeVal);
    }

    const val = getCC() === "IN" ? tempData.inrAmount : tempData.usdAmount;

    setAmount(val);
  }, [open, tempData]);

  return (
    <>
      <DialogModal
        open={open}
        setOpen={setOpen}
        className="w-[100%] lg:w-[80%] xl:w-[500px]"
      >
        <Box className="rounded-[8px] p-[30px] bg-[#F4F7FE] overflow-hidden">
          <Typography variant="h2" className="font-medium text-[22px] mb-2">
            This template requires a subscription
          </Typography>
          <Typography className="text-[#ABB2C7] text-[16px] mt-4">
            Subscribe or purchase the template for{" "}
            <span className="font-semibold text-black opacity-70">
              {" "}
              {amount}
            </span>{" "}
            to use this template.
          </Typography>

          <Box className="mt-10 flex justify-end items-center">
            <Box className="flex justify-between items-center gap-3">
              <Button
                className="bg_linear text-white normal-case px-[30px] text-[16px]"
                onClick={() => router.push("/plans")}
              >
                Subscribe
              </Button>
              <Button
                className="bg_linear text-white normal-case px-[30px] text-[16px]"
                onClick={() => {
                  setSessionVal("_paf", JSON.stringify([tempData]));
                  setOpen(false);
                  setOpenPaymentDialog(true);
                }}
              >
                Purchase
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogModal>
      {openPaymentDialog && (
        <DialogModal
          open={openPaymentDialog}
          setOpen={setOpenPaymentDialog}
          className="w-[100%] sm:w-[500px]"
        >
          <Box className="flex max-md:flex-col rounded-[8px] bg-[#F4F7FE] overflow-hidden">
            <Box className="md:w-[100%] p-[30px] ">
              <Typography variant="h2" className="font-medium text-[22px] mb-5">
                Finalize Payment
              </Typography>
              {countryCode === "IN" && (
                <RazorpayPage setOpen={setOpenPaymentDialog} />
              )}

              <Elements stripe={stripeTestPromise}>
                <Stripe
                  countryCode={countryCode}
                  setOpen={setOpenPaymentDialog}
                />
              </Elements>
            </Box>
          </Box>
        </DialogModal>
      )}
    </>
  );
}
