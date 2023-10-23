import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function CustomeButton(props: any) {
  return (
    <div>
      <Button
        sx={{
          textTransform: "unset",
          fontSize: "14px",
          fontWeight: "500",
          whiteSpace: "nowrap",
          opacity: "1",
          borderRadius: "8px",
        }}
        {...props}
      >
        {props.children}
      </Button>
    </div>
  );
}
