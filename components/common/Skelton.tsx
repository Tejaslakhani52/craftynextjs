import { Box, Skeleton } from "@mui/material";
import React from "react";

export default function Skelton({ height, width, round, fill, line }: any) {
  return (
    <>
      <Box
        className={` flex gap-[10px] ${
          line === "row" ? "flex-row" : "flex-col"
        } `}
      >
        {Array(fill)
          .fill("")
          .map(() => (
            // <Box
            //   className={`h-[${height}] bg-gray-200 rounded-[${round}] dark:bg-gray-700 w-[${width}] mb-4 `}
            // ></Box>
            <Skeleton
              variant="rectangular"
              width={width}
              height={height}
              className={`rounded-[${round}]`}
            />
          ))}
      </Box>
    </>
  );
}
