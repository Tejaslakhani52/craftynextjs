import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import Password from "./authComponents/Password";
import Input from "./authComponents/Input";
import LoginPlateform from "./authComponents/LoginPlateform";

export default function Login(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            textAlign: "center",
            color: "#1C3048",
            fontWeight: "600",
            p: "35px 0 5px ",
            fontSize: "24px",
          }}
          className=" max-2sm:text-[18px]"
        >
          <Button
            onClick={handleClose}
            className="min-w-[auto] relative left-[-20px] max-sm:left-[-3px]"
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
            <Input label="Email" />
            <Password label="Password" />
          </Box>

          <Box className="flex items-start mb-6">
            <Box
              className="flex justify-between items-center  "
              sx={{ minWidth: { xs: "100%", sm: "380px" } }}
            >
              <Box className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-[15px]"
                  required
                />
                <label className="ml-2 text-sm font-medium text-black   max-2sm:text-[13px]">
                  Remember me
                </label>
              </Box>

              <Typography className="text-[#5961F8] cursor-pointer text-[14px]  max-2sm:text-[13px]">
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
          >
            Log in
          </Button>

          <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
            New to CraftyArt?
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={() => {
                props.setOpenLogin(false);
                props.setOpenSignUp(true);
                setOpen(false);
              }}
            >
              {" "}
              Create an account
            </span>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
