import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import TemplatesBox from "./dashboardComponents/TemplatesBox";
import { useDispatch } from "react-redux";
import { openSidebar, openTempModal } from "@/redux/reducer/actionDataReducer";
import CustomSize from "./dashboardComponents/CustomSize";
import UploadButton from "./dashboardComponents/UploadButton";

const bannerCategory = [
  { image: "/icons/forYou.svg", name: "For you", path: "/trending" },
  {
    image: "/icons/invitation.svg",
    name: "Invitation",
    path: "/templates/invitation",
  },
  {
    image: "/icons/quotes.svg",
    name: "Quotes",
    path: "/templates/quotes-instagram-story",
  },
  {
    image: "/icons/resume.svg",
    name: "Resume",
    path: "/templates/resume-portrait",
  },
  { image: "/icons/flyer.svg", name: "Flyer", path: "/templates/flyer" },
  { image: "/icons/bannerLogo.svg", name: "Logo", path: "/templates/logos" },
  {
    image: "/icons/festival.svg",
    name: "Calendar",
    path: "/templates/calendar",
  },
  { image: "/icons/more.svg", name: "More", path: "/templates" },
];

const bannerCategoryM = [
  { image: "/icons/forYouM.svg", name: "For you", path: "/trending" },
  {
    image: "/icons/invitationM.svg",
    name: "Invitation",
    path: "/templates/invitation",
  },
  {
    image: "/icons/quotesM.svg",
    name: "Quotes",
    path: "/templates/quotes-instagram-story",
  },
  {
    image: "/icons/resumeM.svg",
    name: "Resume",
    path: "/templates/resume-portrait",
  },
  { image: "/icons/flyerM.svg", name: "Flyer", path: "/templates/flyer" },
  { image: "/icons/LogoM.svg", name: "Logo", path: "/templates/logos" },
  {
    image: "/icons/festivalM.svg",
    name: "Calendar",
    path: "/templates/calendar",
  },
  { image: "/icons/moreM.svg", name: "More", path: "/templates" },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query;

  const handleBrowserButton = () => {
    dispatch(openTempModal(true));
  };

  React.useEffect(() => {
    const handlePopstate = () => {
      if (id?.templates) {
        handleBrowserButton();
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [id?.templates]);

  return (
    <Box className="bg-[#F4F7FE]">
      <Box className="py-[10px] max-sm:py-[5px]"></Box>
      <Box className="mx-[20px] max-sm:mx-[10px] bg_linear rounded-[10px] px-[16px]">
        <Box className="max-sm:hidden">
          <Box className="flex justify-end py-[15px] gap-3 ">
            {/* <UploadButton /> */}
            <CustomSize />
          </Box>
          <Typography
            variant="h1"
            className="text-[30px] md:text-[47px] font-bold text-center  text-white max-sm:pb-8 "
          >
            What would you like to create ?
          </Typography>
          <Box className="flex max-sm:hidden lg:justify-center items-center gap-[30px] md:gap-[50px] py-10 overflow-auto scroll_none">
            {bannerCategory?.map((item) => (
              <Box
                className="flex flex-col items-center cursor-pointer gap-[10px]"
                onClick={() => {
                  dispatch(openSidebar(false));
                  router.push(item?.path);
                }}
              >
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-[50px] max-w-[50px]"
                />
                <Typography className="text-white text-center text-[14px] whitespace-nowrap">
                  {item?.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="sm:hidden py-[15px] ">
          <Box className="flex">
            <Box>
              <Typography className="text-white mb-2">Pro+</Typography>
              <Typography className="text-white whitespace-nowrap text-[20px] font-medium mb-5">
                CraftyArt & Design
              </Typography>

              <Button
                className="normal-case bg-white px-[30px]"
                onClick={() => router.push("/plans")}
              >
                <span className="text_linear">Get Pro+</span>
              </Button>
            </Box>
            <img
              src="./images/getPro.svg"
              alt="pro"
              className="max-fold:hidden"
            />
          </Box>
        </Box>
      </Box>

      {/* <Box className="mx-[20px] max-sm:mx-[0] bg_linear rounded-[10px] max-sm:rounded-[0] px-[16px]">
        <Box className="flex justify-end py-[15px] gap-3">
          <UploadButton />
          <CustomSize />
        </Box>
        <Typography
          variant="h1"
          className="text-[30px] md:text-[47px] font-bold text-center  text-white max-sm:pb-5 "
        >
          What would you like to create ?
        </Typography>
        <Box className="flex max-sm:hidden lg:justify-center items-center gap-[30px] md:gap-[50px] py-10 overflow-auto scroll_none">
          {bannerCategory?.map((item) => (
            <Box
              className="flex flex-col items-center cursor-pointer gap-[10px]"
              onClick={() => {
                dispatch(openSidebar(false));
                router.push(item?.path);
              }}
            >
              <img src={item?.image} alt="" className="w-[50px] max-w-[50px]" />
              <Typography className="text-white text-center text-[14px] whitespace-nowrap ">
                {item?.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box> */}
      <Box className="flex sm:hidden lg:justify-center items-center gap-[25px] md:gap-[50px] pt-5 px-[15px] overflow-auto scroll_none">
        {bannerCategoryM?.map((item) => (
          <Box
            className="flex flex-col items-center cursor-pointer gap-[10px]"
            onClick={() => {
              dispatch(openSidebar(false));
              router.push(item?.path);
            }}
          >
            <img
              src={item?.image}
              alt={item?.name}
              className="w-[50px] max-w-[50px]"
            />
            <Typography className="text-center text-[12px] whitespace-nowrap ">
              {item?.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <TemplatesBox />
    </Box>
  );
}
