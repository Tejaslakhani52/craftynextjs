import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { auth } from "@/firebase";
import { createUserApi } from "@/redux/action/AuthAction";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Input from "./Input";
import LoginPlateform from "./LoginPlateform";
import Password from "./Password";

export default function SignUpContentBox(props: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<any>(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [verifiedDone, setverifiedDone] = useState<boolean>(false);
  const [emailDialogShow, setEmailDialogShow] = useState<boolean>(false);
  const [finalUser, setFinalUser] = useState<any>(null);
  const [createAcount, setcreateAcount] = useState<any>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    if (!currentUser?.emailVerified) {
      const interval = setInterval(() => {
        currentUser
          ?.reload()
          .then(() => {
            if (currentUser?.emailVerified) {
              setverifiedDone(true);
              clearInterval(interval);
            }
          })
          .catch((err: any) => {
            // alert(err.message);
          });
      }, 1000);
    }
  }, [currentUser]);

  const handleSubmission = () => {
    setIsLoading(true);
    if (
      !createAcount.name ||
      !createAcount.email ||
      !createAcount.password ||
      !createAcount.confirmPassword
    ) {
      toast.error("Please fill out all required fields.");
      setIsLoading(false);
      return;
    }
    if (createAcount?.password !== createAcount?.confirmPassword) {
      setcreateAcount({ ...createAcount, confirmPassword: "" });
      toast.error("Confirm password not match password");
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      createAcount.email,
      createAcount.password
    )
      .then(async (res: any) => {
        const user = res?.user;
        updateProfile(user, {
          displayName: createAcount.name,
        });
        setFinalUser(user);
      })
      .then(() =>
        sendEmailVerification(auth.currentUser).then(async (res: any) => {
          toast.success(
            `A Verification email has been sent to ${createAcount.email}`
          );

          setIsLoading(false);
          setEmailDialogShow(true);
          // const user = res?.user;
        })
      )
      .catch((error) => {
        toast.error(error?.code.split("auth/")[1]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (verifiedDone) {
      fetchData();
    }
  }, [verifiedDone, currentUser]);

  const fetchData = async () => {
    dispatch(
      createUserApi(
        {
          key: "qwfsegxdhbxfjhncf",
          user_id: finalUser?.uid,
          name: finalUser?.displayName,
          email: finalUser?.email,
          photo_uri: "",
          login_type: "email",
          device_id: "",
          utm_medium: "craftyart",
          utm_source: "craftyart",
        },
        router
      )
    );
  };
  return (
    <div>
      {emailDialogShow ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            padding: "30px",
          }}
        >
          <Typography sx={{ fontSize: "23px" }}>
            Verify your Email Address
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              A Verification email has been sent to:
            </Typography>
            <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
              {createAcount?.email}
            </Typography>
          </Box>

          <Typography
            sx={{ fontSize: "14px", textAlign: "center", opacity: "0.6" }}
          >
            Follow the instruction in the email to verify your account
          </Typography>
        </Box>
      ) : (
        <>
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              textAlign: "center",
              color: "#1C3048",
              fontWeight: "600",
              p: "35px  20px ",
            }}
            className="text-[24px] max-2sm:text-[18px]"
          >
            <Button
              onClick={props?.handleClose}
              className="min-w-[auto] relative left-[-20px]"
              sx={{ display: props?.handleClose ? "inline-block" : "none" }}
            >
              <img
                src="./icons/leftArrow.svg"
                alt="leftArrow"
                className="w-[10px]"
              />
            </Button>
            {"Create an Account"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ color: "#1C3048", fontSize: "14px", textAlign: "center" }}
            >
              Sign up now and start your journey with Crafty Art(it's free)!
            </DialogContentText>
            <LoginPlateform />
            <Box className="flex items-center justify-between">
              <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
              <Typography className="text-black">or</Typography>
              <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
            </Box>

            <Box className="flex flex-col gap-4 my-5">
              <Input
                label="Name"
                value={createAcount?.name}
                onChange={(e: any) =>
                  setcreateAcount({ ...createAcount, name: e.target.value })
                }
              />
              <Input
                label="Email"
                value={createAcount?.email}
                onChange={(e: any) =>
                  setcreateAcount({ ...createAcount, email: e.target.value })
                }
              />
              <Password
                label="Password"
                value={createAcount?.password}
                onChange={(e: any) =>
                  setcreateAcount({
                    ...createAcount,
                    password: e.target.value,
                  })
                }
              />
              <Password
                label="Confirm Password"
                value={createAcount?.confirmPassword}
                onChange={(e: any) =>
                  setcreateAcount({
                    ...createAcount,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Box>

            <Box className="flex items-start mb-6">
              <Box className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-[15px]"
                  required
                />
              </Box>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  max-2sm:text-[12px]">
                I agree to CraftyArt's
                <span className="text-[#5961F8]"> Terms of Service </span> and
                <span className="text-[#5961F8]"> Privacy policy </span>
              </label>
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
              className="bg_linear  "
              onClick={handleSubmission}
            >
              Sign up
            </Button>

            <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
              Already have an account?
              <span
                className="text-[#5961F8] cursor-pointer"
                onClick={() => {
                  if (
                    props.setOpenSignUp &&
                    props.setOpenLogin &&
                    props?.setOpen
                  ) {
                    props.setOpenSignUp(false);
                    props.setOpenLogin(true);
                    props?.setOpen(false);
                  } else router.push("/login");
                }}
              >
                {" "}
                Log in
              </span>
            </Typography>
          </DialogContent>
        </>
      )}
    </div>
  );
}
