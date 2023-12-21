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
          background: "#F9DCE0",
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
              Wedding Invitations: Animated with Caricatures!
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
              "Personalise Your Wedding Invitations with Custom Caricatures"{" "}
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
              Create your caricature
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
            <img
              src={"/images/caricature/bannerSide.png"}
              alt="resumeBanner"
              style={{ width: "auto", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How to Add Caricature Toons of
        the Bride and Groom to a Wedding
        Invitation Card?"
        point={
          <Box>
            <MarkText text="Use a graphic design tool like Adobe Photoshop or Crafty Art." />
            <MarkText text="Choose or create caricatures that match the invitation's style and theme." />
            <MarkText text="Import the caricatures into the design tool and place them on the card." />
            <MarkText text="Adjust size and orientation to fit with the overall design." />
            <MarkText text="Save the final design as a high-resolution image or PDF file." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side1.png"
      />

      <RightImageSection
        title="Tips for Creating Stylish and
        Unique Caricature Toons for
        Wedding Invitations:"
        point={
          <Box>
            <MarkText text="Consider the couple's personalities, hobbies, and interests." />
            <MarkText text="Use a consistent style and colour scheme throughout the design." />
            <MarkText text="Experiment with different poses and expressions." />
            <MarkText text="Try various techniques for a unique look." />
            <MarkText text="Get feedback from the couple and trusted friends or family." />
          </Box>
        }
        buttonName={"Create a New Card Design"}
        alt="Wedding Invitations"
        image="/images/caricature/side2.png"
      />

      <LeftImageSection
        title="Process to Make a Caricature:"
        point={
          <Box>
            <MarkText text="Upload the image you want to convert into a caricature." />
            <MarkText text="Remove the background from the image." />

            <MarkText text="Transform your image into a caricature." />
            <MarkText text="Add a caricature to the wedding invitation card." />
            <MarkText text="Download an invitation card with a caricature." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side3.png"
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Add a Personal Touch to Your Wedding Invitations with Custom Caricatures "
        text="Make Your Wedding Invitations Truly Unique - Get Custom Caricatures Today!"
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
          heading="1. Can I use any caricature for my wedding invitations?"
          text="Yes, you can use any custom caricature or illustration that matches your desired style and theme."
        />
        <FaqsBox
          heading="2. How can I make sure the caricatures accurately represent the couple?"
          text="Consider the couple's personalities, hobbies, and interests when creating the caricatures, and get feedback from them
          and other trusted friends or family members."
        />

        <FaqsBox
          heading="3. Do I need any special design software to add caricatures to my wedding invitations?"
          text="Yes, you will need a graphic design tool that supports custom images or illustrations, such as Adobe Photoshop or
          Crafty Art."
        />

        <FaqsBox
          heading="4. How much does it cost to add caricatures to my wedding invitations?"
          text="The cost will depend on the specific design service or software you use and the complexity of the caricatures. Some
          services may offer free or low-cost options, while others may charge a higher fee for custom illustrations."
        />

        <FaqsBox
          heading="5. Can I use caricatures for other types of events besides weddings?"
          text="Yes, caricatures can be used for a variety of events, such as bridal showers, bachelorette parties, and even corporate
          events."
        />
      </Box>
    </div>
  );
}
