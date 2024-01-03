import { Box, Skeleton } from "@mui/material";
import React from "react";

export default function Skelton({
  height,
  width,
  round,
  fill,
  line,
  gap,
  text,
  textH,
  textW,
  title,
}: any) {
  return (
    <div>
      {title && (
        <Skeleton
          variant="rectangular"
          width={"150px"}
          height={"20px"}
          style={{
            borderRadius: `20px`,
            marginBottom: "10px",
          }}
        />
      )}
      <Box
        className={` flex    ${line === "row" ? "flex-row" : "flex-col"} `}
        style={{ gap: gap ? gap : "10px" }}
      >
        {Array(fill)
          .fill("")
          .map((item, index) => (
            <div key={index}>
              <Skeleton
                variant="rectangular"
                width={width}
                height={height}
                style={{
                  borderRadius: `${round}`,
                  marginBottom: text ? "10px" : "",
                }}
              />

              {text && (
                <Skeleton
                  variant="rectangular"
                  width={textW}
                  height={textH}
                  style={{ borderRadius: `${round}` }}
                />
              )}
            </div>
          ))}
      </Box>
    </div>
  );
}
