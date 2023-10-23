import Skelton from "@/components/common/Skelton";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function TemplatesSkelton() {
  return (
    <Box className="flex flex-col gap-5 py-[50px]">
      {/* <Box className="flex items-center justify-between pt-8 pb-4">
        <Skelton width="200px" height="50px" round="20px" fill={0} line="row" />
      </Box>
      <Box className="py-2">
        <Skelton width="200px" height="50px" round="20px" fill={1} line="row" />
      </Box> */}
      <Box className="flex items-center overflow-hidden scroll_none gap-[20px]  ">
        <Skelton
          width="250px"
          height="200px"
          round="10px"
          fill={20}
          line="row"
          gap={"15px"}
          text={"true"}
          textH={"10px"}
          textW={"100px"}
          title={true}
        />
      </Box>
      <Box className="flex  items-center overflow-hidden scroll_none gap-[20px]  ">
        <Skelton
          width="250px"
          height="200px"
          round="10px"
          fill={20}
          line="row"
          gap={"15px"}
          text={"true"}
          textH={"10px"}
          textW={"100px"}
          title={true}
        />
      </Box>
      <Box className="flex items-center overflow-hidden scroll_none gap-[20px] mb-5 ">
        <Skelton
          width="250px"
          height="200px"
          round="10px"
          fill={20}
          line="row"
          gap={"15px"}
          text={"true"}
          textH={"10px"}
          textW={"100px"}
          title={true}
        />
      </Box>
    </Box>
  );
}
