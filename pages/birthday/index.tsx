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
import MainLoaderBox from "@/components/common/MainLoaderBox";

export default function index() {
  return (
    <>
      <CustomeHead
        image="/images/birthdayInvitation.png"
        heading={
          "Create custom birthday invitations in minutes and make your celebration extra special!"
        }
        text="Create birthday magic with just a click - personalized invitations made easy!"
      />
      <GetStartedLinearBanner
        heading={
          "Create custom birthday invitations in minutes and make your celebration extra special!"
        }
        text="Create birthday magic with just a click - personalized invitations made easy!"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={"/images/birthdayBanner.png"}
              alt="birthdayBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect birthday
        invitations?"
        point={
          <Box>
            <MarkText text=" Choose a template or start from scratch" />
            <MarkText text=" Add your own images, text, and graphics" />
            <MarkText text=" Customise colours, fonts, and layouts" />
            <MarkText text=" Preview and edit until you're satisfied" />
            <MarkText text=" Download, print or share your invitation" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        image="/images/birthdayInvitation.png"
      />

      <RightImageSection
        title="Craft the birthday invitation with
        ease :"
        point={
          <Box>
            <MarkText text="Determine the type of party you want to host and choose a suitable theme." />
            <MarkText text="Decide on the budget for the party and determine how much you can spend on invitations." />
            <MarkText text="Consider the guest list and ensure that the invitations reflect the appropriate tone and style." />
            <MarkText text="Choose a platform or tool that allows you to create custom invitations easily and effectively." />
            <MarkText text="Plan ahead and allot enough time to complete the invitation design and send them out to your guests." />
          </Box>
        }
        buttonName={"Create your Card "}
        image="/images/birthdayEase.png"
      />

      <LeftImageSection
        title="Make custom birthday invitations
        in minutes"
        point={
          <Box>
            <MarkText text="Choose a customizable template or create one from scratch using a design platform." />
            <MarkText text="Personalise the invitation by adding text, images, and other details that match the party's theme and style." />
            <MarkText text="Use tools such as colour schemes, fonts, and layouts to create an eye-catching design." />
            <MarkText text="Preview the invitation before finalising it and make any necessary changes or adjustments." />
            <MarkText text="Save the finished product as a high-quality file format for easy sharing and printing options." />
          </Box>
        }
        buttonName={"Choose your Template"}
        image="/images/birthdayMinute.png"
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
          heding="1. What should be included in a birthday invitation?"
          text=" A birthday invitation should include the name of the celebrant, date, time, location, and RSVP details. You can also add a dress code, gift preferences, or other relevant information."
        />

        <FaqsBox
          heding="2. When should I send out birthday invitations?"
          text=" It is recommended to send out birthday invitations at least 2-3 weeks before the party date to give guests enough time to plan and RSVP."
        />

        <FaqsBox
          heding="3. Can I create my own custom birthday invitations?"
          text=" Yes, you can create your own custom birthday invitations using various online platforms or software, which provide templates and design tools to personalise your invitations."
        />

        <FaqsBox
          heding="4. Is it necessary to add images or graphics to the birthday invitation?"
          text=" Adding images or graphics adds a personal touch to the invitation and can make it more visually appealing. However, it's not essential, and you can keep the design simple if you prefer."
        />

        <FaqsBox
          heding="5. How can I ensure that my guests receive the birthday invitation?"
          text=" You can send birthday invitations via email, messaging apps, or social media platforms. If you prefer traditional methods, you can print and mail them to the invitees' home address or hand-deliver them. Always confirm receipt of the invitation with your guests."
        />
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Birthday Invitation Templates. "
        text="Design your perfect birthday invitation in just a few clicks!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
