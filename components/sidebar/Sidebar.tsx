import { Box, Button, Divider, MenuItem, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditorTools,
  Product,
  Templates,
} from "../header/headerComponents/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { useRouter } from "next/router";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { tokenGet } from "@/redux/action/AuthToken";

export const sidebarMenu = [
  {
    name: "Home",
    icons: "/icons/homeIcons.svg",
    activeIcon: "/icons/homeIconActive.svg",
    path: "/",
  },
  {
    name: "Eprofile",
    icons: "/icons/profiile.svg",
    activeIcon: "/icons/profileActive.svg",
    path: "/profile",
  },
  {
    name: "Templates",
    icons: "/icons/templates.svg",
    activeIcon: "/icons/templatesActive.svg",
    path: "/templates",
  },
  {
    name: "Brand Kit",
    icons: "/icons/brandKit.svg",
    activeIcon: "/icons/brandKitActive.svg",
    path: "/brandKit",
  },
  {
    name: "Content planner",
    icons: "/icons/contentPlaner.svg",
    activeIcon: "/icons/contentPlanerActive.svg",
    path: "/contentPlanner",
  },
  {
    name: "Schedule post",
    icons: "/icons/schedulePost.svg",
    activeIcon: "/icons/schedulePostActive.svg",
    path: "/schedulePost",
  },
  {
    name: "Upload",
    icons: "/icons/upload.svg",
    activeIcon: "/icons/uploadActive.svg",
    path: "/upload",
  },
  {
    name: "Recomendation",
    icons: "/icons/recomendation.svg",
    activeIcon: "/icons/recomendationActive.svg",
    path: "/recomendation",
  },
  {
    name: "Custom Order",
    icons: "/icons/customOrder.svg",
    activeIcon: "/icons/customOrderIconActive.svg",
    path: "/customOrder",
  },
  {
    name: "Refer and earn",
    icons: "/icons/refer.svg",
    activeIcon: "/icons/referActive.svg",
    path: "/refer",
  },
];

const option = [
  {
    name: "Draft",
    icons: "/icons/draft.svg",
    activeIcon: "/icons/draftActive.svg",
    path: "/draft",
  },
  {
    name: "Trash",
    icons: "/icons/trash.svg",
    activeIcon: "/icons/trashActive.svg",
    path: "/trash",
  },
];

export const InnerButton = ({ open, data, setOpens, setOpen }: any) => {
  const router = useRouter();
  return (
    <Box
      className={`fixed  
     bottom-0 top-[70px] max-lg:top-0 bg-white w-[250px]  z-[1000000] max-lg:w-[300px] max-sm:w-[80%]
      border-[1.5px] border-r-[#D5D8E3] py-[20px]  ${
        open
          ? "left-0"
          : "left-[-268px] max-lg:left-[-350px] max-sm:left-[-80%]"
      } `}
      sx={{ transition: "0.2s all" }}
    >
      <Box className="">
        <Box
          className="px-[20px] flex items-center gap-4 pb-3 "
          // sx={{ borderBottom: "1px solid #394c6026" }}
        >
          <Button onClick={() => setOpens(false)} className="min-w-[auto]">
            {/* <KeyboardArrowLeftIcon className="text-black text-[30px]" /> */}
            <img
              src="/icons/leftArrow.svg"
              alt="leftArrow"
              className="w-[8px]"
            />
          </Button>

          <span className="text-black text-[20px] font-semibold">
            {data?.name}
          </span>
        </Box>
        <Divider />

        {data?.subName?.map((data: any) => (
          <div>
            <Box className="flex flex-col p-[20px]">
              <Typography
                className={`text-black font-semibold px-4 ${
                  data?.heading && " pb-3"
                }`}
              >
                {data?.heading}
              </Typography>
              {data?.allName?.map((item: any) => (
                <div>
                  <MenuItem
                    onClick={() => {
                      router.push(item.path);
                      setOpen(false);
                    }}
                    sx={{
                      fontSize: "14px",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#EDF0F9",
                      },
                      color:
                        router.pathname === item.path ? "#2EC6B8" : "#1C3048",
                    }}
                  >
                    {item?.name}
                  </MenuItem>
                </div>
              ))}
            </Box>
            <Divider />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default function Sidebar({
  open,
  setOpen,
  openLogin,
  setOpenLogin,
  openSignUp,
  setOpenSignUp,
}: any) {
  console.log("open: ", open);
  const router = useRouter();
  const dispatch = useDispatch();
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const MobileMenuRedux = useSelector(
    (state: any) => state.actions.openMobileMenubar
  );
  console.log("sideBarRedux: ", sideBarRedux);
  const [screenHeight, setScreenHeight] = useState(0);
  const token = tokenGet("userProfile");

  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateScreenHeight);
    updateScreenHeight();
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  const SideBarMenuButton = ({ data }: any) => {
    const [open, setOpens] = useState<boolean>(false);
    return (
      <Box>
        <Button
          className="flex gap-5 px-[20px] justify-between  w-full normal-case	text-black mb-2 relative"
          onClick={() => setOpens(!open)}
        >
          <span className="text-black text-[15px]">{data?.name}</span>
          {/* <ChevronRightIcon className="text-black" /> */}
          <img
            src="/icons/rightArrow.svg"
            alt="rightArrow"
            className="w-[7px]"
          />
        </Button>
        <div>
          <InnerButton
            open={open}
            data={data}
            setOpens={setOpens}
            setOpen={setOpen}
          />
        </div>
      </Box>
    );
  };
  return (
    <Box>
      <Box
        className={`fixed  
       bottom-0 top-[70px] max-lg:top-0  bg-[#4f4f4f6b] w-[100%]   py-[20px] block lg:hidden `}
        sx={{
          left: sideBarRedux ? "0" : "-100%",
          // transition: "0.1s all",
          zIndex: "500",
        }}
        onClick={() => dispatch(openSidebar(false))}
      ></Box>
      <Box
        className={`fixed  
       bottom-0 top-[70px] max-lg:top-0 bg-white w-[250px] max-lg:w-[300px] max-sm:w-[80%]
        py-[20px]  ${
          sideBarRedux
            ? "left-0"
            : "left-[-268px] max-lg:left-[-350px] max-sm:left-[-80%]"
        } `}
        sx={{
          // transition: "0.1s all",
          zIndex: "500",
          borderRight: "1px solid #D5D8E3",
        }}
      >
        <Box sx={{ height: `${screenHeight - 150}px`, overflow: "auto" }}>
          <Box className="block lg:hidden pb-2">
            <SideBarMenuButton data={Product} />
            <SideBarMenuButton data={EditorTools} />
            <SideBarMenuButton data={Templates} />
            <Button
              className="flex gap-5 px-[20px] justify-between  w-full normal-case	text-black mb-2 relative"
              onClick={() => setOpen(!open)}
            >
              <span className="text-black text-[15px]">Custom order</span>
            </Button>
            <Button
              className="flex gap-5 px-[20px] justify-between  w-full normal-case	text-black mb-2 relative"
              onClick={() => setOpen(!open)}
            >
              <span className="text-black text-[15px]">Pricing</span>
              <img
                src="/icons/pricing.svg"
                alt="price"
                className="ml-[8px] w-[20px] "
              />
            </Button>
          </Box>
          <Divider className="hidden max-lg:block" />
          <Box className="max-lg:py-5 px-[10px]">
            {sidebarMenu?.map((item) => (
              <Box
                className={`${
                  item.name === "Refer and earn" && "py-5 mt-3 mb-3"
                }`}
                sx={{
                  borderTop:
                    item.name === "Refer and earn"
                      ? "1px dashed #1c304840"
                      : "none",
                  borderBottom:
                    item.name === "Refer and earn"
                      ? "1px dashed  #1c304840"
                      : "none",
                }}
              >
                <Box
                  className={`flex cursor-pointer py-3 px-3 w-full hover:bg-[#F4F7FE] ${
                    router.pathname === item.path && " bg-[#F4F7FE]"
                  }    rounded-[4px]`}
                  onClick={() => router.push(item.path)}
                >
                  {/* <Box className="w-[3px] bg-[#2EC6B8] h-5px"></Box> */}
                  <Box className="flex gap-5  w-full">
                    <Box className="w-[20px]">
                      <img
                        src={
                          router.pathname === item.path
                            ? item.activeIcon
                            : item.icons
                        }
                        alt="Icons"
                      />
                    </Box>
                    <Typography
                      className={`text-[15px] ${
                        router.pathname === item.path
                          ? " active_text_linear "
                          : "text-black opacity-60"
                      }`}
                    >
                      {item.name}
                    </Typography>
                    {item.name === "Templates" && (
                      <img
                        src="/icons/rightArrow.svg"
                        alt="rightArrow"
                        className="w-[6px] ml-auto"
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
            <Typography className="px-3 text-black text-[13px] pb-1">
              OPTIONS
            </Typography>
            {option?.map((item) => (
              <Box
                className={`${item.name === "Refer and earn" && "py-5 mt-3"}`}
                sx={{
                  borderTop:
                    item.name === "Refer and earn"
                      ? "1px dashed #1c30486b"
                      : "none",
                  borderBottom:
                    item.name === "Refer and earn"
                      ? "1px dashed  #1c30486b"
                      : "none",
                }}
              >
                <Box
                  className={`flex cursor-pointer py-3 px-3 w-full ${
                    router.pathname === item.path && " bg-[#F4F7FE]"
                  }    rounded-[4px]`}
                  onClick={() => router.push(item.path)}
                >
                  {/* <Box className="w-[3px] bg-[#2EC6B8] h-5px"></Box> */}
                  <Box className="flex gap-5">
                    <Box className="w-[20px]">
                      <img
                        src={
                          router.pathname === item.path
                            ? item.activeIcon
                            : item.icons
                        }
                        alt="Icons"
                      />
                    </Box>
                    <Typography
                      className={`text-[15px] ${
                        router.pathname === item.path
                          ? " active_text_linear"
                          : "text-black opacity-60"
                      }`}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
            {/* <Box className="flex justify-center py-5 px-3">
              <Button className="bg_linear text-white gap-2 rounded-[10px] font-bold px-5 py-2 w-full ">
                <img
                  src="./icons/pricing.svg"
                  alt="price"
                  className="w-[20px]"
                />
                Upgrade to PRO
              </Button>
            </Box> */}
          </Box>
        </Box>

        <Box className="h-[150px] flex lg:hidden  flex-col items-center   gap-4 w-full px-[20px] justify-end  pb-10">
          <Button className="bg_linear text-white gap-2 rounded-[10px] font-bold px-5 py-2 w-full ">
            <img src="/icons/pricing.svg" alt="price" className="w-[20px]" />
            Upgrade to PRO
          </Button>
          {/* <SignUp
            setOpenLogin={setOpenLogin}
            openSignUp={openSignUp}
            setOpenSignUp={setOpenSignUp}
            width="100%"
          />
          <Login
            setOpenSignUp={setOpenSignUp}
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            width="100%"
          /> */}
        </Box>
      </Box>
    </Box>
  );
}
