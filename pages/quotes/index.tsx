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
        image="/images/qoutesDesign.png"
        heading={
          "Best Practices for Designing Quotes Posts that  Engage Your Audience"
        }
        text="Tips and Techniques for Crafting Distinctive and Memorable Quotes Posts"
      />
      <GetStartedLinearBanner
        heading={
          "Best Practices for Designing Quotes Posts that  Engage Your Audience"
        }
        text="Tips and Techniques for Crafting Distinctive and Memorable Quotes Posts"
        buttonName="Get Started"
        navigate=""
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={"/images/qoutesBanner.png"}
              alt="qoutesBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="What elements should be included
        in a quotes post design?"
        point={
          <Box>
            <MarkText text="Choose a visually appealing background that complements the quote and your brand identity" />
            <MarkText text=" Select a legible font that is easy to read on any device" />
            <MarkText text=" Use contrasting colours to make the text stand out from the background" />
            <MarkText text=" Add a simple yet eye-catching border or frame to the quote" />
            <MarkText text=" Include your logo or website URL to build brand recognition" />
          </Box>
        }
        buttonName={"Design your Quotes"}
        image="/images/qoutesDesign.png"
      />
      <RightImageSection
        title="How to make unique quotes post?"
        point={
          <Box>
            <MarkText text="Use humour or wit to add a unique twist to the quote" />
            <MarkText text="Incorporate trending topics or current events into the quote" />
            <MarkText text="Create custom illustrations or graphics to accompany the quote" />
            <MarkText text="Experiment with different font styles or colour schemes to create a distinctive look" />
            <MarkText text="Personalise the quote by using first-person narrative or including a relevant personal story" />
          </Box>
        }
        buttonName={"Create Your Qoutes"}
        image="/images/qoutesUnique.png"
      />
      <LeftImageSection
        title="Top 5 trending designs for quotes post"
        point={
          <Box>
            <MarkText text="Minimalist design: using a simple layout with clean lines and a limited colour palette" />
            <MarkText text="Vintage design: using retro typography and distressed textures to create an old-school vibe" />
            <MarkText text="Typographic design: using creative typography to showcase the quote as the main focus" />
            <MarkText text="Photographic design: using high-quality photos as the background to add visual interest to the quote" />
            <MarkText text="Abstract design: using geometric shapes or abstract patterns to create a modern and artistic look" />
          </Box>
        }
        buttonName={"Explore Quotes"}
        image="/images/qoutesTrending.png"
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
          heading="1. How can I design a quotes post that resonates with my target audience?"
          text=" To design a quotes post that resonates with your audience, make sure to choose a quote that is relevant to their interests or pain points. Additionally, use colours and fonts that align with your brand identity, and incorporate images or graphics that help convey the message of the quote."
        />

        <FaqsBox
          heading="2. Should I include my logo or website URL in my quotes post design?"
          text=" Yes, including your logo or website URL in your quotes post design can help build brand recognition and drive traffic to your website."
        />

        <FaqsBox
          heading="3. What are some common mistakes to avoid when designing quotes posts?"
          text=" Some common mistakes to avoid when designing quotes posts include using illegible fonts, choosing a background that clashes with the text, and overloading the design with too many elements. It's also important to ensure that the quote you've chosen is accurate and properly attributed."
        />

        <FaqsBox
          heading="4. Can I use quotes from famous people in my quotes posts without permission?"
          text=" No, it's generally not recommended to use quotes from famous people in your quotes posts without first obtaining permission or ensuring that the quote is in the public domain."
        />

        <FaqsBox
          heading="5. How can quotes posts be used to improve conversion rates on landing pages?"
          text=" Quote posts can be used to improve conversion rates on landing pages by providing social proof, building trust, and establishing authority. By incorporating quotes from satisfied customers or industry experts, you can show potential customers that others have had positive experiences with your product or service, which can help increase their confidence in making a purchase."
        />
      </Box>
      <GetTemplates
        heading="Boost Engagement with Eye-Catching Quote Posts - Create Custom Designs Now!"
        text="Bring your words to life with our quotes post maker"
        navigate="/templates/invitation-card"
      />
      <ExploreTemplates category="insta-fb-portrait" />
    </>
  );
}
