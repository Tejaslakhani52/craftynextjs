import { tokenGet } from "@/redux/action/AuthToken";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Subscription({ userSubscription }: any) {
  const router = useRouter();
  return (
    <Box>
      <Typography variant="h1" className="font-semibold text-[24px]">
        Subscription
      </Typography>
      <Box
        className="pt-14  justify-center "
        sx={{ display: !userSubscription?.hasCurrentPlan ? "flex" : "none" }}
      >
        <Box className="w-[350px] mx-auto flex flex-col items-center justify-center">
          <img
            src="/images/subcriptionNote.png"
            alt="subcriptionNote"
            className="w-[300px] mb-5"
          />
          <h3 className="text-[18px] pt-5 pb-5 text-[#1C3048] font-medium">
            Upgrade your CraftyArt account now !
          </h3>

          <Typography className="text-center text-[#ABB2C7] mb-8">
            With no ads and full access to all new content, features and cutting
            edge image processing tech, your CraftyArt experience has never been
            so good!
          </Typography>

          <Button className="bg_linear h-[40px] normal-case px-[50px] text-white">
            Buy Now
          </Button>
        </Box>
      </Box>

      <Box
        className="pt-[35px]"
        sx={{ display: userSubscription?.hasCurrentPlan ? "block" : "none" }}
      >
        <Typography className="font-medium text-[16px] mb-4">
          Current Plan
        </Typography>

        <Box className="bg-[#F4F7FE] p-[25px] w-[700px] max-xl:w-full rounded-[8px]">
          <Box className="flex items-center justify-between mb-1">
            <Box className="flex gap-2 items-end">
              <Typography className="font-semibold">
                {userSubscription?.current?.package_name}
              </Typography>
              <Typography className="font-semibold text-[#ABB2C7] text-[14px]">
                {userSubscription?.current?.amount}
              </Typography>
            </Box>

            <Typography
              className="text_linear text-[14px] cursor-pointer"
              onClick={() => router.push("plans")}
            >
              Upgrade your plan
            </Typography>
          </Box>

          <Typography className=" text-[14px]">
            Your current plan{" "}
            <span className="font-semibold">
              {" "}
              {userSubscription?.current?.amount}
            </span>{" "}
            is end on <span>{userSubscription?.current?.billing_date}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
