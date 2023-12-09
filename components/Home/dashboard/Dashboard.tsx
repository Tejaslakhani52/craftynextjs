import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import TemplatesBox from "./dashboardComponents/TemplatesBox";
import { useDispatch } from "react-redux";
import { openTempModal } from "@/redux/reducer/actionDataReducer";
import CustomSize from "./dashboardComponents/CustomSize";
import UploadButton from "./dashboardComponents/UploadButton";

const bannerCategory = [
  { image: "/icons/forYou.svg", name: "For you", path: "/trending" },
  { image: "/icons/invitation.svg", name: "Invitation", path: "/invitation" },
  { image: "/icons/quotes.svg", name: "Quotes", path: "/quotes" },
  { image: "/icons/resume.svg", name: "Resume", path: "/resume" },
  { image: "/icons/videos.svg", name: "Videos", path: "" },
  { image: "/icons/flyer.svg", name: "Flyer", path: "/flyers" },
  { image: "/icons/bannerLogo.svg", name: "Logo", path: "/logos" },
  { image: "/icons/festival.svg", name: "Festival", path: "" },
  { image: "/icons/more.svg", name: "More", path: "" },
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
      <Box className="py-[10px]"></Box>
      <Box className="mx-[20px] bg_linear rounded-[10px] px-[16px]">
        <Box className="flex justify-end py-[15px] gap-3">
          <UploadButton />
          <CustomSize />
        </Box>
        <Typography
          variant="h1"
          className="text-[30px] md:text-[47px] font-bold text-center  text-white "
        >
          What would you like to create ?
        </Typography>
        <Box className="flex lg:justify-center items-center gap-[30px] md:gap-[50px] py-10 overflow-auto scroll_none">
          {bannerCategory?.map((item) => (
            <Box
              className="flex flex-col  items-center   cursor-pointer gap-[10px]"
              onClick={() => router.push(item?.path)}
            >
              <img src={item?.image} alt="" className="w-[50px] max-w-[50px]" />
              <Typography className="text-white text-center text-[14px] whitespace-nowrap ">
                {item?.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <TemplatesBox />
    </Box>
  );
}
