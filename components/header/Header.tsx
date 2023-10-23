import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuBox from "./headerComponents/Menu";
import LoginButton from "./headerComponents/LoginButton";
import { useRouter } from "next/router";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../profileAndNotification/Profile";
import { tokenGet } from "@/redux/action/AuthToken";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/redux/reducer/actionDataReducer";

// import { logo } from "../../public/images/logo.svg";

export default function Header({ sidebarOpen, setSidebarOpen }: any) {
  const dispatch = useDispatch();
  const token = tokenGet("userProfile");
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  console.log("token: ", token);
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);

  useEffect(() => {
    setSidebarOpen(sideBarRedux);
  }, [sideBarRedux]);

  return (
    <div>
      <Box
        className="fixed top-0 left-0 right-0 h-[70px] bg-white flex items-center px-5  z-[100] lg:z-[1000] gap-12 header"
        sx={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.08)" }}
      >
        <Box className="w-[60%] flex items-center justify-start gap-12 max-lg:w-[40%]">
          <Box className="flex items-center justify-start gap-5">
            <div>
              <Button
                className="py-3 min-w-[30px] px-1 block lg:hidden"
                onClick={() => {
                  dispatch(openSidebar(!sideBarRedux));
                  setSidebarOpen(!sideBarRedux);
                }}
              >
                <img
                  src="./icons/menuOpen.svg"
                  alt="menuOpen"
                  className="w-[22px] mx-auto"
                />
              </Button>
            </div>

            {token && (
              <div style={{ display: token ? "block" : "none" }}>
                <Button
                  className="py-3 min-w-[30px] px-1 hidden lg:block"
                  onClick={() => {
                    dispatch(openSidebar(!sideBarRedux));
                    setSidebarOpen(!sideBarRedux);
                  }}
                >
                  <img
                    src="./icons/menuOpen.svg"
                    alt="menuOpen"
                    className="w-[22px] mx-auto"
                  />
                </Button>
              </div>
            )}
            <Box
              className="w-[146px] cursor-pointer "
              onClick={() => router.push("/")}
            >
              <img
                src="./images/logo.svg"
                alt="logo"
                className="w-[147px] max-lg:w-[127px]   max-2sm:w-[80px]"
              />
            </Box>
          </Box>
          <div>
            <MenuBox />
          </div>
        </Box>
        <Box className="w-[40%] flex items-center justify-end gap-4 max-lg:w-[60%]">
          <Box className="w-[80%] bg-[#F4F7FE] px-4 py-[9px] rounded-[6px] flex items-center gap-3 max-sm:hidden">
            <Box className="w-[16px] flex items-center">
              <img src="./icons/SearchIcon.svg" alt="SearchIcon" />
            </Box>
            <input
              type="text"
              placeholder="Search your content or CraftyArt’s"
              className="bg-transparent w-[100%] focus:outline-0 text-[14px]"
            />
          </Box>
          <Box className="w-[16px] flex items-center sm:hidden cursor-pointer">
            <img src="./icons/SearchIcon.svg" alt="SearchIcon" />
          </Box>

          <div style={{ display: token ? "block" : "none" }}>
            <Profile />
          </div>

          <div style={{ display: token ? "none" : "block" }}>
            <LoginButton
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              openSignUp={openSignUp}
              setOpenSignUp={setOpenSignUp}
            />
          </div>
        </Box>
      </Box>
      <div>
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          openSignUp={openSignUp}
          setOpenSignUp={setOpenSignUp}
        />
      </div>
    </div>
  );
}
