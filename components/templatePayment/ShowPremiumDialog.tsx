import React, { useEffect, useState } from "react";
import DialogModal from "../common/DialogBox";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { getCC, setSessionVal } from "@/redux/action/AuthToken";
import Icons from "@/assets";
import { RazorpaySingleTemp } from "../payment/templatePurchase/RazorpaySingleTemp";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "../payment/templatePurchase/StripeSingleTemp";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY =
  "pk_live_51M92RVSF3l7nabbsQXTnM8YdI33NTB7FGC32dhqnwWPECcQ4LddrwsxM68TgkS5munQ9VsVtpF4m7PqGRmkVQGzF00EfT8vVbj";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function ShowPremiumDialog({ open, setOpen, tempData }: any) {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<any>("IN");
  useEffect(() => {
    if (open) {
      const countryCodeVal: any = getCC();
      console.log("countryCodeVal: ", countryCodeVal);
      setCountryCode(countryCodeVal);
    }
  }, [open]);

  console.log("tempData: ", countryCode);
  const [openPaymentDialog, setOpenPaymentDialog] = useState<any>(false);
  const [amount, setAmount] = useState<any>(0);

  // if (tempData) {
  //   // setSessionVal("_paf", JSON.stringify([tempData]));
  //   // const newC = content.endsWith(".")
  //   //   ? content.slice(0, content.length - 1)
  //   //   : content;
  //   // content =
  //   //   newC +
  //   //   ` or Buy this for ${
  //   //     getCC() === "INR" ? payment.inrAmount : payment.usdAmount
  //   //   }`;
  // }
  useEffect(() => {
    if (tempData) {
      // setSessionVal("_paf", JSON.stringify([tempData]));
      const val = getCC() === "INR" ? tempData.inrAmount : tempData.usdAmount;
      setAmount(val);
    }
  }, [tempData]);

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
          <Typography className="text-[#ABB2C7] text-[16px]">
            {/* Purchase our subscription or purchase the template to use this
          template */}
            Subscribe or purchase the template to use this template
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
                  setAmount(
                    getCC() === "INR" ? tempData.inrAmount : tempData.usdAmount
                  );
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

      <DialogModal
        open={openPaymentDialog}
        setOpen={setOpenPaymentDialog}
        className="w-[100%] lg:w-[80%] xl:w-[1000px]"
      >
        <Box className="flex max-md:flex-col rounded-[8px] bg-[#F4F7FE] overflow-hidden">
          <Box className="md:w-[50%] p-[30px] bg-white">
            <Typography variant="h2" className="font-medium text-[22px] mb-2">
              Choose your plan
            </Typography>
            <Typography className="text-[#ABB2C7] text-[14px]  sm:w-[80%] ">
              Access all assets, templates, integrations and{" "}
              <span className="font-[700]"> Premium support.</span>
            </Typography>

            <Box className="mt-[20px]">
              {/* {pricePlaneData?.map((item: any) => (
                <Box
                  className="flex items-start mb-3 cursor-pointer"
                  onClick={() => setChoosePlan(item)}
                >
                  <Radio
                    color="default"
                    checked={item?.offer_price === choosePlan?.offer_price}
                  />
                  <Box className="py-[7px]">
                    <Typography className="font-semibold">
                      {item?.package_name}
                    </Typography>

                    <Box className="flex gap-2">
                      {item?.has_offer ? (
                        <Typography className="text-[#ABB2C7] text-[13px] line-through	">
                          {item?.actual_price}
                        </Typography>
                      ) : (
                        ""
                      )}

                      <Typography className="text-[#ABB2C7] text-[13px] ">
                        {item?.offer_price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))} */}
            </Box>

            {/* <Box className="flex justify-between mb-2">
              <Typography>Ends on</Typography>
              <Typography>{endDate}</Typography>
            </Box>

            <Box className="flex justify-between">
              <Typography className="font-semibold">Due today</Typography>
              <Typography className="font-semibold">
                {choosePlan?.offer_price}
              </Typography>
            </Box> */}
          </Box>

          <Box className="md:w-[50%] p-[30px] ">
            <Typography variant="h2" className="font-medium text-[22px] mb-5">
              Finalize Payment
            </Typography>
            {countryCode === "IN" && (
              <RazorpaySingleTemp setOpen={setOpenPaymentDialog} />
            )}

            <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
              <Typography className="text-[#ABB2C7] font-semibold">
                Credit Or Debit Card
              </Typography>

              <Icons.creditDebitCardIcon />
            </Box>

            <Elements stripe={stripeTestPromise}>
              <Stripe countryCode={countryCode} />
            </Elements>
          </Box>
        </Box>
      </DialogModal>
    </>
  );
}
