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
        image="/images/resumeDesign.png"
        heading={"Crafting a Winning Resume: Tips and  Best Practices"}
        text="Take your career to the next level with a professional, well-crafted resume."
      />
      <GetStartedLinearBanner
        heading={"Crafting a Winning Resume: Tips and  Best Practices"}
        text="Take your career to the next level with a professional, well-crafted resume."
        buttonName="Get Started"
        navigate="/templates/resume-portrait"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/resumeBanner.png"}
              alt="resumeBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="What makes a standout resume?"
        point={
          <Box>
            <MarkText text="Research the company and industry you're applying to and tailor your resume accordingly." />
            <MarkText text="Use clear and concise language and formatting." />
            <MarkText text="Highlight achievements and quantify them with numbers or statistics." />
            <MarkText text="Customise your resume for each job application using keywords from the job posting." />
            <MarkText text="Proofread carefully." />
          </Box>
        }
        buttonName={"Design your Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="/images/resumeDesign.png"
      />
      <RightImageSection
        title="How to structure a resume for
        maximum impact?"
        point={
          <Box>
            <MarkText text="Start with a strong summary statement." />
            <MarkText text="Organise your resume into clear sections that highlight relevant experiences and skills." />
            <MarkText text="Emphasise achievements and use action verbs." />
            <MarkText text="Use visual elements like bullet points and bolded text to guide the reader's eye." />
            <MarkText text="End with a call-to-action statement." />
          </Box>
        }
        buttonName={"Create Your Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="/images/resumeImpact.png"
      />
      <LeftImageSection
        title="How to make a unique resume?"
        point={
          <Box>
            <MarkText text="Consider a creative format or design that reflects your personal brand." />
            <MarkText text="Incorporate visual elements such as icons, graphics, and colours." />
            <MarkText text="Highlight achievements using storytelling techniques." />
            <MarkText text="Provide links to your online portfolio." />
            <MarkText text="Experiment with different design tools and software." />
          </Box>
        }
        buttonName={"Explore Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="/images/resumeUnique.png"
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
          heading="1. What can I do to make my resume stand out?"
          text="To make your resume stand out, tailor it to the job you're applying for, highlight your achievements using numbers and statistics, use clear and concise language and formatting, and customise your resume for each job application."
        />

        <FaqsBox
          heading="2. How can I structure my resume to showcase my skills and experience effectively?"
          text="To structure your resume for maximum impact, start with a strong summary statement, organise your resume into clear sections that highlight relevant experiences and skills, emphasise achievements using action verbs, use visual elements strategically to guide the reader's eye, and end with a call-to-action statement."
        />

        <FaqsBox
          heading="3. What are some common mistakes to avoid when creating a resume?"
          text="Common mistakes to avoid when creating a resume include grammatical errors, typos, generic language that doesn't highlight your unique skills and experiences, not customising your resume for each job application, and not highlighting your achievements using specific numbers or statistics."
        />

        <FaqsBox
          heading="4. What are the key elements that should be included in a resume?"
          text="The key elements that should be included in a resume include a summary statement, education and work experience, skills and qualifications, achievements and accomplishments, and professional references."
        />

        <FaqsBox
          heading="5. How can I make my resume unique and visually appealing?"
          text="To make your resume unique and visually appealing, consider using a creative format that showcases your personal brand, incorporate visual elements like icons and colours to guide the reader's eye, use storytelling techniques to highlight achievements and creativity, provide links to your online portfolio or social media accounts, and experiment with different design tools and software."
        />
      </Box>
      <GetTemplates
        heading="Ready to create a standout resume? Get started today!"
        text="Create a standout resume and land your dream job with resume maker"
        navigate="/templates/resume-portrait"
      />
      <ExploreTemplates getAll={"/templates/resume-portrait"} />
    </>
  );
}
