import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface props {
  heading: string;
  text: string;
}

export default function FreeTrialBlackBanner({ heading, text }: props) {
  return (
    <Box className="  bg-[url('/images/invitationBanner.png')] bg-cover bg-no-repeat py-14 px-4 ">
      <Box className="flex flex-col items-center   gap-8">
        <Typography
          className="text-[28px] sm:text-[47px] font-bold	text-white w-full lg:w-[60%] text-center"
          variant="h1"
        >
          {heading}
        </Typography>
        <Box className="flex flex-col items-center gap-2 ">
          <Typography className="text-[15px] sm:text-[18px] font-medium	text-white w-full lg:w-[60%] text-center">
            {text}
            Template Library
          </Typography>
        </Box>

        <Button
          sx={{
            textTransform: "unset",
            fontSize: "14px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            opacity: "1",
            width: "180px",
            backgroundColor: "white",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          className="bg-white text-black py-2"
        >
          Start a free trial
        </Button>
      </Box>
    </Box>
  );
}
