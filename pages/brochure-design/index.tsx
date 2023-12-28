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
import Head from "next/head";
import CustomerSaying from "@/components/Home/landingPage/landingPageComponents/CustomerSaying";

export default function index() {
  return (
    <>
      <CustomHead
        image="https://assets.craftyart.in/w_assets/images/brouchureDesign.png"
        heading={"Brochure Design: Creative Brochure Designs Online"}
        text="Explore Crafty Art's innovative brochure design. From captivating covers to modern concepts, our designs tell your brand story. Get started today!
        "
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
                  name: "1. What makes Crafty Art's Brochure Design stand out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art's Brochure Design stands out for its perfect blend of creativity and functionality. Each design is meticulously crafted to not only captivate the audience visually but also to effectively convey the intended message.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Do I have input in the design process?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! We believe in collaborative design. Our team works closely with clients to understand their vision, preferences, and brand identity. Your input is invaluable in shaping the final design, ensuring it aligns seamlessly with your goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. Can I see examples of your previous brochure designs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! Explore our extensive portfolio to witness a diverse range of brochure designs. From creative and modern concepts to business-centric solutions, our showcase reflects the depth and versatility of Crafty Art's design expertise.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. What sets Crafty Art's modern brochure designs apart?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art specializes in modern brochure designs that go beyond aesthetics. Our designs are strategically crafted to align with contemporary trends, ensuring your brand stays ahead. We prioritize both visual appeal and relevance to deliver designs that stand the test of time.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. Are there any free resources or consultations available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, there are! Crafty Art offers free brochure design consultations to discuss your needs and explore potential design solutions. Additionally, you can find a selection of free brochure design templates and ideas on our website to kickstart your creative journey.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <GetStartedLinearBanner
        heading={
          "Effective Brochure Design - Elements to Create a Unique and Engaging Brochure"
        }
        text="Elevate your brand with our meticulously crafted Brochure Design template. Seamlessly blend creativity and professionalism to captivate your audience. Effortlessly customize layouts, fonts, and colors for a personalized touch. Make a lasting impression with our versatile and visually stunning brochure template.
        "
        buttonName="Get Started"
        navigate="/s/brochure"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={
                "https://assets.craftyart.in/w_assets/images/brouchureBanner.png"
              }
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
        image="https://assets.craftyart.in/w_assets/images/brouchureDesign.png"
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
        image="https://assets.craftyart.in/w_assets/images/brouchureUnique.png"
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
        image="https://assets.craftyart.in/w_assets/images/brouchureCreate.png"
      />
      {/*  */} <ExploreTemplates getAll="/s/brochure" category="brochure" />
      <RightImageSection
        title="Unlock Your Creativity with Crafty Art's
        Brochure Design Services"
        point={
          <Box>
            <MarkText text="Elevate your brand with stunning brochure design solutions." />
            <MarkText text="Explore our portfolio for a creative brochure design that sets you apart." />
            <MarkText text="Learn from the best brochure design examples in the industry." />
            <MarkText text="Craft a memorable first impression with our attention-grabbing brochure cover designs." />
            <MarkText text="Dive into the future of communication with our modern brochure designs." />
          </Box>
        }
        buttonName={"Create Your Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="https://assets.craftyart.in/w_assets/images/brouchure2.png"
      />
      <LeftImageSection
        title="Your Business, Your Story: Tailored Brochure Designs by Crafty Art
        "
        point={
          <Box>
            <MarkText text="Transform your vision into reality with our customized business brochure designs." />
            <MarkText text="Navigate through a world of possibilities with our business-oriented brochure design concepts." />
            <MarkText text="Unleash the potential of your brand through our expertly crafted free brochure design consultations." />
            <MarkText text="Stay ahead of the competition with our cutting-edge business-centric brochure design strategies." />
            <MarkText text="Experience the Crafty Art difference – where every brochure is a unique business narrative." />
          </Box>
        }
        buttonName={"Explore Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="https://assets.craftyart.in/w_assets/images/brouchure3.png"
      />
      <RightImageSection
        title="Innovative Brochure Design: Where
        Art Meets Functionality"
        point={
          <Box>
            <MarkText text="Explore the fusion of form and function in our innovative brochure designs." />
            <MarkText text="Dive into a world of limitless possibilities with our free brochure design templates." />
            <MarkText text="Witness the seamless blend of creativity and practicality in our modern brochure designs." />
            <MarkText text="Reinvent the way you communicate with our strategically crafted brochure designs." />
            <MarkText text="Redefine success through our innovative approach to brochure design." />
          </Box>
        }
        buttonName={"Create Your Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="https://assets.craftyart.in/w_assets/images/brouchure4.png"
      />
      <LeftImageSection
        title="Crafting Connections: The Art of
        Modern Brochure Design"
        point={
          <Box>
            <MarkText text="Join us in embracing the future of communication through our modern brochure designs." />
            <MarkText text="Witness the evolution of design with our showcase of modern brochure design covers." />
            <MarkText text="Elevate your brand's identity with our modern brochure design concepts." />
            <MarkText text="Discover the power of visual storytelling with our modern brochure design strategies." />
            <MarkText text="Step into a world where design meets technology – your journey to modern brochure excellence begins here." />
          </Box>
        }
        buttonName={"Explore Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="https://assets.craftyart.in/w_assets/images/brouchure5.png"
      />
      <RightImageSection
        title="Free Your Imagination: Crafty Art's Brochure Design Unleashed
        "
        point={
          <Box>
            <MarkText text="Embrace the spirit of creativity with our free-thinking brochure design approach." />
            <MarkText text="Explore our library of free brochure design ideas to spark your inspiration." />
            <MarkText text="Elevate your brand without breaking the bank with our cost-effective brochure design solutions." />
            <MarkText text="Dive into a world of endless possibilities with our free brochure design consultations." />
            <MarkText text="Unleash your imagination – because at Crafty Art, every brochure design is a masterpiece, and your story is waiting to be told." />
          </Box>
        }
        buttonName={"Create Your Brochures"}
        alt="brochure design"
        path="/s/brochure"
        image="https://assets.craftyart.in/w_assets/images/brouchure6.png"
      />
      <CustomerSaying />
      <GetTemplates
        heading="Unleash Your Creativity with Brochure Maker - Design & Print Stunning Brochures!"
        text="Design Beautiful Brochures with Ease - No Design Skills Required!"
        navigate="/s/brochure"
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
          heading="What makes Crafty Art's Brochure Design stand out?"
          text="Crafty Art's Brochure Design stands out for its perfect blend of creativity and functionality. Each design is meticulously crafted to not only captivate the audience visually but also to effectively convey the intended message."
        />

        <FaqsBox
          heading="Do I have input in the design process?"
          text="Absolutely! We believe in collaborative design. Our team works closely with clients to understand their vision, preferences, and brand identity. Your input is invaluable in shaping the final design, ensuring it aligns seamlessly with your goals."
        />

        <FaqsBox
          heading="Can I see examples of your previous brochure designs?"
          text="Certainly! Explore our extensive portfolio to witness a diverse range of brochure designs. From creative and modern concepts to business-centric solutions, our showcase reflects the depth and versatility of Crafty Art's design expertise."
        />

        <FaqsBox
          heading="What sets Crafty Art's modern brochure designs apart?"
          text="Crafty Art specializes in modern brochure designs that go beyond aesthetics. Our designs are strategically crafted to align with contemporary trends, ensuring your brand stays ahead. We prioritize both visual appeal and relevance to deliver designs that stand the test of time."
        />

        <FaqsBox
          heading="Are there any free resources or consultations available?"
          text="Yes, there are! Crafty Art offers free brochure design consultations to discuss your needs and explore potential design solutions. Additionally, you can find a selection of free brochure design templates and ideas on our website to kickstart your creative journey."
        />
      </Box>
    </>
  );
}
