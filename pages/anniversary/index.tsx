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
        image="./images/anivversaryBanner.png"
        heading={
          "Celebrate your love with a beautiful anniversary invitation card!"
        }
        text="Create beautiful and unique invitations for your anniversary celebration with our easy-to-use anniversary
        invitation card maker."
      />
      <GetStartedLinearBanner
        heading={
          "Celebrate your love with a beautiful anniversary invitation card!"
        }
        text="Create beautiful and unique invitations for your anniversary celebration with our easy-to-use anniversary
        invitation card maker."
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "480px" }}>
            <img
              src={"./images/anivversaryBanner.png"}
              alt="anivversaryBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect anniversary
        invitations?"
        point={
          <Box>
            <MarkText text="Choose a theme that reflects the couple's personality and the style of the celebration." />
            <MarkText text="Select colours that match the theme, from traditional gold or silver to bold and bright hues." />
            <MarkText text="Include personal details like names, date, time, and location, along with photos or special memories for a personal touch." />
            <MarkText text="Use high-quality paper for a professional look and feel." />
            <MarkText text="Keep it simple with easy-to-read fonts and clear messaging." />
          </Box>
        }
        buttonName={"Design your Card"}
        image="./images/anivversaryInvitation.png"
      />

      <RightImageSection
        title="Craft the perfect anniversary
        celebration with ease:"
        point={
          <Box>
            <MarkText text="Use an online invitation maker with customizable templates." />
            <MarkText text="Choose from pre-made designs that fit your celebration's theme." />
            <MarkText text="Add all important details and customise font types and sizes." />
            <MarkText text="Consider adding photos or graphics for a personal touch." />
            <MarkText text="Preview and proofread before sending out." />
          </Box>
        }
        buttonName={"Create Invitation"}
        image="./images/anivversaryEase.png"
      />

      <LeftImageSection
        title="Make custom anniversary
        invitations in minutes:"
        point={
          <Box>
            <MarkText text="Choose a design template that matches your celebration's theme." />
            <MarkText text="Customise the details, double-checking for accuracy." />
            <MarkText text="Pick complementary colours using a palette generator." />
            <MarkText text="Add images like photos of the couple or themed graphics." />
            <MarkText text="Download and print on high-quality paper or save as a digital file to send via email or social media." />
          </Box>
        }
        buttonName={"Explore Cards"}
        image="./images/anivversaryMinute.png"
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
          heding="1. What are anniversary invitation templates?"
          text="Anniversary invitation templates are pre-designed invitation cards that can be customised and filled out with the necessary information for an anniversary celebration."
        />

        <FaqsBox
          heding="2. Where can I find anniversary invitation templates?"
          text="There are many websites and online marketplaces that offer free or paid anniversary invitation templates. You can also create your own using design software or hire a graphic designer to create one for you."
        />

        <FaqsBox
          heding="3. How do I customise an anniversary invitation template?"
          text="Most anniversary invitation templates come in editable formats, such as PSD or AI files, which can be opened in graphic design software like Adobe Photoshop or Illustrator. You can then change the text, colours, and images to suit your preferences."
        />

        <FaqsBox
          heding="4. What information should be included in an anniversary invitation?"
          text="A typical anniversary invitation should include the names of the couple, date, time, and location of the event, as well as RSVP details and any other relevant information, such as dress code or gift suggestions."
        />

        <FaqsBox
          heding="5. Can I print my own anniversary invitations from a template?"
          text="Yes, most anniversary invitation templates can be printed at home on a standard printer or sent to a professional printing service for higher quality results. Be sure to choose the appropriate paper stock and size for your chosen template."
        />
      </Box>

      <GetTemplates
        heading="Design your dream anniversary invitations today and create a celebration to remember!"
        text="Make your anniversary unforgettable with our must-have invitation templates!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
