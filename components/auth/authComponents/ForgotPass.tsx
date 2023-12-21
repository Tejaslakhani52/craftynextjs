import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { auth } from "@/firebase";
import { authCookiesSet, tokenSet } from "@/redux/action/AuthToken";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Input from "./Input";
import Password from "./Password";

export default function ForgotPass(props: any) {
  const router = useRouter();
  const [enterNewPass, setEnterNewPass] = useState<boolean>(false);
  const [process, setProcess] = useState<boolean>(false);
  const [emailPassword, setemailPassword] = useState<any>({
    email: "",
    password: "",
  });

  const [emailDialogShow, setEmailDialogShow] = useState<boolean>(false);

  const handleResetPassSubmit = async (e: any) => {
    e.preventDefault();
    setProcess(true);
    sendPasswordResetEmail(auth, emailPassword?.email)
      .then((res) => {
        setEnterNewPass(true);
        toast.success("Password reset email sent.");
        setEmailDialogShow(true);
        setProcess(false);
      })
      .catch((error: any) => {
        toast.error(error.message);
        setProcess(false);
      });
  };

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
      authCookiesSet(userCredential?.user?.uid);
      router.push("/");

      setTimeout(() => {
        window.location.reload();
      }, 100);
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
        {emailDialogShow
          ? "Login With Your New Password"
          : "Forgot your password?"}
      </DialogTitle>

      {emailDialogShow && (
        <div>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            A Verification Reset Password has been sent to:
          </Typography>
          <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
            {emailPassword?.email}
          </Typography>
        </div>
      )}

      <DialogContent sx={{ padding: emailDialogShow ? "0 35px 35px" : "35px" }}>
        {emailDialogShow ? (
          <DialogContentText
            sx={{
              color: "#1C3048",
              fontSize: "13px",
              textAlign: "center",
              maxWidth: "350px",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ opacity: "0.7", textAlign: "center", mt: 2 }}>
              Check your email <strong>{emailPassword?.email}</strong> and
              create a new password and enter that password here
            </Typography>
          </DialogContentText>
        ) : (
          <DialogContentText
            sx={{
              color: "#1C3048",
              fontSize: "13px",
              textAlign: "center",
              maxWidth: "350px",
            }}
          >
            Just give us the email address you used to create your account and
            we will send you reset instructions.
          </DialogContentText>
        )}
        <Box className="flex flex-col gap-4 my-5">
          {emailDialogShow ? (
            <Password
              label="New Password"
              onChange={(e: any) =>
                setemailPassword({
                  ...emailPassword,
                  password: e.target.value,
                })
              }
            />
          ) : (
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
          )}
        </Box>

        {enterNewPass ? (
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
            Sign in
          </Button>
        ) : process ? (
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
          >
            Send email
          </Button>
        ) : (
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
            onClick={handleResetPassSubmit}
          >
            Send email
          </Button>
        )}

        {emailDialogShow && (
          <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
            Didn’t receive the email?
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={handleResetPassSubmit}
            >
              {" "}
              Click to resend
            </span>
          </Typography>
        )}

        <Box className="flex justify-center mt-2">
          <Button
            className="gap-2 flex text-[#000] normal-case	"
            onClick={() => props?.setForgot(false)}
          >
            <KeyboardBackspaceIcon />
            Back to log in
          </Button>
        </Box>
      </DialogContent>
    </div>
  );
}
