import { TextField } from "@mui/material";
import React from "react";

export default function Input(props: any) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      InputProps={{
        sx: {
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ABB2C7",
            borderRadius: "10px",
            // padding: "13.5px 14px",
          },
          "&:hover": {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "1px solid #1976d2",
            },
          },
          input: {
            padding: "13.5px 14px",
          },
        },
      }}
      {...props}
    />
  );
}
