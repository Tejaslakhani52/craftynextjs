// import { Box, Button } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import MenuBox from "./headerComponents/Menu";
// import LoginButton from "./headerComponents/LoginButton";
// import { useRouter } from "next/router";
// import Sidebar from "../sidebar/Sidebar";
// import Profile from "../profileAndNotification/Profile";
// import { tokenGet } from "@/redux/action/AuthToken";
// import { useDispatch, useSelector } from "react-redux";
// import { openSidebar } from "@/redux/reducer/actionDataReducer";
// import { tokenValue } from "@/redux/reducer/AuthDataReducer";

// export default function Header({ sidebarOpen, setSidebarOpen }: any) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const token = authCookiesGet();
//   const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
//   const [openLogin, setOpenLogin] = useState<boolean>(false);
//   const [openSignUp, setOpenSignUp] = useState<boolean>(false);
//   const [searchValue, setSearchValue] = useState<any>("");

//   useEffect(() => {
//     setSidebarOpen(sideBarRedux);
//   }, [sideBarRedux]);

//   useEffect(() => {
//     if (token) {
//       dispatch(openSidebar(true));
//       dispatch(tokenValue(true));
//     }
//   }, [token]);

//   return (
//     <>
//       <Box
//         className="fixed top-0 left-0 right-0 h-[70px] bg-white flex items-center px-5  z-[100] lg:z-[1000] gap-12 header"
//         sx={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.08)" }}
//       >
//         <Box className="w-[60%] flex items-center justify-start gap-12 max-lg:w-[40%]">
//           <Box className="flex items-center justify-start gap-5">
//             <Button
//               className="py-3 min-w-[30px] px-1 block lg:hidden"
//               onClick={() => {
//                 dispatch(openSidebar(!sideBarRedux));
//                 setSidebarOpen(!sideBarRedux);
//               }}
//             >
//               <img
//                 src="/icons/menuOpen.svg"
//                 alt="menuOpen"
//                 className="w-[22px] mx-auto"
//               />
//             </Button>
//             {token && (
//               <Button
//                 className="py-3 min-w-[30px] px-1 hidden lg:block"
//                 onClick={() => {
//                   dispatch(openSidebar(!sideBarRedux));
//                   setSidebarOpen(!sideBarRedux);
//                 }}
//               >
//                 <img
//                   src="/icons/menuOpen.svg"
//                   alt="menuOpen"
//                   className="w-[22px] mx-auto"
//                 />
//               </Button>
//             )}
//             <Box
//               className="w-[146px] cursor-pointer "
//               onClick={() => router.push("/")}
//             >
//               <img
//                 src="/images/logo.svg"
//                 alt="logo"
//                 className="w-[147px] max-lg:w-[127px]  max-2sm:w-[80px]"
//               />
//             </Box>
//           </Box>

//           <MenuBox />
//         </Box>
//         <Box
//           className="w-[40%] flex items-center justify-end gap-4 max-lg:w-[60%]"
//           onKeyPress={(e) => {
//             const modifiedValue = searchValue.replace(/ /g, "-");

//             if (e.key === "Enter") {
//               if (searchValue) {
//                 router.push(`s/${modifiedValue}`);
//               }
//             }
//           }}
//         >
//           <Box className="w-[80%] bg-[#F4F7FE] px-4 py-[9px] rounded-[6px] flex items-center gap-3 max-sm:hidden">
//             <Box className="w-[16px] flex items-center">
//               <img src="/icons/SearchIcon.svg" alt="SearchIcon" />
//             </Box>
//             <input
//               type="text"
//               value={searchValue}
//               placeholder="Search your content or CraftyArt’s"
//               className="bg-transparent w-[100%] focus:outline-0 text-[14px]"
//               onChange={(e) => setSearchValue(e.target.value)}
//             />
//           </Box>
//           <Box className="w-[16px] flex items-center sm:hidden cursor-pointer">
//             <img src="/icons/SearchIcon.svg" alt="SearchIcon" />
//           </Box>

//           {token ? (
//             <Profile />
//           ) : (
//             <LoginButton
//               openLogin={openLogin}
//               setOpenLogin={setOpenLogin}
//               openSignUp={openSignUp}
//               setOpenSignUp={setOpenSignUp}
//             />
//           )}

//           {/* <Profile /> */}
//         </Box>
//       </Box>

//       <Sidebar
//         open={sidebarOpen}
//         setOpen={setSidebarOpen}
//         openLogin={openLogin}
//         setOpenLogin={setOpenLogin}
//         openSignUp={openSignUp}
//         setOpenSignUp={setOpenSignUp}
//       />
//     </>
//   );
// }

import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import { authCookiesGet } from "@/redux/action/AuthToken";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { Box, Button, Menu } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../profileAndNotification/Profile";
import Sidebar from "../sidebar/Sidebar";
import LoginButton from "./headerComponents/LoginButton";
import MenuBox from "./headerComponents/Menu";
import Icons from "@/assets";

export default function Header({ sidebarOpen, setSidebarOpen }: any) {
  const screenWidth = useScreenWidth();
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const token = authCookiesGet();
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>("");

  useEffect(() => {
    setSidebarOpen(sideBarRedux);
  }, [sideBarRedux]);

  const enterYourAccount = useSelector(
    (state: any) => state.actions.enterAccount
  );

  const handleClick = (event: any) => {
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
        <Box
          className="w-[40%] flex items-center justify-end gap-4 max-lg:w-[60%]"
          onKeyPress={(e) => {
            const trimmedValue = searchValue?.trim();
            const modifiedValue = trimmedValue?.replace(/ /g, "-");

            if (e.key === "Enter") {
              // if (modifiedValue !== "" && !executed) {
              //   console.log("modifiedValue: ", modifiedValue);
              router.push(`/s/${modifiedValue}`);
            }
            // }
          }}
        >
          <Box className="w-[80%] bg-[#F4F7FE] px-4 py-[9px] rounded-[6px] flex items-center gap-3 max-sm:hidden">
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
            {/* <Box className="max-sm:hidden"> */}
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

          {/* <Profile /> */}
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
