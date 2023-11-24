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
        image="/images/calendarDesign.png"
        heading={
          "Stay organized and stylish all year round with our custom calendar maker!"
        }
        text="Get ready to schedule your way to success with our beautifully designed calendars!"
      />
      <GetStartedLinearBanner
        heading={
          "Stay organized and stylish all year round with our custom calendar maker!"
        }
        text="Get ready to schedule your way to success with our beautifully designed calendars!"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/calendarBanner.png"}
              alt="calendarBanner"
              style={{
                width: "100%",
                height: "100%",
                paddingRight: "0px",
              }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="What elements should be included
        in a calendar design?"
        point={
          <Box>
            <MarkText text="Identify the purpose of your calendar and essential information to convey." />
            <MarkText text="Choose a visual style that aligns with your brand identity and target audience preferences." />
            <MarkText text="Consider the layout and organisation of the calendar, including size and placement of elements." />
            <MarkText text="Use clear and consistent formatting with grid lines, labels, and icons." />
            <MarkText text="Include interactive features and calls-to-action to increase user engagement." />
          </Box>
        }
        buttonName={"Design your Calendar"}
        image="/images/calendarDesign.png"
      />
      <RightImageSection
        title="How to make a unique calendar?"
        point={
          <Box>
            <MarkText text="Brainstorm creative concepts and themes that align with your brand messaging." />
            <MarkText text="Experiment with design elements such as colour schemes, fonts, textures, and imagery." />
            <MarkText text="Incorporate multimedia and interactive components, like videos, animations, and games." />
            <MarkText text="Consider adding user-generated content, such as photos or testimonials." />
            <MarkText text="Test different variations of your design with user feedback and analytics data for optimization." />
          </Box>
        }
        buttonName={"Create Your Calendar"}
        image="/images/calendarUnique.png"
      />

      <LeftImageSection
        title="Top 5 trending designs for calendar"
        point={
          <Box>
            <MarkText text="Minimalist design with white space and simple fonts." />
            <MarkText text="Vintage design with retro-inspired graphics and muted colours." />
            <MarkText text="Illustrative design with hand-drawn or digital illustrations." />
            <MarkText text="Interactive design with gamification elements like quizzes and challenges." />
            <MarkText text="Typography-driven design with bold, expressive typography as the primary visual element." />
          </Box>
        }
        buttonName={"Explore Calendar"}
        image="/images/calendarTrending.png"
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
          heding="1. What type of calendars do you offer?"
          text=" We offer a wide variety of calendars ranging from daily planners to monthly wall calendars. Our products come in various sizes and designs to suit your preferences and needs."
        />

        <FaqsBox
          heding="2. Can I customise my own calendar?"
          text=" Absolutely! We provide customization options for most of our products, so you can add your own personal touch to your calendar. You can choose your own images, add important dates, and even include personalised notes."
        />

        <FaqsBox
          heding="3. Can I include my own holidays and important dates on the calendar?"
          text=" Yes, we offer customization options that allow you to add your own important dates and events to the calendar. You can also choose from a variety of pre-designed holiday sets to include on your calendar."
        />

        <FaqsBox
          heding="4. Can I preview my customised calendar before placing an order?"
          text=" Yes, we provide a digital proof of your custom design before printing. This allows you to see how your final product will look and make any necessary adjustments before placing your order."
        />

        <FaqsBox
          heding="5. Do you have any tips for designing a custom calendar?"
          text=" When designing your custom calendar, try to use high-quality images and avoid cluttering the design with too much text. Also, consider the overall theme or purpose of the calendar and select appropriate images and colours."
        />
      </Box>

      <GetTemplates
        heading="Stay organised, stay on schedule - with our customizable calendar maker!"
        text="Start planning your days the way you want them - create your perfect calendar today!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="resume-portrait" />
    </>
  );
}
