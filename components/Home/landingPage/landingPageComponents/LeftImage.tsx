import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Iframe from "react-iframe";

export default function LeftImage({
  title,
  point,
  image,
  buttonName,
  video,
}: any) {
  return (
    <Box className="  bg-[#F4F7FE]  ">
      <Box className="flex py-[50px]  px-[20px] xl:px-[7%] w-full  xl:w-[92%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
        <Box className="flex-1 flex justify-center ">
          {/* <img
            src={image}
            alt={image}
            className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
          /> */}

          {image ? (
            <img
              src={image}
              alt={image}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          ) : (
            <video
              src={video} 
              controls={false}
              autoPlay
              loop
              muted
              className="object-contain w-[550px] max-lg:w-[400px] max-sm:w-full"
            />
          )}
        </Box>
        <Box className="flex-1 flex justify-center py-[30px]  max-lg:pb-0  max-lg:w-[100%]">
          <Box className="w-[90%] flex  flex-col gap-[20px]   max-lg:w-[8 0%] max-sm:w-[100%]">
            <Typography
              className="text-[28px] font-semibold text-black max-lg:text-[22px]  max-sm:text-center"
              variant="h2"
            >
              {title}
            </Typography>
            {point}
            <Button
              style={{
                background:
                  "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                width: "fit-content",
                fontSize: "18px",
                textTransform: "unset",
                borderRadius: "10px",
                fontWeight: "500",
                color: "white",
              }}
              className="bg_linear py-[10px] px-[10px] ml-[40px]  max-lg:mx-auto text-[14px] 2sm:text-[17px]"
            >
              {buttonName}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
