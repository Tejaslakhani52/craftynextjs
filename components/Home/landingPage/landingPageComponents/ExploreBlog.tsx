import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface props {
  image: string;
  text: string;
  heading: string;
  path: string;
}

export const Card = ({ image, heading, text, path }: props) => {
  return (
    <Box
      className="w-full sm:w-[34%] bg-white p-8 rounded-[10px] max-sm:p-0 max-sm:py-5 cursor-pointer"
      onClick={() => (window.location.href = path)}
    >
      <Box>
        <img src={image} alt={image} className="rounded-[10px]" />
      </Box>
      <Typography className="text_linear my-3 text-[14px]">
        {heading}
      </Typography>
      <Typography className="text-[18px] font-bold text-black">
        {text}
      </Typography>
    </Box>
  );
};

export default function ExploreBlog() {
  return (
    <Box className="flex flex-col items-center py-4 max-w-[2400px] mx-auto mb-10 max-lg:mt-[-50px] max-2sm:mt-[-120px] px-[20px]">
      <Typography className="text-[28px] sm:text-[35px] font-bold text-black text-center">
        Achieve your goals with Crafty Art's in-depth articles
      </Typography>
      <Typography className="text-[18px] text-black my-2 text-center">
        Crafty Art has a proven track record of delivering efficiency, results
        and excellent customer service.
      </Typography>

      <Box className="flex lg:w-[80%] justify-between z-[1]  max-sm:flex-col">
        <Card
          image="/images/blogImage1.webp"
          text="How to Create a Flyer: A Complete Guide to Designing Flyers"
          heading="FLYER"
          path="https://www.craftyartapp.com/blog/how-to-create-a-flyer/"
        />
        <Card
          image="/images/blogImage2.webp"
          text="How To Make A Logo: A Step-by-Step Guide - Crafty Art"
          heading="LOGO"
          path="https://www.craftyartapp.com/blog/how-to-make-a-logo-a-step-by-step-guide/"
        />
        <Card
          image="/images/blogImage3.webp"
          text="How to Choose the Best Certificate Size - Crafty Art"
          heading="CERTIFICATE SIZE"
          path="https://www.craftyartapp.com/blog/how-to-choose-the-best-certificate-size/"
        />
      </Box>

      <Button
        style={{
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          width: "fit-content",
          fontSize: "17px",
          textTransform: "unset",
          borderRadius: "5px",
          fontWeight: "500",
          color: "white",
        }}
        className="bg_linear py-[7px] px-[40px]"
        onClick={() =>
          (window.location.href = "https://www.craftyartapp.com/blog")
        }
      >
        {"Explore all Blogs"}
      </Button>
    </Box>
  );
}
