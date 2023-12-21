import { MarkText } from "@/components/Home/landingPage/LandingPage";
import ExploreTemplates from "@/components/common/ExploreTemplates";
import FaqsBox from "@/components/common/FAQs";
import GetStartedLinearBanner from "@/components/common/GetStartedLinearBanner";
import GetTemplates from "@/components/common/GetTemplates";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import { Box } from "@mui/material";
import LeftImageSection from "../wedding/components/LeftImageSection";
import RightImageSection from "../wedding/components/RightImageSection";
import CustomHead from "@/components/common/CustomHead";

export default function index() {
  return (
    <Box>
      <CustomHead
        image="/images/logoCreateLogo.png"
        heading={"Let Your Brand Shine with Our Custom Logo Design"}
        text="Create a Lasting Impression with a Custom Logo Design That Truly Represents Your Business,
        Begin with custom logos that are simple to create and use."
      />
      <GetStartedLinearBanner
        heading={
          "Create Your Own Logo Design with Our Free Logo Maker in Few Clicks"
        }
        text="Designing your own logo has never been simpler. With our user-friendly logo maker online for free, you can make logo in just a few clicks. Say goodbye to complicated design software and expensive graphic designers. Create a stunning logo maker for business that truly represents your brand, all for free. Get started now and watch your logo design dreams become a reality!"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={"/images/logoBanner.png"}
              alt="logoBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="Design The Perfect Logo To Grow Your Business"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Our user-friendly logo crafting tool simplifies the process of creating the perfect logo for your brand" />
              <MarkText text="Choose from a wide selection of design templates and customise them to suit your needs." />
              <MarkText text="Our intuitive drag-and-drop interface allows you to easily add and edit text, graphics and other design elements." />
              <MarkText text="With our powerful logo creation tools, you can experiment with different fonts, colours and layouts until you find the perfect combination for your brand identity." />
              <MarkText text="Craft a professional-grade logo that will set your business apart from the competition." />{" "}
            </Box>
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image="/images/logoCreateLogo.png"
      />

      <RightImageSection
        title="Make Custom Logos in Just Few Clicks"
        point={
          <Box>
            <MarkText text="Our online logo maker enables you to create a custom logo for your business in just a few minutes." />
            <MarkText text="Choose from a vast selection of design templates, icons, and fonts to get started." />
            <MarkText text="Customise your logo by changing the colors, font styles, and layout to fit your brand personality." />
            <MarkText text="Easily save and download your logo once it's completed." />
            <MarkText text="Our logo maker is accessible from any device, making it easy to create a logo on-the-go." />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image="/images/logoCustom.png"
      />

      <LeftImageSection
        title="How to Make a Stunning Logo with Our Logo Creator"
        point={
          <Box>
            <MarkText text="Our logo maker offers a range of high-quality design tools that help you create stunning logos quickly and easily." />
            <MarkText text="Choose from a range of professionally designed templates, or start from scratch." />
            <MarkText text="Experiment with a variety of fonts, colors, and graphic elements to create a unique logo that reflects your brand identity." />
            <MarkText text="Our user-friendly interface makes it easy to create multiple versions of your logo, so you can choose the one that best fits your needs." />
            <MarkText text="Best of all, our logo maker is completely free, ensuring that you can create a professional-grade logo without breaking the bank." />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image="/images/logoStunning.png"
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
          heading="1. What is Logo Design?"
          text="Logo design is the process of creating a unique symbol or emblem that visually represents a brand, company, or individual. It involves the use of typography, colours, and graphic elements to create a distinctive visual identity."
        />
        <FaqsBox
          heading="2. Why is a logo important for my business?"
          text="A logo is an essential component of your brand identity. It helps your customers to recognize and remember your
          business, products, and services. A well-designed logo can create a positive impression, build trust, and communicate
          your brand's values and personality."
        />
        <FaqsBox
          heading="3. How long does it take to design a logo?"
          text="The time required to design a logo depends on various factors, such as the complexity of the design, the number of
          revisions needed, and the designer's availability. Typically, it can take anywhere from a few days to a few weeks to
          create a high-quality logo."
        />
        <FaqsBox
          heading="4. How much should I expect to pay for a logo design?"
          text="The cost of a logo design can vary significantly depending on the designer's experience, the complexity of the design,
          and the level of customization required. Generally, you can expect to pay anywhere between $1 to $1000 for a
          professional logo design."
        />
        <FaqsBox
          heading="5. What should I consider when designing a logo for my business?"
          text="When designing a logo for your business, you should consider several factors to ensure that it reflects your brand
          identity and resonates with your target audience. These factors include selecting appropriate colours that represent
          your brand values and personality, choosing a font style that aligns with your brand messaging, and creating a design
          that is simple, memorable, and easily recognizable."
        />
      </Box>

      <GetTemplates
        heading="Ready to take your branding to the next level? Browse our 5000+ logo designs and find the perfect fit."
        text="Build your own brand identity - start with custom logos."
        navigate="/templates/logos"
      />

      <ExploreTemplates category="logo" getAll="/templates/logos" />
    </Box>
  );
}
