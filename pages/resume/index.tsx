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
import CustomerSaying from "@/components/Home/landingPage/landingPageComponents/CustomerSaying";
import Head from "next/head";

export default function index() {
  return (
    <>
      <CustomHead
        image="https://assets.craftyart.in/w_assets/images/resumeDesign.png"
        heading={"Online Resume Maker | Design Professional Resume for Free"}
        text="Crafty Art's Resume Maker: Create standout resume designs with our free resume template tool. Design the perfect CV effortlessly. Try Our Resume Maker Now!"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Crafty Art Online Resume Maker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art Online Resume Maker is a platform designed to help individuals create visually appealing and professional resumes through an easy-to-use online tool.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Crafty Art Online Resume Maker free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art offers a free version with basic features for users to create and download their resumes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customize the artistic elements of my resume with Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Crafty Art provides a variety of artistic templates and customization options, allowing users to personalize the design, colors, and visual elements of their resumes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there guidance on incorporating creative elements into resumes using Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art Online Resume Maker often includes tips and suggestions for integrating creative elements effectively, ensuring resumes stand out in a visually appealing way.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How secure is Crafty Art in terms of handling personal information?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art prioritizes user privacy and employs secure measures to protect personal information entered into the platform.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <GetStartedLinearBanner
        heading={"Crafting a Winning Resume: Tips and  Best Practices"}
        text="Take your career to the next level with a professional, well-crafted resume."
        buttonName="Get Started"
        navigate="/templates/resume-portrait"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={
                "https://assets.craftyart.in/w_assets/images/resumeBanner.png"
              }
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
          </Box>
        }
        buttonName={"Design your Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="https://assets.craftyart.in/w_assets/images/resumeDesign.png"
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
        image="https://assets.craftyart.in/w_assets/images/resumeImpact.png"
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
        image="https://assets.craftyart.in/w_assets/images/resumeUnique.png"
      />
      {/*  */} <ExploreTemplates getAll={"/templates/resume-portrait"} />
      <RightImageSection
        title="Why Choose Our Resume
        Templates?"
        point={
          <Box>
            <MarkText
              text="Resume Template Free Download: Our free templates ensure you get a head start
on your career journey without spending a dime."
            />
            <MarkText
              text="Simple Resume Template: Our templates combine aesthetics with functionality,
allowing your experience and skills to shine through."
            />
            <MarkText
              text="Resume for Student: We've got templates designed specifically for students.
Whether you're entering the job market for the first time."
            />
            <MarkText
              text="Professional Resume Template: Impress employers with a professional look. Our
templates help you present your qualifications seriously in your job search."
            />
            <MarkText
              text="Tailored for Experience: If you have years of experience, our templates will
highlight your achievements, skills, and expertise."
            />
          </Box>
        }
        buttonName={"Create Your Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="https://assets.craftyart.in/w_assets/images/resumeWhy.png"
      />
      <LeftImageSection
        title="How It Works ?"
        point={
          <Box>
            <MarkText text="Browse: Take your time browsing our extensive collection of resume templates." />
            <MarkText text="Select: Choose the template that suits your style, experience, and career goals." />
            <MarkText
              text="Customize: Easily customize your chosen template with your information,
experience, and skills."
            />
            <MarkText
              text="Download: Once you're satisfied with your resume, download it for free and start
applying for your dream job."
            />
          </Box>
        }
        buttonName={"Explore Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="https://assets.craftyart.in/w_assets/images/resumeHow.png"
      />
      <RightImageSection
        title="Why a Well-Designed Resume 
        Matters"
        point={
          <Box>
            <MarkText
              text="Crafty Art's Resume Builder is a user-friendly tool that simplifies the resume-
              making process."
            />
            <MarkText
              text="Whether you're a student or a seasoned professional, our free, downloadable
              resume templates are here to help."
            />
            <MarkText
              text="Our platform is designed for simplicity, allowing you to create customized resume
              designs effortlessly."
            />
            <MarkText text="You don't need design expertise to create a professional-looking resume with us." />
            <MarkText
              text="Crafty Art's Resume Builder is all about making a strong first impression on
              potential employers. You can easily craft your personalized, free resume here."
            />
          </Box>
        }
        buttonName={"Create Your Resume"}
        alt="Resume"
        path="/templates/resume-portrait"
        image="https://assets.craftyart.in/w_assets/images/resumeM.png"
      />
      <CustomerSaying />
      <GetTemplates
        heading="Ready to create a standout resume? Get started today!"
        text="Create a standout resume and land your dream job with resume maker"
        navigate="/templates/resume-portrait"
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
          heading="What is Crafty Art Online Resume Maker?"
          text="Crafty Art Online Resume Maker is a platform designed to help individuals create visually appealing and professional resumes through an easy-to-use online tool."
        />

        <FaqsBox
          heading="Is Crafty Art Online Resume Maker free to use?"
          text="Yes, Crafty Art offers a free version with basic features for users to create and download their resumes."
        />

        <FaqsBox
          heading="Can I customize the artistic elements of my resume with Crafty Art?"
          text="Absolutely! Crafty Art provides a variety of artistic templates and customization options, allowing users to personalize the design, colors, and visual elements of their resumes."
        />

        <FaqsBox
          heading="Is there guidance on incorporating creative elements into resumes using Crafty Art?"
          text="Yes, Crafty Art Online Resume Maker often includes tips and suggestions for integrating creative elements effectively, ensuring resumes stand out in a visually appealing way."
        />

        <FaqsBox
          heading="How secure is Crafty Art in terms of handling personal information?"
          text="Crafty Art prioritizes user privacy and employs secure measures to protect personal information entered into the platform."
        />
      </Box>
    </>
  );
}
