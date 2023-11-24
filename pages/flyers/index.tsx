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
        image="/images/flyersCreate.png"
        heading={"Stand out from the crowd with our unique flyers"}
        text="Create eye-catching and unique flyers for your with our easy-to-use flyer maker."
      />
      <GetStartedLinearBanner
        heading={"Stand out from the crowd with our unique flyers"}
        text="Create eye-catching and unique flyers for your with our easy-to-use flyer maker."
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/flyersBanner.png"}
              alt="flyersBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="Tips on how to create the perfect
        flyer templates:"
        point={
          <Box>
            <MarkText text="  Choose a theme that reflects the personality of the parents-to-be and the gender of the baby. Our flyer maker offers a wide range of pre-designed templates for you to choose from." />
            <MarkText text="  Select colours that match the theme of your. You can choose from a variety of colours and shades to customise your design." />
            <MarkText text=" Make sure to include all the important details, such as the name of the parents-to-be, the date and time of the event, and the location. Also, consider including any additional information, such as gift registry or dress code." />
            <MarkText text="  Choose high-quality images that are visually appealing and fit the theme of your. Our flyer maker comes with a huge library of stock images and graphics to choose from." />
            <MarkText text="Keep it simple: Don't overcrowd your flyers with too much information or design elements. Keep it simple and clean, with easy-to-read fonts and a clear message that tells potential guests what they need to know." />
          </Box>
        }
        buttonName={"Design your Flyer"}
        image="/images/flyersCreate.png"
      />
      <RightImageSection
        title="The process to make stunning
        flyers"
        point={
          <Box>
            <MarkText text="  Choose a design template: We offer a wide selection of design templates for flyers. Choose one that matches your party's theme." />
            <MarkText text="  Customise the details: Add your own text and details, including the date, time, location, RSVP information, and any other relevant information." />
            <MarkText text="  Pick your colour scheme: Select colours that match the party's theme or the baby's gender. You can also use a colour palette generator to help you choose complementary colours." />
            <MarkText text="  Add images: Consider adding images such as ultrasound pictures, baby photos, or themed graphics to make the flyer more visually appealing." />
            <MarkText text="  Print or share digitally: Once you're happy with your design, print it on high-quality paper or save it as a digital file to share via email or social media." />
          </Box>
        }
        buttonName={"Create Your Flyer"}
        image="/images/flyersUnique.png"
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
        buttonName={"Explore Flyers"}
        image="/images/flyersStunning.png"
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
          heding="1. What are flyer templates? "
          text="Flyer templates are pre-designed flyers that can be customised and filled out with the necessary information for an event."
        />

        <FaqsBox
          heding="2. Where can I find flyer templates?"
          text="Our online flyer maker offers a wide range of free templates that you can customise to create a unique and personalised invitation."
        />

        <FaqsBox
          heding="3. How do I customise a flyer template?"
          text="Our flyer maker offers an easy-to-use interface where you can change the text, colours, and images to suit your preferences."
        />

        <FaqsBox
          heding="4. What information should be included in a flyer?"
          text="A typical flyer should include the expectant mother's name, date, time, and location of the event, as well as RSVP details and any other relevant information, such as gift registry information or dress code."
        />

        <FaqsBox
          heding="5. Can I print my own flyers from a template?"
          text="Yes, most  flyer templates can be printed at home on a standard printer or sent to a professional printing service for higher quality results. Be sure to choose the appropriate paper stock and size for your chosen template."
        />
      </Box>
      <GetTemplates
        heading="Start designing your perfect flyer today with our easy-to-use flyer maker!"
        text="Get ready to take off with our stunning flyers - Order now!"
        navigate="/templates/invitation-card"
      />
      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
