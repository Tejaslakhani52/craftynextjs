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
        image="/images/babyShowerInvitation.png"
        heading={
          "Celebrate the upcoming arrival of your little one with beautiful baby shower templates!"
        }
        text="Create beautiful and unique invitations for your baby shower with our easy-to-use invitation card maker."
      />
      <GetStartedLinearBanner
        heading={
          "Celebrate the upcoming arrival of your little one with beautiful baby shower templates!"
        }
        text="Create beautiful and unique invitations for your baby shower with our easy-to-use invitation card maker."
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={"/images/babyShowerBanner.png"}
              alt="babyShowerBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect baby shower
        invitations?"
        point={
          <Box>
            <MarkText text="Choose a theme that reflects the personality of the parents-to-be and the gender of the baby." />
            <MarkText text="Select colours that match the theme, from pastels to bold and bright hues." />
            <MarkText text="Include personal details like names, date, time, and location, along with fun elements like photos or ultrasound images." />
            <MarkText text="Use high-quality paper for a professional look and durability." />
            <MarkText text="Keep it simple with easy-to-read fonts and clear messaging." />
          </Box>
        }
        buttonName={"Design your Card"}
        image="/images/babyShowerInvitation.png"
      />

      <RightImageSection
        title="Craft the party baby shower with
        ease:"
        point={
          <Box>
            <MarkText text="Use an online invitation maker with customizable templates." />
            <MarkText text="Choose from pre-made designs that fit your theme." />
            <MarkText text="Add all important details and customise font types and sizes." />
            <MarkText text="Consider adding photos or graphics for a personal touch." />
            <MarkText text="Preview and proofread before sending out." />
          </Box>
        }
        buttonName={"Create Invitation"}
        image="/images/babyShowerEase.png"
      />

      <LeftImageSection
        title="Make custom party baby shower
        in minutes:"
        point={
          <Box>
            <MarkText text="Choose a design template that matches your theme." />
            <MarkText text="Customise the details, double-checking for accuracy." />
            <MarkText text="Pick complementary colours using a palette generator." />
            <MarkText text="Add images like ultrasound pictures or themed graphics." />
            <MarkText text="Download and print on high-quality paper or save as a digital file to send via email or social media." />
          </Box>
        }
        buttonName={"Explore Cards"}
        image="/images/babyShowerMinute.png"
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
          heading="1. What are baby shower invitation templates?"
          text="Baby shower invitation templates are pre-designed invitation cards that can be customised and filled out with the necessary information for a baby shower event."
        />

        <FaqsBox
          heading="2. Where can I find baby shower invitation templates?"
          text="There are many websites and online marketplaces that offer free or paid baby shower invitation templates. You can also create your own using design software or hire a graphic designer to create one for you."
        />

        <FaqsBox
          heading="3. How do I customise a baby shower invitation template?"
          text="Most baby shower invitation templates come in editable formats, such as PSD or AI files, which can be opened in graphic design software like Adobe Photoshop or Illustrator. You can then change the text, colours, and images to suit your preferences."
        />

        <FaqsBox
          heading="4. What information should be included in a baby shower invitation?"
          text="A typical baby shower invitation should include the expectant mother's name, date, time, and location of the event, as well as RSVP details and any other relevant information, such as gift registry information or dress code."
        />

        <FaqsBox
          heading="5. Can I print my own baby shower invitations from a template?"
          text="Yes, most baby shower invitation templates can be printed at home on a standard printer or sent to a professional printing service for higher quality results. Be sure to choose the appropriate paper stock and size for your chosen template."
        />
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Baby Shower Invitation Templates. "
        text="Design your dream baby shower invitations today and celebrate in style!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
