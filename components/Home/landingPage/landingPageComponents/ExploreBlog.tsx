import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface props {
  image: string;
  text: string;
  heading: string;
}

export const Card = ({ image, heading, text }: props) => {
  return (
    <Box className="w-full sm:w-[34%] bg-white p-8 rounded-[10px] max-sm:p-0 max-sm:py-5">
      <Box>
        <img src={image} alt={image} />
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
        Achieve your goals with Craftyart's in-depth articles
      </Typography>
      <Typography className="text-[18px] text-black my-2 text-center">
        Craftyart has a proven track record of delivering efficiency, results
        and excellent customer service.
      </Typography>

      <Box className="flex lg:w-[80%] justify-between z-[1]  max-sm:flex-col">
        <Card
          image="./images/blogImage1.png"
          text=" How to Make Online Caricature Photo Effect?"
          heading=" CARRY CATURE"
        />
        <Card
          image="./images/blogImage2.png"
          text="Get Unlimited Free Online Invitation Card
          Design"
          heading="CUSTOMIZE INVITATION"
        />
        <Card
          image="./images/blogImage3.png"
          text="Top 5 Creative Invitation Card Designs
          for Your Next Event"
          heading="CUSTOMIZE INVITATION"
        />
      </Box>

      <Button
        style={{
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          width: "fit-content",
          fontSize: "18px",
          textTransform: "unset",
          borderRadius: "10px",
          fontWeight: "500",
        }}
        className="bg_linear py-[10px] px-[40px]"
      >
        <Typography
          sx={{
            fontSize: "17px",
            color: "white",
            width: "100%",
            fontWeight: "500",
          }}
        >
          {"Explore all Blogs"}
        </Typography>
      </Button>
    </Box>
  );
}
