import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

const howMakeQuotes = [
  {
    heading: "Printable Options:",
    text: "Some quotes are available in printable formats. Decorate your space or create thoughtful gifts with our printable quote templates.    ",
    icon: "/images/category/searchQuotes.svg",
  },
  {
    heading: " Customization Options:     ",
    text: "Personalize quotes to match your style or tailor them to specific occasions. Change fonts, colors, and layouts for a unique touch.    ",
    icon: "/images/category/editQuotes.svg",
  },
  {
    heading: "Download and Share:   ",
    text: " Easily download your favorite quotes and share them on social media, in presentations, or with friends and family.    ",
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
          How to Use Our Quotes Templates
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
              alt={"quotes template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>

          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%] relative">
            {howMakeQuotes?.map((item, index) => (
              <Box className="flex gap-8 items-center mb-10">
                <Box className=" flex gap-3 items-center ">
                  <Box className=" text-[#ABB2C7] text-[23px]">{index + 1}</Box>

                  <img
                    src={item.icon}
                    alt="quotes template"
                    className="bg-white"
                  />
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
                Why Choose Our Quote Templates?
              </Typography>

              <FaqsBox
                heading="Quality Content                 "
                text="Our quotes are carefully curated to ensure relevance, authenticity, and impact.
                  "
              />
              <FaqsBox
                heading="Diverse Selection                 "
                text="From classic literature to contemporary thinkers, our collection spans a wide range of sources and themes."
              />
              <FaqsBox
                heading="User-Friendly"
                text="Easily navigate, download, and customize quotes to suit your needs.
                "
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/whyChooseQuotes.png"}
              alt={"quotes template"}
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
            heading="What is a Quotes Post?"
            text="A Quotes Post is a curated collection of inspirational, motivational, or thought-provoking quotes presented in a visually appealing format. These posts aim to share wisdom, positivity, and insights with the audience."
          />

          <FaqsBox
            heading="How can I create a Quotes Post?"
            text="Creating a Quotes Post is simple. Choose a theme or topic, select relevant quotes, and pair them with engaging visuals. Use graphic design tools or apps to enhance the visual appeal of your post."
          />

          <FaqsBox
            heading="Where can I find quotes for my Quotes Post?"
            text="You can find quotes in Crafty Art Quotes Post Maker."
          />

          <FaqsBox
            heading="How can I measure the success of my Quotes Posts?"
            text="Track engagement metrics such as likes, shares, and comments. Pay attention to the quotes that resonate the most with your audience and adjust your content strategy accordingly."
          />

          <FaqsBox
            heading="How do I choose the right quotes for my audience?"
            text="Consider your audience's interests, values, and preferences. Tailor the quotes to resonate with your audience and align with the overall theme or message of your platform."
          />
        </Box>
      </Box>
    </div>
  );
}
