import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Celebrate = dynamic(() => import("./landingPageComponents/Celebrate"));
const CustomInvitations = dynamic(
  () => import("./landingPageComponents/CustomInvitations")
);
const CustomerSaying = dynamic(
  () => import("./landingPageComponents/CustomerSaying")
);
const ExploreBlog = dynamic(
  () => import("./landingPageComponents/ExploreBlog")
);
const LeftImage = dynamic(() => import("./landingPageComponents/LeftImage"));
const RightImage = dynamic(() => import("./landingPageComponents/RightImage"));
const TrendingFunctionalities = dynamic(
  () => import("./landingPageComponents/TrendingFunctionalities")
);

export const MarkText = ({ text }: any) => {
  return (
    <Box
      sx={{ display: "flex", gap: "20px", alignItems: "flex-start", mb: "8px" }}
    >
      <img
        src={"/images/rightMarks.svg"}
        alt="rightMark"
        className="w-[20px] max-sm:w-[15px] mt-[5px]"
      />

      <Typography
        sx={{ color: "#1C3048", opacity: 1 }}
        className="text-[16px]  max-lg:text max-2sm:text-[14px]"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default function LandingPage({ post }: any) {
  const router = useRouter();

  return (
    <>
      <Box className="h-[463px] bg_linear bg-cover bg-no-repeat max-lg:px-[20px] max-sm:h-auto max-sm:pb-[100px]">
        <Box className="flex flex-col items-center pt-14 gap-5">
          <Typography
            className="text-[47px] font-bold	text-white text-center max-sm:text-[30px]"
            variant="h1"
          >
            Customize your Design in just few Clicks!
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="text-[18px] font-medium	text-white text-center">
              Don't just invite, impress! Get started with our invitation maker
              now
            </Typography>
            <Typography className="text-[18px] font-medium	text-white text-center">
              Enhance your Designing power
            </Typography>
          </Box>

          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "500",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "180px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            className="bg-white text-black py-2"
            onClick={() => router.push("/login")}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Box className="w-[50%] mx-auto mt-[-180px]  max-lg:mt-[-125px] max-sm:mt-[-67px] max-lg:w-[80%] max-sm:w-[97%] min-h-[500px] max-sm:min-h-[200px]">
        <img
          src="/images/landingPageMainVideo.webp"
          alt="landingPageMainVideo"
        />
      </Box>
      <Box className=" my-8 sm:my-16">
        {/* <BrandsIconSlider /> */}
        <TrendingFunctionalities />
      </Box>
      <Box className="flex justify-center">
        <Typography className="text-[47px] font-bold	text-black text-center mx-auto text_linear mb-5 max-sm:text-[28px] px-[20px]">
          Everything you need to create
        </Typography>
      </Box>

      <RightImage
        title=" Easily Remove Image Backgrounds"
        point={
          <Box>
            <MarkText text=" Open your Crafty Art account and select the image that you want to remove the background from." />
            <MarkText text=" Click on the Effects tab, and then select the Background Remover option." />
            <MarkText text=" Use the tool's automatic background removal feature or manually select the background using a lasso or pen tool." />
            <MarkText text=" Preview the result and make any necessary adjustments." />
            <MarkText text=" Save the new image with a transparent background." />
          </Box>
        }
        buttonName={"Explore Background Remover"}
        video={"/videos/remove_bg.mp4"}
        path="/background-remover"
      />

      <LeftImage
        title="Customize Fast With Brand Kit"
        point={
          <Box>
            <MarkText text="From the dashboard, click on Brand kit " />
            <MarkText text="Add your brand colours,  fonts, logos and any other brand assets that you want to include." />
            <MarkText text="Choose a name for your kit and save it. " />
            <MarkText text="Access your brand assets  across all your designs in Crafty Art." />
            <MarkText text=" Update your kit as needed to  reflect changes to your brand identity." />
          </Box>
        }
        buttonName={"Choose your Brand Kit"}
        video={"/videos/brandkit.mp4"}
        path="/brand-kit"
      />

      <RightImage
        title="Quickly Adjust Image Dimensions Without Losing Quality"
        point={
          <Box>
            <MarkText text=" Open your Crafty Art account and select the image that you want to resize." />
            <MarkText text=" Click on the Resize button at the top of the editor window." />
            <MarkText text=" Choose the desired dimensions for your resized image from the dropdown list." />
            <MarkText text=" Preview the result and make any necessary adjustments." />
            <MarkText text=" Save the resized image to your preferred file format." />
          </Box>
        }
        buttonName={"Resize your Image"}
        video={"/videos/resize.mp4"}
        path="/resize"
      />

      <LeftImage
        title=" Transform Photos into Fun Caricatures"
        point={
          <Box>
            <MarkText text=" Upload the photo that you want to turn into a caricature into Crafty Art." />
            <MarkText text=" Use the search bar within Crafty Art to find and add a caricature effect." />
            <MarkText text=" Use the available tools and features to adjust facial features and create a humorous or exaggerated version of the original photo." />
            <MarkText text=" Preview the result and make any necessary adjustments." />
            <MarkText text=" Save the caricatured image to your preferred file format." />
          </Box>
        }
        buttonName={"Turn photo to Caricature"}
        video={"/videos/caricature.mp4"}
        path="/caricature"
      />

      <CustomInvitations />
      <Box className="my-10 2sm:my-28" />
      <RightImage
        title="  Create Consistent Designs with Style Kits"
        point={
          <Box>
            <MarkText text=" From the dashboard, click on Brand kit" />
            <MarkText text=" Add your brand colours, fonts, logos and any other design elements that you want to include." />
            <MarkText text=" Choose a name for your kit and save it." />
            <MarkText text=" Customise design templates to match your style by updating the colours, fonts, and other elements." />
            <MarkText text=" Use your style kit consistently across all marketing channels to establish a strong and recognizable brand." />
          </Box>
        }
        buttonName={"Apply Style Kit"}
        video={"/videos/stylekit.mp4"}
        path="/style-kit"
      />

      <LeftImage
        title=" Place Your Custom Order"
        point={
          <Box>
            <MarkText text=" From the main menu, select Services." />
            <MarkText text=" Browse the design services that are available in Crafty Art and choose one that meets your needs." />
            <MarkText text=" Provide any necessary assets or materials to the provider, such as logos, images, or copy." />
            <MarkText text=" Review and approve the final design before accepting the completed order." />
            <MarkText text=" Pay for the completed order through the Crafty Art platform." />
          </Box>
        }
        buttonName={"Place your Custom Order"}
        video={"/videos/custom_order.mp4"}
        whatsapp
      />
      <RightImage
        title=" Schedule Your Post"
        point={
          <Box>
            <MarkText text=" Create your social media post content within Crafty Art." />
            <MarkText text=" Click on the Schedule button at the top of the editor window." />
            <MarkText text=" Choose the date and time for your post to be published." />
            <MarkText text=" Preview the scheduled post and make any necessary adjustments." />
            <MarkText text=" Confirm and submit your scheduled post for publishing." />
          </Box>
        }
        buttonName={"Schedule your Post"}
        video={"/videos/schedule_post.mp4"}
      />

      <LeftImage
        title="Create your E-profile"
        point={
          <Box>
            <MarkText text=" Select the Create a Design button from the dashboard." />
            <MarkText text=" Choose the design type that you want to use for your eProfile, such as a resume or business card." />
            <MarkText text=" Add your personal information, including your photo, contact details, and work experience." />
            <MarkText text=" Customise the design to match your personal branding using your Crafty Art Brand Kit." />
            <MarkText text=" Download the completed design to use as your eProfile." />
          </Box>
        }
        buttonName={"Create your Eprofile"}
        alt="e profile"
        image="/images/order_img (1).png"
      />

      <CustomerSaying />
      <Celebrate />

      <Box className="h-[650px] sm:h-[430px] 2sm:h-[500px] bg-[url('/images/bottomRounded.png')]  bg-cover bg-no-repeat bg-bottom px-[20px]">
        <Box className="flex flex-col items-center pt-14 gap-5   ">
          <Typography
            className="text-[30px] sm:text-[47px] font-bold text-white text-center "
            variant="h2"
          >
            What are you waiting for?
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="text-[18px] font-medium text-white text-center">
              Join more than 5+ million people who find out what can do with
              craftyart. Explore the largest professional stock collection of
              10+ million craft.
            </Typography>
          </Box>

          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "500",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "180px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            className="bg-white text-black py-2"
            onClick={() => router.push("/login")}
          >
            Yes, I’m ready!
          </Button>
        </Box>
      </Box>

      <ExploreBlog />
    </>
  );
}
