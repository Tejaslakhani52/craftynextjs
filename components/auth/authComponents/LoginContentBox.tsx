import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { tokenSet } from "@/redux/action/AuthToken";
import Cookies from "js-cookie";
import { useEffect } from "react";
import LoginPlateform from "./LoginPlateform";
import Input from "./Input";
import Password from "./Password";

const firebaseConfig = {
  apiKey: "AIzaSyCQP7F26DBVJvXWNgwS3lerBUCGcbH2z4U",
  authDomain: "craftylogin.firebaseapp.com",
  projectId: "craftylogin",
  storageBucket: "craftylogin.appspot.com",
  messagingSenderId: "291310090237",
  appId: "1:291310090237:web:dafb389be0203fc4d04b94",
};

const app = initializeApp(firebaseConfig);

export const auth: any = getAuth(app);

export default function LoginContentBox(props: any) {
  const router = useRouter();
  const [remember, setRemember] = useState<boolean>(false);
  const [emailPassword, setemailPassword] = useState<any>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedCredentials = Cookies.get("rememberMeCredentials");
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      setemailPassword(credentials);
      setRemember(true);
    }
  }, []);

  const handleSignIn = async () => {
    if (!emailPassword?.email || !emailPassword?.password) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        emailPassword.email,
        emailPassword.password
      );

      toast.success("Success Login");
      tokenSet("userProfile", userCredential?.user?.uid);
      router.push("/");

      setTimeout(() => {
        window.location.reload();
      }, 100);

      if (remember) {
        Cookies.set(
          "rememberMeCredentials",
          JSON.stringify({
            email: emailPassword.email,
            password: emailPassword.password,
          }),
          { expires: 30 }
        );
      } else {
        Cookies.remove("rememberMeCredentials");
      }
    } catch (error: any) {
      toast.error(error?.code.split("auth/")[1]);
    }
  };
  return (
    <div>
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          textAlign: "center",
          color: "#1C3048",
          fontWeight: "600",
          p: "35px 30px 5px ",
          fontSize: "24px",
        }}
        className=" max-2sm:text-[18px]"
      >
        <Button
          onClick={props?.handleClose}
          className="min-w-[auto] relative left-[-10px] top-[-3px] max-sm:left-[-3px]"
          sx={{ display: props?.handleClose ? "inline-block" : "none" }}
        >
          <img
            src="./icons/leftArrow.svg"
            alt="leftArrow"
            className="w-[10px]"
          />
        </Button>
        {"Welcome Back to CraftyArt!"}
      </DialogTitle>
      <DialogContent sx={{ padding: "35px" }}>
        <DialogContentText
          sx={{ color: "#1C3048", fontSize: "14px", textAlign: "center" }}
        >
          It sure is great to see you again.
        </DialogContentText>
        <LoginPlateform />
        <Box className="flex items-center justify-between">
          <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
          <Typography className="text-black">or</Typography>
          <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
        </Box>

        <Box className="flex flex-col gap-4 my-5">
          <Input
            label="Email"
            value={emailPassword?.email}
            onChange={(e: any) =>
              setemailPassword({
                ...emailPassword,
                email: e.target.value,
              })
            }
          />
          <Password
            label="Password"
            onChange={(e: any) =>
              setemailPassword({
                ...emailPassword,
                password: e.target.value,
              })
            }
          />
        </Box>

        <Box className="flex items-start mb-6">
          <Box
            className="flex justify-between items-center"
            sx={{ minWidth: { xs: "100%", sm: "380px" } }}
          >
            <Box className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-[15px]"
                required
              />
              <label className="ml-2 text-sm font-medium text-black   max-2sm:text-[13px]">
                Remember me
              </label>
            </Box>

            <Typography
              className="text-[#5961F8] cursor-pointer text-[14px]  max-2sm:text-[13px]"
              onClick={() => props?.setForgot(true)}
            >
              Forgot your Password?
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            textTransform: "unset",
            fontSize: "14px",
            fontWeight: "400",
            color: "white",
            whiteSpace: "nowrap",
            opacity: "1",
            width: "100%",
            borderRadius: "8px",
            padding: "12px 10px",
          }}
          className="bg_linear"
          onClick={handleSignIn}
        >
          Log in
        </Button>

        <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
          New to CraftyArt?
          <span
            className="text-[#5961F8] cursor-pointer"
            onClick={() => {
              if (props.setOpenLogin && props.setOpenSignUp && props?.setOpen) {
                props.setOpenLogin(false);
                props.setOpenSignUp(true);
                props?.setOpen(false);
              } else router.push("/signup");
            }}
          >
            {" "}
            Create an account
          </span>
        </Typography>
      </DialogContent>
    </div>
  );
}
