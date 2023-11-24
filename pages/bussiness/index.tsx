import { MarkText } from "@/components/Home/landingPage/LandingPage";
import CustomeHead from "@/components/common/CustomeHead";
import CustomizableSliderTemplates from "@/components/common/CustomizableSliderTemplates";
import FaqsBox from "@/components/common/FAQs";
import FreeTrialBlackBanner from "@/components/common/FreeTrialBlackBanner";
import GetTemplates from "@/components/common/GetTemplates";
import LeftDetail from "@/components/common/LeftDetail";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import RightDetail from "@/components/common/RightDetail";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const sliderTemplate = [
  {
    img: "/images/bussinessCreateInvoice.png",
    buttonName: "Create Invoice",
    path: "/invoice",
  },
  {
    img: "/images/bussinessCreateLatterhead.png",
    buttonName: "Create Latterhead",
    path: "/latterhead",
  },
  {
    img: "/images/bussinessCreateCalendar.png",
    buttonName: "Create Calendar",
    path: "/calendar",
  },
  {
    img: "/images/bussinessCreateResume.png",
    buttonName: "Create Resume",
    path: "/resume",
  },
  {
    img: "/images/bussinessCreateReport.png",
    buttonName: "Create Bussiness Report",
    path: "/bussinessReport",
  },
];

export default function index() {
  return (
    <>
      <CustomeHead
        image="/images/bussinessLetterhead.png"
        heading=" Streamline Your Business with Our Essential Template"
        text=" Design Professional and Functional Documents with Ease Using Our
        Template Library"
      />
      <FreeTrialBlackBanner
        heading=" Streamline Your Business with Our Essential Template"
        text=" Design Professional and Functional Documents with Ease Using Our
        Template Library"
      />

      <RightDetail
        title="How to create a professional
        letterhead for my business?"
        point={
          <Box>
            <MarkText text=" Choose a design that aligns with your brand's visual identity." />
            <MarkText text=" Include all necessary information such as your company name, logo, address, and contact details." />
            <MarkText text=" Decide on the format, whether it will be in digital or print form." />
            <MarkText text=" Select a suitable paper type and quality for printing if required." />
            <MarkText text=" Ensure legal compliance by including any mandated information such as tax registration numbers or legal disclaimers." />
          </Box>
        }
        buttonName={"Create your Letterhead"}
        image="/images/bussinessLetterhead.png"
      />

      <LeftDetail
        title="How to make an effective calendar for my business?"
        point={
          <Box>
            <MarkText text=" Decide on the type of calendar, whether it's a wall calendar, desk calendar, or an online calendar." />
            <MarkText text=" Choose a visually appealing design that incorporates your branding elements." />
            <MarkText text=" Add important dates such as holidays, events, and deadlines related to your business." />
            <MarkText text=" Determine the level of detail to include such as weekly or monthly views, time zones, and notes sections." />
            <MarkText text=" Ensure the calendar is up-to-date and easily accessible to your audience." />
          </Box>
        }
        buttonName={"Find a Calender"}
        image="/images/bussinessCalendar.png"
        path="/calendar"
      />

      <RightDetail
        title="How to create a compelling resume
        for job applications?"
        point={
          <Box>
            <MarkText text="Tailor your resume to the job you're applying for by highlighting relevant skills and experiences." />
            <MarkText text="Use clear and concise language to showcase your achievements and accomplishments." />
            <MarkText text="Structure your resume in a logical and easy-to-read format." />
            <MarkText text="Proofread your resume multiple times for errors in grammar, spelling, and punctuation." />
            <MarkText text="Save your resume in a widely accepted format such as PDF to ensure compatibility with different systems." />
          </Box>
        }
        buttonName={"Create your Resume"}
        image="/images/bussinessResume.png"
        path="/resume"
      />

      <LeftDetail
        title="How to create professional invoice
        for my business?"
        point={
          <Box>
            <MarkText text="Include all essential information such as the date, invoice number, and billing details." />
            <MarkText text="Clearly specify the products or services provided along with their quantity and price." />
            <MarkText text="Set payment terms and methods of payment." />
            <MarkText text="Personalise the invoice by adding your logo and branding elements." />
            <MarkText text="Ensure the invoice is accurate and error-free before sending it to your clients." />
          </Box>
        }
        buttonName={"Design Invoice"}
        image="/images/bussinessInvoice.png"
      />

      <RightDetail
        title="How to write an effective business
        report?"
        point={
          <Box>
            <MarkText text="Define the objective and scope of the report." />
            <MarkText text="Conduct research and gather relevant data to support your findings." />
            <MarkText text="Organise the report into sections and include an executive summary for easy comprehension." />
            <MarkText text="Use graphs, charts, and other visual aids to present the data effectively." />
            <MarkText text="Proofread and edit the report for clarity, coherence, and accuracy." />
          </Box>
        }
        buttonName={"Create your report"}
        image="/images/bussinessReport.png"
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
          heding=" 1. What are business templates?"
          text="Business templates are pre-designed documents or forms that can be customised and used for various business purposes, such as invoices, contracts, business plans, and marketing materials."
        />

        <FaqsBox
          heding=" 2. Are business templates customizable?"
          text="Yes, most business templates can be customised to fit the specific needs of your business. You can typically edit text, add or remove sections, and customise the design elements to match your branding."
        />

        <FaqsBox
          heding=" 3. Can I use business templates for personal use?"
          text="While business templates are designed for professional use, there's no reason why you couldn't adapt them for personal use. For example, an invoice template could be used for tracking expenses or billing clients for freelance work."
        />

        <FaqsBox
          heding=" 4. Why should I use business templates?"
          text="Using business templates can save time and improve efficiency by providing a starting point for commonly used documents and forms. They can also help ensure consistency and professionalism in your business communications."
        />

        <FaqsBox
          heding=" 5. How do I determine which business templates are best suited for my needs?"
          text="The types of business templates you'll need will depend on the nature of your business and its specific needs. Consider what documents or forms you use most frequently, and look for templates that are tailored to those needs. You can also ask other professionals in your industry for recommendations or search for templates specific to your field."
        />
      </Box>

      <GetTemplates
        heading="Unlock the Power of Templates with 5000+ Business Document Templates."
        text="Design your business documents effortlessly and transform your workflow today!"
        navigate="/templates/invitation-card"
      />
      <Box
        sx={{
          width: "100%",
          my: "50px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "2400px",
        }}
      >
        <QuestionsTitle
          text1={""}
          text2={"Get a headstart with fully customizable templates"}
          text3=""
        />

        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
