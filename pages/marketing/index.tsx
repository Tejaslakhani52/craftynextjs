import { MarkText } from "@/components/Home/landingPage/LandingPage";
import CustomeHead from "@/components/common/CustomeHead";
import CustomizableSliderTemplates from "@/components/common/CustomizableSliderTemplates";
import FaqsBox from "@/components/common/FAQs";
import FreeTrialBlackBanner from "@/components/common/FreeTrialBlackBanner";
import GetTemplates from "@/components/common/GetTemplates";
import LeftDetail from "@/components/common/LeftDetail";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import RightDetail from "@/components/common/RightDetail";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const sliderTemplate = [
  {
    img: "/images/marketingCreateFlyer.png",
    buttonName: "Create Flyer",
    path: "/flyers",
  },
  {
    img: "/images/marketingCreateLogo.png",
    buttonName: "Create Logo",
    path: "/logos",
  },
  {
    img: "/images/marketingCreateBussiness.png",
    buttonName: "Create Business Card",
    path: "/bussinessCard",
  },
  {
    img: "/images/marketingCreatePoster.png",
    buttonName: "Create Poster",
    path: "/posters",
  },
  {
    img: "/images/marketingCreateBrochure.png",
    buttonName: "Create Brochure",
    path: "/brochure",
  },
];

export default function index() {
  return (
    <>
      <CustomeHead
        image="./images/marketingCatching.png"
        heading="Elevate your marketing game with stunning marketing templates!"
        text="Make an unforgettable impression with custom marketing posters
              created in minutes. Choose from a variety of design templates to
              create professional and impactful business cards, flyers, logos,
              posters, brochures, menus, and infographics."
      />
      <FreeTrialBlackBanner
        heading="Elevate your marketing game with stunning marketing templates!"
        text="Make an unforgettable impression with custom marketing posters
              created in minutes. Choose from a variety of design templates to
              create professional and impactful business cards, flyers, logos,
              posters, brochures, menus, and infographics."
      />

      <RightDetail
        title="How to create an eye-catching
        flyer?"
        point={
          <Box>
            <MarkText text="Browse through various templates and select one that matches your message and target audience" />
            <MarkText text="Customize the text, images, and colors to align with your branding and message" />
            <MarkText text="Use clear and concise language to convey your message effectively" />
            <MarkText text="Add a call-to-action to encourage viewers to take action" />
            <MarkText text="Print the final design using high-quality materials for maximum impact." />
          </Box>
        }
        buttonName={"Create your flyer now"}
        image="./images/marketingCatching.png"
        path="/flyers"
      />

      <LeftDetail
        title="How to make a business card with
        ease?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects your brand and industry" />
            <MarkText text="Customise the layout to include all necessary information, such as your name, title, business name, contact information, and social media handles" />
            <MarkText text="Use high-quality paper and printing for a professional look and feel" />
            <MarkText text="Consider adding special finishes, such as embossing or foil stamping, to make your card stand out" />
            <MarkText text="Verify all details before sending for printing to avoid any errors." />
          </Box>
        }
        buttonName={"Find a Business Card"}
        image="./images/marketingBussinessCard.png"
        path="/bussinessCard"
      />

      <RightDetail
        title="What are the key elements of a
        successful logo design?"
        point={
          <Box>
            <MarkText text="A clear representation of the brand identity and values" />
            <MarkText text="A simple and memorable visual symbol" />
            <MarkText text="A versatile design that works across various mediums and sizes" />
            <MarkText text="A timeless appeal that can withstand changes in trends and styles" />
            <MarkText text="A unique and distinctive style that sets it apart from competitors." />
          </Box>
        }
        buttonName={"Create your Logo"}
        image="./images/marketingLogoDesign.png"
        path="/logos"
      />

      <LeftDetail
        title="How to design an effective
        poster?"
        point={
          <Box>
            <MarkText text="Choose a size and orientation that fits the purpose and display location" />
            <MarkText text="Select a template or start from scratch and customize the design using graphics, text, and visual effects" />
            <MarkText text="Use contrasting colors and bold typography to grab attention" />
            <MarkText text="Include a clear message and call-to-action to motivate viewers" />
            <MarkText text="Print final design using high-quality paper and techniques for maximum visibility." />
          </Box>
        }
        buttonName={"Create Poster"}
        image="./images/marketingEffectivePoster.png"
        path="/posters"
      />

      <RightDetail
        title="How to create an attractive
        brochure?"
        point={
          <Box>
            <MarkText text="Define the purpose and audience of the brochure" />
            <MarkText text="Choose a layout and format that suits the type of information you want to convey" />
            <MarkText text="Use high-quality images and graphics to enhance visual appeal" />
            <MarkText text="Keep the text clear, concise, and easy to understand" />
            <MarkText text="Print the final design using high-quality paper and folding techniques for a professional look." />
          </Box>
        }
        buttonName={"Create your Brochure"}
        image="./images/marketingBrochure.png"
        path="/brochure"
      />

      <LeftDetail
        title="How to make a restaurant menu
        that stands out?"
        point={
          <Box>
            <MarkText text="Choose a template that matches your restaurant's theme and cuisine" />
            <MarkText text="Customize the design to reflect your brand personality and highlight key dishes or promotions" />
            <MarkText text="Use descriptive language and appetising images to entice customers" />
            <MarkText text="Organise the menu into logical sections with clear headings and prices" />
            <MarkText text="Print final design using high-quality paper and lamination if desired for maximum durability." />
          </Box>
        }
        buttonName={"Design your Menu"}
        image="./images/marketingRestaurantMenu.png"
      />

      <RightDetail
        title="How to create an informative
        infographic?"
        point={
          <Box>
            <MarkText text=" Choose a topic that lends itself well to visual representation" />
            <MarkText text=" Research and gather all necessary data and organise it into logical sections" />
            <MarkText text=" Choose graphics, icons, and charts that complement the information and are easy to understand" />
            <MarkText text=" Use colour and contrast to highlight important information and create visual interest" />
            <MarkText text=" Use a clean and uncluttered design that emphasises hierarchy and flow." />
          </Box>
        }
        buttonName={"Design your own Infographic"}
        image="./images/marketingInfoGraphic.png"
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
          heding="1. What are customizable marketing templates?"
          text="Customizable marketing templates are pre-designed marketing materials, such as business cards, flyers, logos, posters, brochures, menus, and infographics, that can be edited and filled out with the necessary information for your business or organisation."
        />
        <FaqsBox
          heding=" 2. Where can I find customizable marketing templates?"
          text="There are many websites and online marketplaces that offer free or paid customizable marketing templates. You can also create your own using design software or hire a graphic designer to create one for you."
        />

        <FaqsBox
          heding=" 3. How do I customise a marketing template?"
          text="Most marketing templates come in editable formats, such as PSD or AI files, which can be opened in graphic design software like Adobe Photoshop or Illustrator. You can then change the text, colours, and images to suit your preferences."
        />

        <FaqsBox
          heding=" 4. What information should be included in marketing posters ?"
          text="The type of information included in marketing posters will depend on the purpose of the material. However, common elements include company or organisation name, logo, products or services offered, contact information, and call-to-action."
        />

        <FaqsBox
          heding=" 5. Can I print my own marketing materials from a template?"
          text="Yes, most marketing templates can be printed at home or sent to a professional printing service for higher quality results. Be sure to choose the appropriate paper stock and size for your chosen template."
        />
      </Box>

      <GetTemplates
        heading="Design your dream marketing posters today and take your brand to the next level!"
        text="Get started now with our customizable templates."
        navigate="/templates/invitation-card"
      />
      <Box
        sx={{
          width: "100%",
          my: "50px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "2400px",
        }}
      >
        <QuestionsTitle
          text1={""}
          text2={"Get a headstart with fully customizable templates"}
          text3=""
        />

        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
