import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const brandIcons = [
  "./images/brandIcon1.png",
  "./images/brandIcon2.png",
  "./images/brandIcon3.png",
  "./images/brandIcon4.png",
  "./images/brandIcon5.png",
  "./images/brandIcon1.png",
  "./images/brandIcon2.png",
  "./images/brandIcon3.png",
  "./images/brandIcon4.png",
];

export default function BrandsIconSlider() {
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
    const container = document.getElementById("brandIcons");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["brandIcons"]);

  const handleNextClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="w-[100%] ">
      <Box className="bg-[#F4F7FE] py-[50px] max-sm:py-[30px]  flex flex-col items-center gap-[50px] max-sm:px-[20px]">
        <Typography className="text-[37px] font-semibold text-black max-sm:text-[28px] text-center">
          Trusted by the world's best brands
        </Typography>

        <Box className="relative px-[10%] w-[100%] max-md:px-0">
          <button
            onClick={handlePrevClick}
            className="pre_botton left-[10%] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] hidden sm:flex"
          >
            <KeyboardArrowLeftIcon />
          </button>

          <Box
            className="flex w-[80%] mx-auto overflow-x-auto gap-[100px] items-center scroll_none max-md:gap-[30px]   max-sm:w-[100%]"
            id="brandIcons"
          >
            {brandIcons?.map((item) => (
              // <Box className="w-[20%]">
              <img
                src={item}
                alt={item}
                className="w-[130px] max-md:w-[130px] h-auto"
              />
              // </Box>
            ))}
          </Box>

          <Box className="flex justify-center  sm:hidden my-5 gap-[30px]">
            <Button
              onClick={handlePrevClick}
              disabled={!showPrevButton ? true : false}
              sx={{
                opacity: !showPrevButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <img
                src="./icons/leftArrow.svg"
                alt="leftArrow"
                className="w-[10px]"
              />
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={!showNextButton ? true : false}
              sx={{
                opacity: !showNextButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <img
                src="./icons/rightArrow.svg"
                alt="rightArrow"
                className="w-[10px]"
              />
            </Button>
          </Box>

          <button
            onClick={handleNextClick}
            className="next_botton right-[10%] max-md:right-[20px] max-sm:top-[100px] max-sm:right-[30%] hidden sm:flex"
          >
            <KeyboardArrowRightIcon />
          </button>
        </Box>
      </Box>
    </Box>
  );
}
