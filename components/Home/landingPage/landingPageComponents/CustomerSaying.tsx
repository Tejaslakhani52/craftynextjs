import { Box, Rating, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface props {
  text: string;
  value: number;
}

export const CustomerBox = ({ text, value }: props) => {
  return (
    <Box
      className="w-[32%] bg-white p-8 rounded-[10px] max-lg:w-[100%] min-w-[300px] max-2sm:min-w-[230px]"
      sx={{ boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.1)" }}
    >
      <Rating name="read-only" value={value} readOnly />
      <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
        {text}
      </Typography>

      <Box className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="./images/Ellipse 78.png  "
          alt="Ellipse"
        />
        <Box className="font-medium dark:text-white">
          <Box>Abel</Box>
          <Box className="text-sm text-gray-500 dark:text-gray-400">
            Growth Hacker, Finter
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function CustomerSaying() {
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
    const container = document.getElementById("customer");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["customer"]);

  const handleNextClick = () => {
    console.log("handleNextClick: ", "handleNextClick");
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="flex flex-col items-center py-24 max-w-[2400px] mx-auto mb-0 max-sm:mb-0 px-[20px] max-lg:py-10 ">
      <Typography className="text-[35px] font-bold text-black max-sm:text-[30px] text-center">
        What are Customers Saying about Craftyart
      </Typography>
      <Typography className="text-[18px] text-black my-2 text-center">
        Craftyart has a proven track record of delivering efficiency, results
        and excellent customer service.
      </Typography>
      {/* <Box className="bg_linear  h-auto lg:h-[420px] w-[60%] my-10 opacity-50 max-lg:hidden"></Box> */}
      {/* <Box className=" flex max-lg:flex-col w-full xl:w-[80%] justify-between  mt-[-441px] z-[1] max-lg:mt-[0] max-lg:gap-[30px] max-lg:mt-10"> */}
      <Box className="flex justify-end px-[15%] pt-5 w-[100%]">
        <Box className="flex  ">
          <Button
            onClick={handlePrevClick}
            disabled={!showPrevButton ? true : false}
            sx={{
              opacity: !showPrevButton ? "0.3" : 1,
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
            sx={{ opacity: !showNextButton ? "0.3" : 1 }}
          >
            <img
              src="./icons/rightArrow.svg"
              alt="rightArrow"
              className="w-[10px]"
            />
          </Button>
        </Box>
      </Box>
      <Box className="flex  justify-center relative w-[100%] overflow-auto ">
        <Box
          className=" flex  w-full xl:w-[80%] justify-between  z-[1] max-lg:mt-[0]  gap-[30px] overflow-auto scroll_none px-2 sm:px-10 py-5 sm:py-15  mt-5"
          id="customer"
        >
          {Array(10)
            .fill("")
            .map((item) => (
              <CustomerBox
                value={5}
                text="“Lunacy has been a lifesaver and given me
          more than enough tools to create designs
          for no cost at all. I used to design on AI
          Illustrator and spend a fortune on it when I
          could've been using Lunacy for free.
          Highly recommend.”"
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
