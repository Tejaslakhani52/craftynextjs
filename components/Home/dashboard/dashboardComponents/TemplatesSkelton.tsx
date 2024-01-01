import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import Skelton from "@/components/common/Skelton";
import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

export default function TemplatesSkelton() {
  const screenWidth = useScreenWidth();
  console.log("screenWidth: ", screenWidth);

  const height = useMemo(() => {
    let val;

    if (screenWidth) {
      if (screenWidth < 600) {
        val = 100;
      } else val = 250;
    }

    return val;
  }, [screenWidth]);
  console.log("height: ", height);
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
