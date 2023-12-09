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
        image="/images/bridalShowerBanner.png"
        heading={
          "Celebrate the bride-to-be with stunning bridal shower invitations!"
        }
        text="Create beautiful and unique invitations for your bridal shower with our easy-to-use invitation card maker."
      />
      <GetStartedLinearBanner
        heading={
          "Celebrate the bride-to-be with stunning bridal shower invitations!"
        }
        text="Create beautiful and unique invitations for your bridal shower with our easy-to-use invitation card maker."
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/bridalShowerBanner.png"}
              alt="bridalShowerBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect bridal shower
        invitations?"
        point={
          <Box>
            <MarkText text="Choose a theme that reflects the bride-to-be's personality and style, from bohemian chic to modern minimalist." />
            <MarkText text="Select colours that complement the theme, from pastels to bold and bright hues." />
            <MarkText text="Include personal details like name, date, time, and location, along with fun elements like pictures or favourite quotes." />
            <MarkText text="Use high-quality paper for a professional look and durability." />
            <MarkText text="Keep it simple with easy-to-read fonts and clear messaging." />
          </Box>
        }
        buttonName={"Design your Card"}
        image="/images/bridalInvitation.png"
      />

      <RightImageSection
        title="Craft the perfect bridal shower
        invitation with ease:"
        point={
          <Box>
            <MarkText text="Use an online invitation maker with customizable templates." />
            <MarkText text="Choose from pre-made designs that fit your party's theme." />
            <MarkText text="Add all necessary details and customise font types and sizes." />
            <MarkText text="Consider adding pictures or design elements that reflect the chosen theme." />
            <MarkText text="Preview and proofread before sending out." />
          </Box>
        }
        buttonName={"Create Invitation"}
        image="/images/bridalEase.png"
      />

      <LeftImageSection
        title="Make custom bridal shower
        invitations in minutes:"
        point={
          <Box>
            <MarkText text="Choose a design template that matches your party's theme." />
            <MarkText text="Customise the details, double-checking for accuracy." />
            <MarkText text="Pick complementary colours using a palette generator." />
            <MarkText text="Add pictures or other design elements that reflect the chosen theme." />
            <MarkText text="Download and print on high-quality paper, or save as a digital file to send via email or social media." />
          </Box>
        }
        buttonName={"Explore Cards"}
        image="/images/bridalMinute.png"
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
          heading="1. What are bridal shower invitation templates?"
          text="Bridal shower invitation templates are pre-designed invitation cards that can be customised and filled out with the necessary information for a bridal shower event."
        />

        <FaqsBox
          heading="2. Can I customise my bridal shower invitations?"
          text="bride's sYes, you can customise your bridal shower invitations to fit the theme of your event, the tyle, or your personal preferences. Many online invitation services offer customization options, including colour schemes, fonts, and designs."
        />

        <FaqsBox
          heading="3. How do I customise a bridal shower invitation template?"
          text="Most bridal shower invitation templates come in editable formats, such as PSD or AI files, which can be opened in graphic design software like Adobe Photoshop or Illustrator. You can then change the text, colours, and images to suit your preferences."
        />

        <FaqsBox
          heading="4. What information should be included in a bridal shower invitation?"
          text="A typical bridal shower invitation should include the bride-to-be's name, date, time, and location of the event, as well as RSVP details and any other relevant information, such as gift registry information or dress code."
        />

        <FaqsBox
          heading="5. Can I print my own bridal shower invitations from a template?"
          text="Yes, most bridal shower invitation templates can be printed at home on a standard printer or sent to a professional printing service for higher quality results. Be sure to choose the appropriate paper stock and size for your chosen template."
        />
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Bridal Shower Invitation Templates. "
        text="Design your dream bridal shower invitations today and celebrate in style!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
