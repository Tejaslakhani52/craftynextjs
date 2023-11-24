import { MarkText } from "@/components/Home/landingPage/LandingPage";
import ExploreTemplates from "@/components/common/ExploreTemplates";
import FaqsBox from "@/components/common/FAQs";
import GetStartedLinearBanner from "@/components/common/GetStartedLinearBanner";
import GetTemplates from "@/components/common/GetTemplates";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import { Box } from "@mui/material";
import LeftImageSection from "../wedding/components/LeftImageSection";
import RightImageSection from "../wedding/components/RightImageSection";
import CustomeHead from "@/components/common/CustomeHead";

export default function index() {
  return (
    <>
      <CustomeHead
        image="/images/posterPerfact.png"
        heading={"Make attractive posters by using plenty of poster designs."}
        text="Browse Crafty Art's poster design and customise them to communicate your message, and raise your
        brand awareness."
      />
      <GetStartedLinearBanner
        heading={"Make attractive posters by using plenty of poster designs."}
        text="Browse Crafty Art's poster design and customise them to communicate your message, and raise your
        brand awareness."
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/posterBanner.png"}
              alt="posterBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="How to create the perfect poster
        design?"
        point={
          <Box>
            <MarkText text="Determine your message and purpose beforehand to guide your poster's content and design." />
            <MarkText text="Choose a visual theme that aligns with your message and consider your audience and context." />
            <MarkText text="Keep it simple by using clear and concise language and avoiding clutter." />
            <MarkText text="Use high-quality images to make your poster stand out." />
            <MarkText text="Print on quality paper to enhance the final look of your poster." />
          </Box>
        }
        buttonName={"Design your Poster"}
        image="/images/posterPerfact.png"
      />
      <RightImageSection
        title="Create stunning posters with these
        easy steps:"
        point={
          <Box>
            <MarkText text=" Choose a template from a collection of styles and themes." />
            <MarkText text=" Customise the design with your text, images, and branding elements to fit your preferences." />
            <MarkText text=" Preview and revise your design, checking for errors and clarity of message." />
            <MarkText text=" Print or download your design on high-quality paper or share it online or via social media." />
          </Box>
        }
        buttonName={"Create Your Poster"}
        image="/images/posterCreate.png"
      />
      <LeftImageSection
        title="Create professional posters with
        ease:"
        point={
          <Box>
            <MarkText text="1. Determine the size and orientation of your poster." />
            <MarkText text="2. Choose a background colour or image that complements your message." />
            <MarkText text="3. Add clear and legible text, as well as images and graphics that enhance the visual appeal." />
            <MarkText text="4. Preview and revise your design, checking for errors and typos." />
            <MarkText text="5. Print your design on high-quality paper and distribute through appropriate channels." />
          </Box>
        }
        buttonName={"Explore Posters"}
        image="/images/posterEase.png"
      />
      {/*  */}{" "}
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
          heding="1. What types of posters can I create?"
          text="You can create posters for a variety of purposes, including marketing, events, education, and more. Our templates cover a wide range of themes and styles, so you're sure to find something that fits your needs."
        />

        <FaqsBox
          heding="2. How do I choose the right size for my poster?"
          text="Consider where you'll be displaying your poster design and what type of information you want to include. Standard sizes include 18x24 inches and 24x36 inches, but you can also customise the size to fit your specific needs."
        />

        <FaqsBox
          heding="3. Can I use my own images and graphics?"
          text="Absolutely! You can upload your own images and graphics to make your poster design truly unique. Just make sure they are high-quality and relevant to your message."
        />

        <FaqsBox
          heding="4. How long does it take to create a poster?"
          text="With our easy-to-use poster design maker, you can create a professional-looking design in minutes. Of course, the time it takes may vary depending on the complexity of your design and how much customization you want to do."
        />

        <FaqsBox
          heding="5. Can I print my poster at home?"
          text="Yes, you can print your poster at home as long as you have a printer that can handle large-format printing. Alternatively, you can send your design to a professional printing service for high-quality results."
        />
      </Box>
      <GetTemplates
        heading="Unlock your creativity with 5000+ customizable poster templates to choose from."
        text="Design your perfect poster design today with our easy-to-use poster maker!"
        navigate="/templates/invitation-card"
      />
      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
