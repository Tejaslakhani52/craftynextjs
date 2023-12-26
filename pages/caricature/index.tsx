import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LeftImageSection from "../wedding/components/LeftImageSection";
import { MarkText } from "@/components/Home/landingPage/LandingPage";
import RightImageSection from "../wedding/components/RightImageSection";
import WithCraftyartBanner from "@/components/common/WithCraftyartBanner";
import CustomerSayingSmall from "@/components/common/CustomerSayingSmall";
import GetTemplates from "@/components/common/GetTemplates";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import FaqsBox from "@/components/common/FAQs";
import { useRouter } from "next/router";
import CustomHead from "@/components/common/CustomHead";
import Head from "next/head";

export default function index() {
  const router = useRouter();

  return (
    <div>
      <CustomHead
        image="/images/caricature/bannerSide.png"
        heading={"Caricature - Make Caricature From Photo "}
        text="Explore the world of caricature art with Crafty Art! Create funny caricatures with our free Caricature maker, and craft personalized cartoons. Unleash your creativity today!"
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
                  name: "1. How does the free caricature maker from 'Crafty Art' work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art's free caricature maker is user-friendly and operates with a simple upload-and-customize process. Just upload your photo, tweak the settings, and watch your caricature come to life!",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Can I use Crafty Art's caricature tools without any artistic skills?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our tools are designed for users of all skill levels. You can effortlessly create captivating caricatures without any prior artistic experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. What makes Crafty Art's caricature cartoons unique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art allows you to tailor each caricature cartoon to your style, ensuring a personalized touch. Create entertaining moments and turn ordinary photos into laugh-inducing stories.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. Is there a limit to the types of photos I can transform into caricatures?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art's caricature tools are versatile and can transform a wide range of photos. From casual snapshots to formal portraits, you can turn any moment into a whimsical work of art.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. How can I share my caricature creations with others?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sharing your caricature masterpieces is easy! Crafty Art provides seamless options to share on social media, via email, or by downloading your creations for printing or digital use.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Box
        sx={{
          background: "#F9DCE0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px auto",
            width: "100%",
            overflow: "hidden",
          }}
          className="lg:pl-[150px]  max-lg:px-[20px] h-auto sm:h-[420px] max-sm:py-[50px] max-w-[2400px]"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            className="w-full lg:w-[57%] max-lg:items-center "
          >
            <Typography
              sx={{
                color: "#000",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Wedding Invitations: Animated with Caricatures!
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#000",
                width: "100%",
                fontWeight: "500",
              }}
              className="max-lg:text-center"
            >
              Elevate your event with our whimsical Caricature Invitation
              Templates! Infuse personality into your invites with customizable
              caricatures, adding a touch of humor and uniqueness. Impress your
              guests from the start and set the tone for a celebration filled
              with laughter and joy. Perfect for any occasion!
            </Typography>

            <Button
              style={{
                width: "fit-content",
                textTransform: "unset",
                boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
              }}
              className="bg_linear"
              onClick={() => router.push("/")}
            >
              Create your caricature
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "end",
            }}
            className="hidden lg:flex"
          >
            <img
              src={"/images/caricature/bannerSide.png"}
              alt="resumeBanner"
              style={{ width: "auto", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        </Box>
      </Box>
      <LeftImageSection
        title="How to Add Caricature Toons of
        the Bride and Groom to a Wedding
        Invitation Card?"
        point={
          <Box>
            <MarkText text="Use a graphic design tool like Adobe Photoshop or Crafty Art." />
            <MarkText text="Choose or create caricatures that match the invitation's style and theme." />
            <MarkText text="Import the caricatures into the design tool and place them on the card." />
            <MarkText text="Adjust size and orientation to fit with the overall design." />
            <MarkText text="Save the final design as a high-resolution image or PDF file." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side1.png"
      />
      <RightImageSection
        title="Tips for Creating Stylish and
        Unique Caricature Toons for
        Wedding Invitations:"
        point={
          <Box>
            <MarkText text="Consider the couple's personalities, hobbies, and interests." />
            <MarkText text="Use a consistent style and colour scheme throughout the design." />
            <MarkText text="Experiment with different poses and expressions." />
            <MarkText text="Try various techniques for a unique look." />
            <MarkText text="Get feedback from the couple and trusted friends or family." />
          </Box>
        }
        buttonName={"Create a New Card Design"}
        alt="Wedding Invitations"
        image="/images/caricature/side2.png"
      />
      <LeftImageSection
        title="Process to Make a Caricature:"
        point={
          <Box>
            <MarkText text="Upload the image you want to convert into a caricature." />
            <MarkText text="Remove the background from the image." />

            <MarkText text="Transform your image into a caricature." />
            <MarkText text="Add a caricature to the wedding invitation card." />
            <MarkText text="Download an invitation card with a caricature." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side3.png"
      />
      <WithCraftyartBanner />
      <LeftImageSection
        title="Caricature Art: Unleash Your Creativity with Expressive Portraits
        "
        point={
          <Box>
            <MarkText text="Explore the world of caricature art and discover how it adds a unique flair to portraits." />
            <MarkText text="Transform ordinary photos into extraordinary caricature sketches effortlessly." />
            <MarkText text="Crafty Art: A free caricature maker tool is available for an instant artistic touch." />
            <MarkText text="Create memorable and hilarious caricature cartoons with ease." />
            <MarkText text="Turn any photo into a personalized caricature masterpiece." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side4.png"
      />

      <RightImageSection
        title="Caricature Sketch: Bring Your Imagination to Life
        "
        point={
          <Box>
            <MarkText text="Dive into the art of caricature sketching with our user-friendly tools." />
            <MarkText text="Express your creativity through detailed and customized caricature sketches." />
            <MarkText text="Enjoy the simplicity of our free caricature maker for quick and fun sketching." />
            <MarkText text="From funny to heartwarming, craft caricature sketches that tell a story." />
            <MarkText text="Transform mundane photos into captivating caricature pictures effortlessly." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side5.png"
      />

      <LeftImageSection
        title="Caricature Maker Free: Fun and Easy Artistry at Your Fingertips
        "
        point={
          <Box>
            <MarkText text="Discover the joy of creating caricatures without any cost – our maker is free!" />
            <MarkText text="Unlock a plethora of features with our free caricature maker for endless possibilities." />
            <MarkText text="Experience the freedom of being an artist with our user-friendly, no-cost caricature tools." />
            <MarkText text="Craft funny and captivating caricatures without breaking the bank." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side6.png"
      />

      <RightImageSection
        title="Caricature Cartoon: Your Photos, Your Story, Your Way"
        point={
          <Box>
            <MarkText text="Bring your photos to life with entertaining caricature cartoons." />
            <MarkText text="Tailor each caricature cartoon to match your unique style and personality." />
            <MarkText text="Create hilarious and shareable moments with personalized caricature cartoons." />
            <MarkText text="Turn ordinary snapshots into extraordinary, laugh-inducing caricature stories." />
            <MarkText text="Unleash your inner cartoonist and make every photo an animated masterpiece." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side7.png"
      />

      <LeftImageSection
        title="Caricature from Photo: Personalized
        Artistry Made Simple"
        point={
          <Box>
            <MarkText text="Transform any photo into a whimsical work of art with our caricature from photo feature." />
            <MarkText text="Craft personalized caricatures that capture the essence of each subject." />
            <MarkText text="Elevate your photos with a touch of humor and creativity using our easy-to-use tools." />
            <MarkText text="No artistic skills required – turn your favorite photos into caricature gems effortlessly." />
            <MarkText text="Make every moment memorable with caricature transformations." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side8.png"
      />

      <RightImageSection
        title="Caricature Funny: Elevate Your Humor
        with Whimsical Art"
        point={
          <Box>
            <MarkText text="Inject humor into your life with our collection of caricature funny tools." />
            <MarkText text="Create side-splitting moments with funny caricature transformations." />
            <MarkText text="Customize your level of humor with options ranging from subtle to uproarious." />
            <MarkText text="Share the laughter by easily turning any photo into a caricature funny masterpiece." />
            <MarkText text="Discover the joy of laughter through the lens of personalized caricature humor." />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side9.png"
      />

      <LeftImageSection
        title="Online Caricature Invitations: Make
        Your Event Memorable"
        point={
          <Box>
            <MarkText text="Transform your event invitations into memorable keepsakes with our online caricature invitations." />
            <MarkText text="Add a touch of personalization to your invitations with custom caricatures.  " />
            <MarkText text="Our user-friendly online platform makes creating caricature invitations a breeze." />
            <MarkText text="Easily share your caricature invitations online with friends and family." />
            <MarkText text="Leave a lasting impression on your guests by turning your invitations into cherished mementos" />
          </Box>
        }
        buttonName={"Design your Cards"}
        alt="Wedding Invitations"
        image="/images/caricature/side10.png"
      />

      <CustomerSayingSmall />
      <GetTemplates
        heading="Add a Personal Touch to Your Wedding Invitations with Custom Caricatures "
        text="Make Your Wedding Invitations Truly Unique - Get Custom Caricatures Today!"
        bt_name="Design your Invitation"
        navigate="/"
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
          heading="How does the free caricature maker from 'Crafty Art' work?"
          text="Crafty Art's free caricature maker is user-friendly and operates with a simple upload-and-customize process. Just upload your photo, tweak the settings, and watch your caricature come to life!"
        />

        <FaqsBox
          heading="Can I use Crafty Art's caricature tools without any artistic skills?"
          text="Absolutely! Our tools are designed for users of all skill levels. You can effortlessly create captivating caricatures without any prior artistic experience."
        />

        <FaqsBox
          heading="What makes Crafty Art's caricature cartoons unique?"
          text="Crafty Art allows you to tailor each caricature cartoon to your style, ensuring a personalized touch. Create entertaining moments and turn ordinary photos into laugh-inducing stories."
        />

        <FaqsBox
          heading="Is there a limit to the types of photos I can transform into caricatures?"
          text="Crafty Art's caricature tools are versatile and can transform a wide range of photos. From casual snapshots to formal portraits, you can turn any moment into a whimsical work of art."
        />

        <FaqsBox
          heading="How can I share my caricature creations with others?"
          text="Sharing your caricature masterpieces is easy! Crafty Art provides seamless options to share on social media, via email, or by downloading your creations for printing or digital use."
        />
      </Box>
    </div>
  );
}
