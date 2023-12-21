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
          background: "#1C3048",
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
            className="w-full lg:w-[57%] max-lg:items-center "
          >
            <Typography
              sx={{
                color: "#ffffff",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Easily Resize Your Designs with Our Graphic Design Tool 
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                width: "100%",
                fontWeight: "500",
              }}
              className="max-lg:text-center"
            >
              Harness the Power of Our Intuitive Resizing Feature - Take Your
              Graphic Design Skills to New Heights with Ease!
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
              Try it for FREE
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "end",
            }}
            className="hidden lg:flex"
          >
            <Box sx={{ width: "526px" }}>
              <img
                src={"/images/resize/resizeBanner.png"}
                alt="resumeBanner"
                style={{ width: "100%", height: "100%", paddingRight: "0px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How do I resize my designs using
        this graphic design tool?"
        point={
          <Box>
            <MarkText text="Use the resize feature located in the toolbar to adjust the dimension of your design." />
            <MarkText text="Input the desired height and width measurements in the resize menu." />
            <MarkText text="Select the aspect ratio lock to ensure your design is scaled proportionally." />
            <MarkText text="Preview your resized design and save it to your device or cloud storage." />
          </Box>
        }
        buttonName={"Resize Your Image"}
        alt="resize "
        image="/images/resize/resizeYourImage.png"
      />

      <RightImageSection
        title="Can I resize my designs without
        losing image quality?"
        point={
          <Box>
            <MarkText text="Yes, this tool uses advanced algorithm to maintain image quality even after resizing." />
            <MarkText
              text="Additionally, you can optimise your design for different screen sizes using the
export feature."
            />
            <MarkText text="This ensures that your design looks great no matter where it's viewed." />
          </Box>
        }
        buttonName={"Resize your Templates"}
        alt="resize "
        image="/images/resize/designWithoutImage.png"
      />

      <LeftImageSection
        title="How can I use the resize feature to
        create unique designs?"
        point={
          <Box>
            <MarkText
              text="Experiment with resizing your designs to create multiple versions with different
              dimensions."
            />
            <MarkText text="Use these different versions to cater to specific platforms or applications." />

            <MarkText
              text="You can also use the resize feature to create custom design for different marketing
campaigns."
            />
          </Box>
        }
        buttonName={"All Templates"}
        alt="resize "
        image="/images/resize/resizeFeature.png"
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Create Stunning Designs with the Best Resizing Tool Available!"
        text="Resize Like a Pro - Start Designing Today!"
        bt_name="Resize Templates"
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
          heading="1. Can I resize multiple designs at once?"
          text="Yes, you can select multiple designs and use the batch resize feature to adjust them simultaneously."
        />
        <FaqsBox
          heading="2. Is the resize feature easy to use for beginners?"
          text="Absolutely, the resize feature is designed to be user-friendly and intuitive."
        />

        <FaqsBox
          heading="3. Can I customise the size of individual design elements?"
          text="Yes, you can use the crop and transform features to adjust individual elements within your design."
        />

        <FaqsBox
          heading="4. How does the resize feature help with responsive design?"
          text="By optimising your design for different screen sizes, you can ensure that it looks great on any device or platform."
        />

        <FaqsBox
          heading="5. Are there any limitations to the resize feature?"
          text="The tool supports resizing up to a certain limit, depending on the file size and complexity of the design."
        />
      </Box>
    </div>
  );
}
