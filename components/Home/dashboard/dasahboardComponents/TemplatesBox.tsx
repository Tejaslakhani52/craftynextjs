import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import Skelton from "@/components/common/Skelton";
import { getAllTemplatesDataType, getTemplateDataType } from "@/pages/api/type";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TemplatesSkelton from "./TemplatesSkelton";

export const TemplatesBoxes = ({ item }: any) => {
  const containerId = `carousel-slide-container-${item.category_id}`;
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerId]);

  const handleNextClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="relative ">
      <Box className="flex items-center justify-between pt-8 pb-4">
        <Typography className="text-black font-semibold text-[22px]">
          {item?.category_name}
        </Typography>
        <Button className="normal-case">
          <Typography className="text-[#2EC6B8] font-semibold text-[16px] flex items-center">
            See all
          </Typography>
          <img
            src={"./icons/rightActiveArrow.svg"}
            alt="rightActiveArrow"
            className="w-[7px] inline-block ml-3"
          />
        </Button>
      </Box>
      <Box
        className="flex items-center overflow-auto scroll_none gap-[15px] "
        id={containerId}
      >
        {showPrevButton && (
          <button
            onClick={handlePrevClick}
            className="pre_botton left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex"
            style={{ top: "52%" }}
          >
            <img
              src="./icons/leftArrow.svg"
              alt="leftArrow"
              className="w-[8px]"
            />
          </button>
        )}
        {item?.template_model?.map((templates: any) => (
          <>
            <Box
              className="min-w-[200px] bg-white p-3 rounded-[12px]"
              key={templates?.template_name}
            >
              <Box className="p-3 w-full bg-[#E6E8EE] rounded-[10px]">
                <img
                  src={templates?.template_thumb}
                  alt={templates?.category_name}
                  //   className={` w-[auto]  h-[${calculateHeight(
                  //     templates?.width,
                  //     templates?.height,
                  //     150
                  //   )}px]`}
                  className={` w-[auto]  h-[130px] mx-auto rounded-[4px]`}
                />
              </Box>

              <Box className="py-3">
                <Typography className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
                  {templates?.template_name}
                </Typography>
                <Typography className="text-[#ABB2C7] text-[14px] pt-1">
                  {templates?.category_name}
                </Typography>
              </Box>
            </Box>
          </>
        ))}
        {showNextButton && (
          <button
            onClick={handleNextClick}
            className="next_botton right-[-18px] flex "
            style={{ top: "52%" }}
          >
            <img
              src="./icons/rightArrow.svg"
              alt="rightArrow"
              className="w-[8px]"
            />
          </button>
        )}
      </Box>
    </Box>
  );
};

export default function TemplatesBox() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState<getAllTemplatesDataType | null>(null);

  useEffect(() => {
    axios
      .post(`/api/get/main/data`, {
        key: `qwfsegxdhbxfjhncf`,
        page: 1,
        count: 0,
      })
      .then((res: any) => {
        setData(res?.data?.datas);
      })
      .catch((err) => consoleShow("err", err));
  }, []);

  return (
    <Box className="px-[20px] pb-10">
      {data
        ?.filter(
          (data: any) =>
            data?.category_name === "Latest" ||
            data?.category_name === "Trending"
        )
        ?.map((item: any) => (
          <TemplatesBoxes item={item} key={item?.id} />
        ))}

      {/* {true && <TemplatesSkelton />} */}
    </Box>
  );
}
