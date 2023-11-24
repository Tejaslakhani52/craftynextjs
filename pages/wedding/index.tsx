import { MarkText } from "@/components/Home/landingPage/LandingPage";
import GetStartedLinearBanner from "@/components/common/GetStartedLinearBanner";
import LeftDetail from "@/components/common/LeftDetail";
import RightDetail from "@/components/common/RightDetail";
import { Box, Typography } from "@mui/material";
import React from "react";
import LeftImageSection from "./components/LeftImageSection";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import FaqsBox from "@/components/common/FAQs";
import GetTemplates from "@/components/common/GetTemplates";
import ExploreTemplates from "@/components/common/ExploreTemplates";
import RightImageSection from "./components/RightImageSection";
import CustomeHead from "@/components/common/CustomeHead";

export default function index() {
  return (
    <>
      <CustomeHead
        image="/images/weedingInvitationUnique.png"
        heading={
          "Browse Our Beautiful Collection of Wedding Invitation Templates"
        }
        text="Explore Our Collection of Beautiful Wedding Invitation Designs"
      />
      <GetStartedLinearBanner
        heading={
          "Browse Our Beautiful Collection of Wedding Invitation Templates"
        }
        text="Explore Our Collection of Beautiful Wedding Invitation Designs"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "410px" }}>
            <img
              src={"/images/weddingBanner.png"}
              alt="weddingBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        white
        title="What makes our wedding Invitation
        unique?"
        point={
          <Box>
            <MarkText text=" Handpicked Designs by Top Graphic Designers" />
            <MarkText text=" Range of Styles from Traditional to Modern" />
            <MarkText text=" Premium Quality Materials and Printing Techniques" />
            <MarkText text=" Unlimited Customization Options and Color Choices" />
            <MarkText text=" Affordable Pricing" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        image="/images/weedingInvitationUnique.png"
      />

      <RightImageSection
        title="How to make a wedding invitation
        card?"
        point={
          <Box>
            <MarkText text="Log into your Crafty Art account and search for &#34;wedding invitation&#34; in the search bar." />
            <MarkText text="Choose a template that you like from the available options." />
            <MarkText text="Customise the template by changing the text, font, colour, and background to reflect your personal style and preferences." />
            <MarkText text="Review the final design to ensure all necessary information is included (such as the date, time, location, dress code, and RSVP details)." />
            <MarkText text="Download the finished design in your preferred format (PNG, JPG, PDF) and print it out on high-quality paper." />
          </Box>
        }
        buttonName={"Create your Card"}
        image="/images/weddingCard.png"
      />

      <LeftImageSection
        white
        title="What designs and styles are 
        available for Wedding Invitations?"
        point={
          <Box>
            <MarkText text="Traditional and Formal Designs" />
            <MarkText text="Modern and Minimalistic Designs" />
            <MarkText text="Floral and Botanical Designs" />
            <MarkText text="Beach and Destination Wedding Designs" />
            <MarkText text="Rustic and Vintage Designs" />
          </Box>
        }
        buttonName={"Choose your Template"}
        image="/images/weddingStyle.png"
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
          heding=" 1. What is a wedding invitation template?"
          text="A wedding invitation template is a pre-designed digital file that contains the layout and design elements of a wedding invitation. It serves as a starting point for creating your own personalised invitations."
        />

        <FaqsBox
          heding=" 2. Can I customise a wedding invitation template?"
          text="Yes, most wedding invitation templates are editable, which means you can make changes to the text, fonts, colours, and other design elements to suit your preferences."
        />

        <FaqsBox
          heding=" 3. What should I consider when choosing a wedding invitation template?"
          text="When choosing a wedding invitation template, consider the theme, colour scheme, and overall style of your wedding. You should also evaluate the level of customization available with the template and whether it meets your needs."
        />

        <FaqsBox
          heding=" 4. What information should be included in a wedding invitation?"
          text="A wedding invitation typically includes the names of the couple, the date and time of the wedding, the location of the ceremony and reception, and RSVP information. You may also include additional details such as dress code, accommodations, and directions."
        />
        <FaqsBox
          heding=" 5. Are wedding invitation templates affordable?"
          text="Yes, wedding invitation templates are generally more affordable than custom-designed invitations."
        />
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Wedding Templates."
        text="Love is in the air and we want you to be part of our big day! Join us as we begin our forever."
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="a4-invitation" />
    </>
  );
}
