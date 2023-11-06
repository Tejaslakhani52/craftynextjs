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
        image="/images/bussinessCardDesign.png"
        heading={"Design professional business cards with business card maker"}
        text="Impress Your Clients with a High-Quality Business Card - Start Designing Now!"
      />
      <GetStartedLinearBanner
        heading={"Design professional business cards with business card maker"}
        text="Impress Your Clients with a High-Quality Business Card - Start Designing Now!"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/bussinessCardBanner.png"}
              alt="bussinessCardBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="What elements should be included
        in a business card design?"
        point={
          <Box>
            <MarkText text=" Start with the basics: Include your name, job title, company name, phone number, email address, and website URL." />
            <MarkText text=" Consider adding a logo or image that represents your brand identity." />
            <MarkText text=" Choose a font that is easy to read and complements your brand's aesthetic." />
            <MarkText text=" Keep the design simple and uncluttered, including only essential information." />
            <MarkText text=" Use high-quality materials and printing techniques to create a professional look and feel." />
          </Box>
        }
        buttonName={"Design your Card"}
        image="/images/bussinessCardDesign.png"
      />

      <RightImageSection
        title="How to make a unique business
        card?"
        point={
          <Box>
            <MarkText text="Identify what makes your business unique and incorporate it into the design." />
            <MarkText text="Experiment with colour schemes that stand out, while still complimenting your brand." />
            <MarkText text="Consider using a non-traditional shape or material for your card." />
            <MarkText text="Showcase your creativity by incorporating graphics, patterns, or illustrations that align with your brand identity." />
            <MarkText text="Make your business card interactive by including QR codes, augmented reality, or other technologies that add an extra layer of engagement." />
          </Box>
        }
        buttonName={"Create Your Business Card"}
        image="/images/bussinessCardCreate.png"
      />

      <LeftImageSection
        title="Top 5 trending designs for
        business cards"
        point={
          <Box>
            <MarkText text="Minimalist: A simple and clean design that's both professional and attention-grabbing." />
            <MarkText text="Embossed or Debossed: A textured effect that adds a tactile dimension to the design and creates an elegant touch." />
            <MarkText text="Metal or Wood: A non-traditional material that gives off a luxury and exclusive impression, perfect for high-end businesses." />
            <MarkText text="Transparent: A modern and sleek design that stands out among traditional business cards." />
            <MarkText text="Die-cut: Custom-shaped cards that allow for creative and unique designs that reflect your brand personality." />
          </Box>
        }
        buttonName={"Explore Cards"}
        image="/images/bussinessCardTrending.png"
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
          heding="1. What information should I include on my business card?"
          text=" Your business card should include your name, job title, company name, phone number, email address, and website URL. You may also choose to include your logo or an image that represents your brand."
        />

        <FaqsBox
          heding="2. How can I make my business card stand out from others?"
          text=" To make your business card stand out, you can experiment with different sizes, shapes, colours, and materials. You can also use creative graphics or typography that align with your brand identity, or add an interactive element like a QR code or augmented reality."
        />

        <FaqsBox
          heding="3. Do I have to follow a specific design template for my business card?"
          text=" No, you don't have to follow a specific template for your business card. However, it's important to keep the design simple and uncluttered, and to use a font and colour scheme that complement your branding."
        />

        <FaqsBox
          heding="4. Why is it important to use high-quality materials and printing techniques for my business card?"
          text=" Using high-quality materials and printing techniques creates a professional look and feel for your business card. It also shows that you put care and attention into your brand and how you present yourself to potential customers or clients."
        />

        <FaqsBox
          heding="5. Are there any design trends I should consider when creating a business card?"
          text=" Yes, some current design trends for business cards include minimalist designs, embossed or debossed text and graphics, metal or wood materials, transparent designs, and die-cut shapes. However, it's important to stay true to your brand identity and choose designs that align with your business goals and values."
        />
      </Box>

      <GetTemplates
        heading="Get Started Now and Create Your Professional Business Card Today!"
        text="Your business card is your first impression – Make it count by creating your own today!"
        navigate="/templates/invitation-card"
      />

      <ExploreTemplates category="business-cards" />
    </>
  );
}
