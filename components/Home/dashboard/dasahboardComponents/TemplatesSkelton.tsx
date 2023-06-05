import Skelton from "@/components/common/Skelton";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function TemplatesSkelton() {
  return (
    <Box className="relative ">
      <Box className="flex items-center justify-between pt-8 pb-4">
        <Skelton width="200px" height="50px" round="20px" fill={0} line="row" />
      </Box>
      <Box className="py-2">
        <Skelton width="200px" height="50px" round="20px" fill={1} line="row" />
      </Box>
      <Box className="flex items-center overflow-hidden scroll_none gap-[10px] ">
        <Skelton
          width="200px"
          height="70px"
          round="20px"
          fill={20}
          line="row"
        />
      </Box>
      <Box className="flex items-center overflow-hidden scroll_none gap-[10px] ">
        <Skelton
          width="200px"
          height="70px"
          round="20px"
          fill={20}
          line="row"
        />
      </Box>
      <Box className="flex items-center overflow-hidden scroll_none gap-[10px] ">
        <Skelton
          width="200px"
          height="70px"
          round="20px"
          fill={20}
          line="row"
        />
      </Box>
    </Box>
  );
}
