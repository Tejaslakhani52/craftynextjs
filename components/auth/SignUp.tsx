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

export default function SignUp(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setOpenSignUp(false);
  };

  React.useEffect(() => {
    setOpen(props.openSignUp);
  }, [props.openSignUp]);

  return (
    <div className="w-full">
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
        className={`bg_linear ${props?.width && "w-[100%]"}`}
        onClick={handleClickOpen}
      >
        Sign up
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
            p: "35px  20px ",
          }}
          className="text-[24px] max-2sm:text-[18px]"
        >
          <Button
            onClick={handleClose}
            className="min-w-[auto] relative left-[-20px]"
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
            <Input label="Name" />
            <Input label="Email" />
            <Password label="Password" />
            <Password label="Confirm Password" />
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
          >
            Sign up
          </Button>

          <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
            Already have an account?
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={() => {
                props.setOpenSignUp(false);
                props.setOpenLogin(true);
                setOpen(false);
              }}
            >
              Log in
            </span>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
