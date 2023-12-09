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
          background: "#D9EEDE",
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
                color: "#000",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Make Custom Invitations As You Want
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
              Create Stunning Invitations that Reflect Your Unique Perspective
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
              Customize Your Invitation
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
            <Box sx={{ width: "100%" }}>
              <img
                src={"/images/customizeOrder/bannerSide.png"}
                alt="resumeBanner"
                style={{ width: "100%", height: "100%", paddingRight: "0px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How to order customize invitations
        using Crafty Art?"
        point={
          <Box>
            <MarkText text="Choose the Customize Invitation option from the main menu." />
            <MarkText text="Select the type of invitation you want to create (birthday, wedding, baby shower)." />
            <MarkText text="Use the design editor to customize the invitation's layout, colors, fonts, and graphics." />
            <MarkText text="Add personalized text and details to make the invitation unique." />
            <MarkText
              text="Once satisfied with the design, click on the Order Now button to finalize
your order and proceed to payment."
            />
          </Box>
        }
        buttonName={"Design your Cards"}
        image="/images/customizeOrder/side1.png"
      />

      <RightImageSection
        title="Key benefits of using this feature
        for designing invitations."
        point={
          <Box>
            <MarkText
              text="Endless customization options allow you to create invitations that perfectly match
your event's theme and style."
            />
            <MarkText
              text="The intuitive design editor makes it easy to personalise every aspect of the
              invitation, even if you're not a professional graphic designer."
            />
            <MarkText
              text="You can choose from a wide range of templates and design elements to jumpstart
your creative process."
            />
            <MarkText
              text="Ordering through the graphic design tool ensures high-quality prints and
              professional results."
            />
            <MarkText
              text="The convenience of online ordering saves you time and effort compared to
              traditional printing methods."
            />
          </Box>
        }
        buttonName={"Create a New Card Design"}
        image="/images/customizeOrder/side2.png"
      />

      <LeftImageSection
        title="Benefits of this feature for : "
        point={
          <Box>
            <MarkText
              text="Graphic Designers: This feature provides a convenient platform to showcase their
              design skills and offer customizable invitations to clients, expanding their service
              offeringsNavigate to the Custom Order feature on our website"
            />
            <MarkText
              text="Students: It offers an opportunity for students to practise their graphic design skills
              and create eye-catching invitations for various events and projects."
            />

            <MarkText
              text="Marketers: The customizable invitation feature allows marketers to design
              professional looking invitations for promotional events, product launches, or special
              campaigns, enhancing their brand image."
            />
          </Box>
        }
        buttonName={"Design your Cards"}
        image="/images/customizeOrder/side3.png"
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Design the Perfect Invitation, Your Way!"
        text="Craft Personalized Invitations Tailored to Your Vision"
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
          heading="1. Can I add my own images or photos to the invitation designs? "
          text="Yes, the graphic design tool allows you to upload and incorporate your own images into the invitation designs, giving
          them a personal touch."
        />
        <FaqsBox
          heading="2. Are there any limitations on the number of invitations I can order?"
          text="No, you can order as many invitations as you need. The graphic design tool supports bulk orders, making it suitable for
          both small gatherings and large events."
        />

        <FaqsBox
          heading="3. Can I preview my customised invitation before placing the order?"
          text="Absolutely! The design editor provides a preview option where you can see how your personalised invitation looks before
          finalising the order. You can make any necessary adjustments before proceeding."
        />

        <FaqsBox
          heading="4. What printing options are available for the invitations?"
          text="The graphic design tool offers a range of printing options, including different paper types, sizes, and finishes. You can
          select the one that best suits your needs and budget."
        />

        <FaqsBox
          heading="5. How long does it take to receive the printed invitations after placing an order?"
          text=" The delivery time may vary depending on your location and the shipping method chosen. However, you can typically
          expect to receive your printed invitations within a few business days."
        />
      </Box>
    </div>
  );
}
