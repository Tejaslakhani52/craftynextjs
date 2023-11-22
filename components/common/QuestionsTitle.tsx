import { Typography } from "@mui/material";
import React from "react";

interface props {
  text1: string;
  text2: string;
  text3: string;
}

export default function QuestionsTitle({ text1, text2, text3 }: props) {
  return (
    <Typography
      sx={{
        color: "#000",
        fontWeight: "600",
        textAlign: "center",
      }}
      className="max-sm:text-[22px]  lg:text-[32px]   "
    >
      {text1}
      <span
        style={{
          width: "100%",
          margin: "0 10px",
        }}
        className="text_linear"
      >
        {text2}
      </span>
      {text3}
    </Typography>
  );
}
