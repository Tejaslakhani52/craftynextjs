import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

const howMakeQuotes = [
  {
    heading: "Search & Select Quotes Templates",
    text: "Choose from the wide range of Quotes templates from the CraftyArt App.",
    icon: "/images/category/searchQuotes.svg",
  },
  {
    heading: "Edit Quotes to Make Your Own Custom Design",
    text: "Modify and design your Qoutes by using different fonts, photo effects, stickers, backgrounds and so much more.",
    icon: "/images/category/editQuotes.svg",
  },
  {
    heading: "Download, Share & Print Out",
    text: "Review, save and then choose the format and size that you want Or you can share it on social media directly.",
    icon: "/images/category/download.svg",
  },
];

export default function QuotesStatic() {
  return (
    <div className="">
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Make a Quotes on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[85%]  mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  max-lg:pb-5 max-lg:order-1 ">
            <img
              src={"/images/category/makeQuotes.png"}
              alt={""}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>

          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%] relative">
            {howMakeQuotes?.map((item, index) => (
              <Box className="flex gap-8 items-center mb-10">
                <Box className=" flex gap-3 items-center ">
                  <Box className=" text-[#ABB2C7] text-[23px]">{index + 1}</Box>

                  <img src={item.icon} alt="" className="bg-white" />
                </Box>
                <Box className="w-fit">
                  <Typography className="font-semibold">
                    {item?.heading}
                  </Typography>
                  <Typography className=" text-[14px] opacity-70">
                    {item?.text}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Box
              className="absolute top-[52px] left-[50px] bottom-[100px] "
              sx={{ borderLeft: "1px dashed #ABB2C7", zIndex: "-1" }}
            ></Box>
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
                Why Choose CraftyArt For Quotes Designs ?
              </Typography>

              <FaqsBox
                heding="Entirely Free"
                text="All Invitation ideas available in the extensive library of Crafty..."
              />
              <FaqsBox
                heding="Invitations Created By Professional Graphic Designers"
                text="All Invitation ideas are designed by professional graphic desi..."
              />
              <FaqsBox
                heding="Simple Procedure"
                text="With our Invitation design ideas, you won’t have to face any ..."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/whyChooseQuotes.png"}
              alt={""}
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
            heding="1. Can I use Crafty Art for free?"
            text="Yes, Crafty Art offers a free online logo maker. To access it, select the Logo Maker option from the main page and
          choose one of the premade templates. You can then add your own images, text, and design elements to customise the
          post. When you’re finished, click Save, and your logo will be ready to download."
          />
          <FaqsBox
            heding="2. What are the benefits of a premium subscription?"
            text="As a premium user you can download unlimited Crafty Art assets, and various services."
          />

          <FaqsBox
            heding="3. Why do i have to purchase Crafty Art Pro?"
            text="With the premium user, you can access unlimited service of Crafty Art Pro."
          />

          <FaqsBox
            heding="4. Are my downloads unlimited as a premium user?"
            text="Yes, as a premium user, you have unlimited downloads. There is no limitations on the use of Crafty Art assets, templates,
          and the Background Remover Tool."
          />
        </Box>
      </Box>
    </div>
  );
}
