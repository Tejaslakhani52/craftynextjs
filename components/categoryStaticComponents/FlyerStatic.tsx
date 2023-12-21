import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

const howMakeFlyer = [
  "Explore our wide range of categories to find the perfect flyer for your needs.  ",
  "Personalize the flyer with your text, images, and branding elements using easy-to-use editing tools.",
  "Once satisfied with your design, download it in your preferred format, ready to print or share digitally.",
];

export default function FlyerStatic() {
  return (
    <div>
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Make a Flyer on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an flyer with our online utility is simple
          and straightforward. You can make a beautiful flyer for your event by
          following the easy set of rules given below.
        </Typography>

        <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            {howMakeFlyer?.map((item, index) => (
              <Box className="flex gap-3 mb-5">
                <Box className="bg-[#EDF0F9] h-[38px] w-[40px] rounded-full flex justify-center items-center">
                  {index + 1}
                </Box>

                <Typography className="w-fit text-[15px] font-medium">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/makeFlyer.png"}
              alt={"flyer template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]   ">
        <Box className="flex gap-5 py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] font-[600] mb-4"
              >
                Why Choose CraftyArt For Flyer Designs ?
              </Typography>

              <FaqsBox
                heading="Variety"
                text="Explore an extensive range of flyer designs and templates for every occasion."
              />

              <FaqsBox
                heading="Affordability"
                text="Access high-quality designs without breaking the bank with our free templates."
              />

              <FaqsBox
                heading="Ease of Use"
                text="Our Flyer Creator makes designing a breeze, ensuring a stress-free experience for all users."
              />

              <FaqsBox
                heading="Innovation"
                text="Stay on the cutting edge with our constantly updated collection of trendsetting designs."
              />

              <FaqsBox
                heading="Quality Assurance"
                text="We pride ourselves on delivering top-notch flyer that exceed industry standards."
              />

              <FaqsBox
                heading="Customer Satisfaction"
                text="Your happiness is our priority. Join our community of satisfied customers who have experienced the craftyart's difference."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/whyChooseFlyer.png"}
              alt={"flyer template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4"
        >
          What are Customers Saying about Craftyart
        </Typography>
        <Typography className="text-center">
          Craftyart has a proven track record of delivering efficiency, results
          and excellent customer service.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{ backgroundImage: `url(/images/comment/girl1.jpg)` }}
              ></Box>
              <Box className="font-medium dark:text-white">
                <Box>Olivia Davis</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art's custom invitations exceeded my expectations. Their
              user-friendly graphics design tools made it easy to create a
              unique design. The quality and design of invitation card was
              outstanding, and their customer service was top-notch. Quick
              delivery and attention to detail set Crafty Art apart. They made
              my event extra special!,”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{ backgroundImage: `url(/images/comment/man3.jpg)` }}
              ></Box>
              <Box className="font-medium dark:text-white">
                <Box>Ethan Wilson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art Graphic Design Tool has been a game-changer for my
              design projects. Here a reasons why Crafty Art has earned my trust
              and loyalty: User Feedback Integration, Cross-Platform
              Compatibility, Time-Saving Features, Regular Content Updates,
              Security and Privacy, Advanced Export Options and Many More…”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{ backgroundImage: `url(/images/comment/man2.jpg)` }}
              ></Box>
              <Box className="font-medium dark:text-white">
                <Box>James Johnson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art is a fantastic online caricature tool for creating
              unique invitations. Its user-friendly interface make easy to
              design personalized caricatures that bring fun and humor in to my
              event. With excellent customer support and quick delivery, I
              prefer to design Caricature invitations with Crafty Art!,”
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="bg-[#F4F7FE] py-[70px]">
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
          className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px]  "
        >
          <QuestionsTitle
            text1={"Some Popular"}
            text2={"Questions/Answered"}
            text3=""
          />
          <Box sx={{ p: "20px" }}></Box>

          <FaqsBox
            heading="1. Can I use Crafty Art for free?"
            text="Yes, Crafty Art offers a free online logo maker. To access it, select the Logo Maker option from the main page and
          choose one of the premade templates. You can then add your own images, text, and design elements to customise the
          post. When you’re finished, click Save, and your logo will be ready to download."
          />
          <FaqsBox
            heading="2. What are the benefits of a premium subscription?"
            text="As a premium user you can download unlimited Crafty Art assets, and various services."
          />

          <FaqsBox
            heading="3. Why do i have to purchase Crafty Art Pro?"
            text="With the premium user, you can access unlimited service of Crafty Art Pro."
          />

          <FaqsBox
            heading="4. Are my downloads unlimited as a premium user?"
            text="Yes, as a premium user, you have unlimited downloads. There is no limitations on the use of Crafty Art assets, templates,
          and the Background Remover Tool."
          />
        </Box>
      </Box>
    </div>
  );
}
