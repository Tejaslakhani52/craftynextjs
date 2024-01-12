import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import LoginContentBox from "./authComponents/LoginContentBox";
import ForgotPass from "./authComponents/ForgotPass";
import { useState } from "react";

export default function Login(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [forgot, setForgot] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setOpenLogin(false);
  };

  React.useEffect(() => {
    setOpen(props.openLogin);
  }, [props.openLogin]);

  return (
    <div className="w-full">
      <Button
        sx={{
          textTransform: "unset",
          fontSize: "14px",
          fontWeight: "400",
          color: "#1C3048",
          whiteSpace: "nowrap",
          opacity: "1",
          backgroundColor: "#F4F7FE !important",
          borderRadius: "6px",
          px: 2,
        }}
        className={`sm:flex hidden ${props?.width && "w-[100%]"}`}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Button
        sx={{
          textTransform: "unset",
          fontSize: "14px",
          fontWeight: "400",
          color: "white",
          whiteSpace: "nowrap",
          opacity: "1",
          px: 2,
          borderRadius: "6px",
        }}
        className={` flex sm:hidden ${
          props.width
            ? "bg-[#F4F7FE] w-full text-black"
            : "bg_linear text-white"
        }`}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {forgot ? (
          <ForgotPass setForgot={setForgot} />
        ) : (
          <LoginContentBox
            setOpenLogin={props.setOpenLogin}
            setOpenSignUp={props.setOpenSignUp}
            handleClose={handleClose}
            setOpen={setOpen}
            setForgot={setForgot}
          />
        )}
      </Dialog>
    </div>
  );
}
