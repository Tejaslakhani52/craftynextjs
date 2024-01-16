import Icons from "@/src/assets";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { Box, Button, Menu } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../profileAndNotification/Profile";
import Sidebar from "../sidebar/Sidebar";
import LoginButton from "./headerComponents/LoginButton";
import MenuBox from "./headerComponents/Menu";

export default function Header({ sidebarOpen, setSidebarOpen }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>("");
  const [token, setToken] = React.useState<string | null>("default");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(authCookiesGet());
    }
  }, []);

  useEffect(() => {
    setSidebarOpen(sideBarRedux);
  }, [sideBarRedux]);

  const enterYourAccount = useSelector(
    (state: any) => state.actions.enterAccount
  );

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box
        className="fixed top-0 left-0 right-0 h-[70px] bg-white flex items-center px-5  z-[100] lg:z-[1000] gap-12 header"
        sx={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.08)" }}
      >
        <Box className="w-[60%] flex items-center justify-start gap-12 max-lg:w-[40%]">
          <Box className="flex items-center justify-start gap-5">
            <Box>
              <Button
                className="py-3 min-w-[30px] px-1 block lg:hidden"
                onClick={() => {
                  dispatch(openSidebar(!sideBarRedux));
                  setSidebarOpen(!sideBarRedux);
                }}
              >
                <span className="cursor-pointer mx-auto">
                  <Icons.menuOpenIcon svgProps={{ width: 22 }} />
                </span>
              </Button>
            </Box>
            {!enterYourAccount && token && (
              <Box>
                <Button
                  className="py-3 min-w-[30px] px-1 hidden lg:block"
                  onClick={() => {
                    dispatch(openSidebar(!sideBarRedux));
                    setSidebarOpen(!sideBarRedux);
                  }}
                >
                  <span className="cursor-pointer mx-auto">
                    <Icons.menuOpenIcon svgProps={{ width: 22 }} />
                  </span>
                </Button>
              </Box>
            )}
            <Link href={"/"} className="w-[146px] cursor-pointer ">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="w-[147px] max-lg:w-[127px]  max-2sm:w-[80px]"
              />
            </Link>
          </Box>

          <MenuBox />
        </Box>
        <Box className="w-[40%] flex items-center justify-end gap-4 max-lg:w-[60%]">
          <Box
            className="w-[80%] bg-[#F4F7FE] px-4 py-[9px] rounded-[6px] flex items-center gap-3 max-sm:hidden"
            onKeyPress={(e) => {
              const trimmedValue = searchValue?.trim();
              const modifiedValue = trimmedValue?.replace(/ /g, "-");

              if (e.key === "Enter") {
                router.push(`/s/${modifiedValue}`);
              }
            }}
          >
            <Box className="w-[16px] flex items-center">
              <Icons.searchIcon />
            </Box>
            <input
              type="text"
              value={searchValue}
              placeholder="Search your content or CraftyArt’s"
              className="bg-transparent w-[100%] focus:outline-0 text-[14px]"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Box>
          <Box
            className="flex items-center sm:hidden cursor-pointer p-2"
            onClick={handleClick}
          >
            <span className="cursor-pointer mx-auto">
              <Icons.searchIcon svgProps={{ width: 20 }} />
            </span>
          </Box>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box className="pl-[10px] pr-[10px] flex gap-[10px]">
              <Box className="w-[250px] bg-[#F4F7FE] px-4 py-[9px] rounded-[6px] flex items-center gap-3  ">
                <Box className="w-[16px] flex items-center">
                  <Icons.searchIcon svgProps={{ width: 16 }} />
                </Box>
                <input
                  type="text"
                  value={searchValue}
                  placeholder="Search your content or CraftyArt’s"
                  className="bg-transparent w-[100%] focus:outline-0 text-[14px]"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Box>
              <Box>
                <Button
                  className="text-white bg_linear normal-case"
                  onClick={(e: any) => {
                    const trimmedValue = searchValue?.trim();
                    const modifiedValue = trimmedValue?.replace(/ /g, "-");
                    router.push(`/s/${modifiedValue}`);
                    setAnchorEl(null);
                  }}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Menu>
          <Box className="">
            {token ? (
              <Box>
                <Profile />
              </Box>
            ) : (
              <Box>
                <LoginButton
                  openLogin={openLogin}
                  setOpenLogin={setOpenLogin}
                  openSignUp={openSignUp}
                  setOpenSignUp={setOpenSignUp}
                />{" "}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
      />
    </>
  );
}
