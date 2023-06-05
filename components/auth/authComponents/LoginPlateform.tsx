import { Box, Button } from "@mui/material";
import React from "react";

export const LoginButton = (props: any) => {
  return (
    <Button
      sx={{
        display: "flex",
        gap: "18px",
        color: "#1C3048",
        textTransform: "unset",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F7FE !important",
        boxShadow: "0px 0px 3px 1px rgba(28, 48, 72, 0.15)",
        borderRadius: "10px",
        padding: "9px",
      }}
      className="text-[16px] max-2sm:text-[12px]"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default function LoginPlateform() {
  return (
    <Box className="flex flex-col gap-4 my-5">
      <LoginButton>
        <img
          src="./icons/google1.svg"
          alt="google"
          className="w-[24px] h-[24px]"
        />
        Continue with Google
      </LoginButton>
      <LoginButton>
        <img
          src="./icons/facebookLogin.svg"
          alt="facebookLogin"
          className="w-[24px] h-[24px]"
        />
        Continue with Facebook
      </LoginButton>
      <LoginButton>
        <img
          src="./icons/mobileLogin.svg"
          alt="mobileLogin"
          className="w-[24px] h-[24px]"
        />
        Log in with Mobile
      </LoginButton>
    </Box>
  );
}
