import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
// import { useNavigate } from "react-router-dom";

export default function GetTemplates(props: any) {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 20px",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "600",
              lineHeight: "41px",
              textAlign: "center",
            }}
            className="text-[25px] sm:text-[31px]"
          >
            {props?.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#ffffff",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {props?.text}
          </Typography>
        </Box>

        <Button
          style={{
            backgroundColor: "white",
            width: "fit-content",
            fontSize: "18px",
            textTransform: "unset",
            borderRadius: "10px",
            fontWeight: "500",
          }}
          onClick={() => router.push(props.navigate)}
          className=" py-[10px] px-[15px]"
        >
          <Typography
            sx={{
              fontSize: "17px",
              color: "white",
              width: "100%",
              fontWeight: "500",
            }}
            className="text_linear"
          >
            Get All Templates
          </Typography>
        </Button>
      </Box>
    </>
  );
}
