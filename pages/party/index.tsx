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
    <>
      <CustomHead
        image="/images/partyBirthday.png"
        heading={"Create Your Perfect Party Invitation"}
        text="Browse top quality party invitation templates for your next design"
      />
      <GetStartedLinearBanner
        heading={"Create Your Perfect Party Invitation"}
        text="Browse top quality party invitation templates for your next design"
        buttonName="Get Started"
        navigate="/s/party-celebration"
        image={
          <Box sx={{ width: "410px" }}>
            <img
              src={"/images/partyBanner.png"}
              alt="partyBanner"
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
            <MarkText text=" Choose a theme and incorporate it into your invitation." />
            <MarkText text=" Use high-quality images and graphics for a visually appealing design." />
            <MarkText text=" Keep it simple by including only essential details like date, time, location, and RSVP information." />
            <MarkText text=" Consider the tone of your party and use appropriate language in your invitation." />
            <MarkText text=" Proofread the invitation for errors or typos before sending it out." />
          </Box>
        }
        buttonName={"Design your Card"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image="/images/partyBirthday.png"
      />

      <RightImageSection
        title="Craft the party invitation with
        ease?"
        point={
          <Box>
            <MarkText text="Use templates for a professional-looking invitation design." />
            <MarkText text="Organise the information using bullet points or numbered lists." />
            <MarkText text="Choose easy-to-read fonts and avoid using too many different fonts or colours." />
            <MarkText text="Add personality with a fun quote or image related to the theme." />
            <MarkText text="Use online tools and apps that have pre-made templates for quick and easy design." />
          </Box>
        }
        buttonName={"Party Invitation"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image="/images/partyEase.png"
      />

      <LeftImageSection
        title="Make custom party invitations in
        minutes?"
        point={
          <Box>
            <MarkText text="Use online design tools with pre-made templates for quick customization." />
            <MarkText text="Include all essential details and personalise the invitation with the guest's name or message." />
            <MarkText text="Add high-quality images or graphics for a visually appealing design." />
            <MarkText text="Keep the design simple and easy to read." />
            <MarkText text="Proofread the invitation for errors or typos before sending it out." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image="/images/partyMinutes.png"
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
          heading="1. What kind of party invitation templates do you offer?"
          text="Our party invitation templates cover a wide range of occasions, from casual get-togethers to formal events. We have templates for birthdays, weddings, baby showers, holidays, and more. Each template is professionally designed and customizable to make your event stand out."
        />

        <FaqsBox
          heading="2. Can I customise the party invitation templates to fit my event's theme and style?"
          text="Absolutely! Our party invitation templates are fully editable, so you can personalise them to match your event's theme and style. You can change the colours, fonts, and wording to create a unique invitation that reflects your personality and sets the tone for your celebration."
        />

        <FaqsBox
          heading="3. How many guests can I invite with your party invitation templates?"
          text="Our party invitation templates are designed to accommodate any number of guests, whether you're planning an intimate gathering or a large-scale event. You can easily adjust the template to include the exact number of guests you'll be inviting, so you never have to worry about overcrowding or leaving anyone out."
        />

        <FaqsBox
          heading="4. Do you have any tips for wording the invitations to make them more exciting and engaging?"
          text="Yes! Crafting the perfect invitation is all about striking the right balance between informative and engaging. Be sure to include all the important details, like the date, time, location, and dress code, while also injecting some personality and excitement into the wording. Consider using playful language, puns, or rhymes to make your invitation stand out."
        />

        <FaqsBox
          heading="5.Can I see a preview of the party invitation template before I make a final decision?"
          text="Yes! We understand that choosing the perfect party invitation is an important decision, so we offer a preview feature that lets you see how your chosen template will look before you finalise your order. This allows you to make any necessary adjustments or changes to ensure that the invitation looks exactly how you want it to."
        />
      </Box>

      <GetTemplates
        heading="Design your dream party invitation with just a few clicks"
        text="start your creative journey today!"
        navigate="/s/party-celebration"
      />

      <ExploreTemplates
        category="party celebration"
        getAll="/s/party-celebration"
      />
    </>
  );
}
