import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";

export default function LoginButton({
  openLogin,
  setOpenLogin,
  openSignUp,
  setOpenSignUp,
}: any) {
  return (
    <Box className="w-[auto] flex justify-end   sm:gap-4 items-center">
      <Login
        setOpenSignUp={setOpenSignUp}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />
      <Box className="max-sm:hidden">
        <SignUp
          setOpenLogin={setOpenLogin}
          openSignUp={openSignUp}
          setOpenSignUp={setOpenSignUp}
        />
      </Box>
    </Box>
  );
}
