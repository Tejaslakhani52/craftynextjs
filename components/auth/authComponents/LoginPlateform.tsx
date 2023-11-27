import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import { Box, Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { createUserApi } from "@/redux/action/AuthAction";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCQP7F26DBVJvXWNgwS3lerBUCGcbH2z4U",
  authDomain: "craftylogin.firebaseapp.com",
  projectId: "craftylogin",
  storageBucket: "craftylogin.appspot.com",
  messagingSenderId: "291310090237",
  appId: "1:291310090237:web:dafb389be0203fc4d04b94",
};

firebase.initializeApp(firebaseConfig);

const auth: any = getAuth();

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
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userData: any = data?.user;

      dispatch(
        createUserApi(
          {
            key: "qwfsegxdhbxfjhncf",
            user_id: userData?.uid,
            name: userData?.displayName,
            email: userData?.email,
            photo_uri: userData?.photoURL,
            login_type: "google",
            device_id: "",
            utm_medium: "craftyart",
            utm_source: "craftyart",
          },
          router
        )
      );
    });
  };

  return (
    <Box className="flex flex-col gap-4 my-5">
      <LoginButton onClick={handleGoogleLogin}>
        <img
          src="/icons/google1.svg"
          alt="google"
          className="w-[24px] h-[24px]"
        />
        Continue with Google
      </LoginButton>
      {/* <LoginButton>
        <img
          src="/icons/facebookLogin.svg"
          alt="facebookLogin"
          className="w-[24px] h-[24px]"
        />
        Continue with Facebook
      </LoginButton>
      <LoginButton>
        <img
          src="/icons/mobileLogin.svg"
          alt="mobileLogin"
          className="w-[24px] h-[24px]"
        />
        Log in with Mobile
      </LoginButton> */}
    </Box>
  );
}
