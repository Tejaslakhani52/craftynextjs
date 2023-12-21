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
        image="/images/brouchureDesign.png"
        heading={
          "Effective Brochure Design - Elements to Create a Unique and Engaging Brochure"
        }
        text="Crafted with Care: Stunning Brochure Designs That Tell Your Story."
      />
      <GetStartedLinearBanner
        heading={
          "Effective Brochure Design - Elements to Create a Unique and Engaging Brochure"
        }
        text="Crafted with Care: Stunning Brochure Designs That Tell Your Story."
        buttonName="Get Started"
        navigate="/s/brochure"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/brouchureBanner.png"}
              alt="brouchureBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="What elements should be included
        in an effective brochure design?"
        point={
          <Box>
            <MarkText text=" Understand your audience and tailor the content and design to their needs" />
            <MarkText text=" Use a clear headline, high-quality images, and simple layout to enhance readability" />
            <MarkText text=" Organise the content with headings, subheadings, and bullet points to improve comprehension and retention" />
            <MarkText text=" Maintain consistency in branding and messaging throughout the brochure" />
            <MarkText text=" Include a strong call-to-action that prompts the reader to take action." />
          </Box>
        }
        buttonName={"Design your Brochure"}
        alt="brochure design"
        path="/s/brochure"
        image="/images/brouchureDesign.png"
      />
      <RightImageSection
        title="How to make unique brochures?"
        point={
          <Box>
            <MarkText text=" Research competition and develop a unique visual identity that aligns with your brand and effectively communicates its personality and values" />
            <MarkText text=" Experiment with formats, shapes, and materials to create a tactile experience that engages the reader and highlights the unique features of your product or service" />
            <MarkText text=" Use storytelling techniques to connect with the audience emotionally and make the content more memorable" />
            <MarkText text=" Incorporate persuasive language that is easy to understand and motivates the reader to take action" />
            <MarkText text=" Focus on providing value to the reader by addressing their needs and solving their problems." />
          </Box>
        }
        buttonName={"Create Your Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="/images/brouchureUnique.png"
      />
      <LeftImageSection
        title="5 steps to create a brochure:"
        point={
          <Box>
            <MarkText text=" Plan goals and gather information about the purpose, audience, and message of the brochure" />
            <MarkText text=" Create a rough outline of the content and structure, ensuring that the content is organised logically and that the layout is visually appealing and easy to follow" />
            <MarkText text=" Design the brochure using graphic design tool, making sure that the design aligns with the brand identity and effectively communicates the desired message and personality of the company" />
            <MarkText text=" Incorporate visuals, such as images, illustrations, and graphs, to enhance the message and engagement level of the brochure" />
            <MarkText text=" Review and edit the final version before printing or sharing, ensuring that the content is accurate, well-written, and free of errors or typos." />
          </Box>
        }
        buttonName={"Explore Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="/images/brouchureCreate.png"
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
          heading="1. What is the purpose of a brochure?"
          text="A brochure is a marketing tool used to communicate information about a product, service, or organisation. Its purpose is to inform and educate potential customers and stakeholders, build brand awareness, and encourage them to take action."
        />

        <FaqsBox
          heading="2. How can I make my brochure stand out?"
          text="To make your brochure stand out, you can use unconventional shapes or sizes, non-traditional materials, creative copywriting techniques, interactive elements, and unique visual experiences. It's important to also ensure that your brochure aligns with your brand identity and effectively communicates your message to your target audience."
        />

        <FaqsBox
          heading="3. What are the key elements of an effective brochure design?"
          text="The key elements of an effective brochure design include a clear and concise headline, visually appealing images and graphics, informative and engaging content, a consistent colour scheme and typography, and a clear call-to-action (CTA). These elements work together to grab attention, communicate your message, and encourage readers to take action."
        />

        <FaqsBox
          heading="4. Can I create a brochure on my own, or do I need professional help?"
          text="You can create a brochure on your own using various software programs and online tools. However, if you want a high-quality and professional-looking brochure that effectively communicates your message and aligns with your brand identity, it may be beneficial to seek the help of a professional designer or agency."
        />

        <FaqsBox
          heading="5. How should I distribute my brochure?"
          text="There are various channels you can use to distribute your brochure, such as mail, events, or in-person visits. It's important to consider your target audience and their preferred communication methods when choosing your distribution channels. You can also promote your brochure through your website, social media, and other marketing channels to increase visibility."
        />
      </Box>
      <GetTemplates
        heading="Unleash Your Creativity with Brochure Maker - Design & Print Stunning Brochures!"
        text="Design Beautiful Brochures with Ease - No Design Skills Required!"
        navigate="/s/brochure"
      />
      <ExploreTemplates getAll="/s/brochure" />
    </>
  );
}
