import ForgotPass from "@/components/auth/authComponents/ForgotPass";
import LoginContentBox from "@/components/auth/authComponents/LoginContentBox";
import { Box } from "@mui/material";
import { useState } from "react";

export default function index() {
  const [forgot, setForgot] = useState<boolean>(false);

  return (
    <Box>
      <Box
        className="fixed top-0 left-0 right-0 bottom-0 z-[10002] bg-cover bg-left flex items-center"
        style={{
          backgroundImage: "url(./images/loginBanner.png)",
        }}
      >
        <Box
          className="bg-white w-[450px] ml-[100px] rounded-[10px]"
          sx={{ boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.10)" }}
        >
          {forgot ? (
            <ForgotPass setForgot={setForgot} />
          ) : (
            <LoginContentBox setForgot={setForgot} />
          )}
        </Box>

        <Box className="mx-[50px] w-[450px]">
          <h1 className="text-[38px] font-[700] text-[#ffff] mb-5">
            Welcome to a World of Creative Designs!
          </h1>

          <Box className="flex gap-3 items-start mb-2">
            <img src="/icons/setting_1.svg" alt="" className="w-[20px]" />
            <p className="text-[#fff]">All in One Graphic Design Tool</p>
          </Box>
          <Box className="flex gap-3 items-start mb-2">
            <img src="/icons/pen-tool_1.svg" alt="" className="w-[20px]" />
            <p className="text-[#fff]">
              Discover Limitless Possibilities with Crafty Art Graphic Design
              Tool
            </p>
          </Box>

          <Box className="flex gap-3 items-start mb-2">
            <img src="/icons/customization_1.svg" alt="" className="w-[20px]" />
            <p className="text-[#fff]">Ready To Use Customizable Templates</p>
          </Box>

          <Box className="flex gap-3 items-start mb-2">
            <img src="/icons/drag-and-drop_1.svg" alt="" className="w-[20px]" />
            <p className="text-[#fff]">User Friendly Drag-and-Drop Interface</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
