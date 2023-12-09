import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LeftImageSection from "../wedding/components/LeftImageSection";
import { MarkText } from "@/components/Home/landingPage/LandingPage";
import RightImageSection from "../wedding/components/RightImageSection";
import WithCraftyartBanner from "@/components/common/WithCraftyartBanner";
import CustomerSayingSmall from "@/components/common/CustomerSayingSmall";
import GetTemplates from "@/components/common/GetTemplates";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import FaqsBox from "@/components/common/FAQs";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  return (
    <div>
      <Box
        sx={{
          background: "#DDD7FD",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px auto",
            width: "100%",
            overflow: "hidden",
          }}
          className="lg:pl-[150px]  max-lg:px-[20px] h-auto sm:h-[420px] max-sm:py-[50px] max-w-[2400px]"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            className="w-full lg:w-[57%] max-lg:items-center max-w-[2400px]"
          >
            <Typography
              sx={{
                color: "#000",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Boost your Productivity with the Brand Kit feature{" "}
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#000",
                width: "100%",
                fontWeight: "500",
              }}
              className="max-lg:text-center"
            >
              Create professional designs in minutes with efficient template
              editing{" "}
            </Typography>

            <Button
              style={{
                width: "fit-content",
                textTransform: "unset",
                boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
              }}
              className="bg_linear"
              onClick={() => router.push("/")}
            >
              Create Brandkit
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hidden lg:flex "
          >
            <img
              src={"/images/brand/bannerSide.png"}
              alt="resumeBanner"
              style={{ width: "70%", height: "auto", paddingRight: "0px" }}
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How does the Brand Kit feature
        work?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature provides a centralised location to manage your brand assets,
such as logos, fonts, and colours."
            />
            <MarkText
              text="When editing a template, simply add your brand assets to the design, and the Brand 
Kit will automatically arrange text according to your chosen font and color scheme."
            />
            <MarkText
              text="This feature ensures consistency across all your designs and saves you time by
eliminating the need to manually format each text box."
            />
          </Box>
        }
        buttonName={"Design your Cards"}
        image="/images/brand/side1.png"
      />

      <RightImageSection
        title="What are the benefits of using the
        Brand Kit feature?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature streamlines your design process, allowing you to quickly
create high-quality designs without the hassle of manual formatting."
            />
            <MarkText
              text="It ensures brand consistency across all your designs, which is crucial for building a
strong brand identity."
            />
            <MarkText
              text="You can easily update your brand assets in the Brand Kit, and all designs using
those assets will automatically update, saving you even more time."
            />
          </Box>
        }
        buttonName={"Create a New Card Design"}
        image="/images/brand/side2.png"
      />

      <LeftImageSection
        title="How can the Brand Kit feature
        improve my design workflow?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature eliminates the need for manual formatting, allowing you to
focus on the creative aspects of your design."
            />
            <MarkText
              text="It saves you time by automating the process of arranging text boxes and ensuring
brand consistency."
            />
            <MarkText
              text="You can easily create new designs or update existing ones with your brand assets,
which helps to maintain a consistent brand identity."
            />
          </Box>
        }
        buttonName={"Design your Cards"}
        image="/images/brand/side3.png"
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Streamline your design process with the efficient editing power of Brand Kit"
        text="The unique and stylish tool for effortless design creation"
        bt_name="Design your Invitation"
        navigate="/"
      />

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] my-[30px] lg:my-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. What makes the Brand Kit feature unique compared to other design tools?"
          text="The Brand Kit automates formatting of your brand assets for consistency and saves time. You can easily update brand
          assets in one centralised location."
        />
        <FaqsBox
          heading="2. Can I customise my Brand Kit settings?"
          text="Yes, you can add or remove brand assets to tailor to your specific needs."
        />

        <FaqsBox
          heading="3. How does the Brand Kit feature benefit marketers?"
          text="Ensures consistency across marketing materials and saves time. Allows marketers to focus on the creative aspects of
          their designs."
        />

        <FaqsBox
          heading="4. Will the Brand Kit feature work with any design template?"
          text="Yes, it's designed to work with any design template for consistency and to save time."
        />

        <FaqsBox
          heading="5. Is the Brand Kit feature easy to use for beginners?"
          text="Yes, it eliminates manual formatting and makes it easier for beginners to create professional-looking designs."
        />
      </Box>
    </div>
  );
}
