import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

export default function InvitationStatic() {
  return (
    <div>
      <Box className="py-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Make a Invitation on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-[85%] max-xl:w-full mx-auto mt-[30px] md:mt-[150px] ">
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src="/images/category/Cinvitation1.png"
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Choose A Template
            </Typography>

            <Typography className="text-center ">
              Start by selecting a suitable template for your invitation card.
              Crafty Art offer a variety of templates based on different themes
              and occasions.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src="/images/category/Cinvitation2.png"
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Customize This Template
            </Typography>

            <Typography className="text-center ">
              Once you've chosen a template, personalize it to fit your event.
              Modify the text to include essential details such as the event
              name, date, time, venue, and RSVP information.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src="/images/category/Cinvitation3.png"
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Download And Share
            </Typography>

            <Typography className="text-center ">
              After customizing the invitation to your satisfaction, download
              the final version. Save it in a format that is compatible with
              your needs, such as PDF or image formats.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE] pt-[300px] mt-[-300px]">
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
                Why Choose CraftyArt For Invitation Designs ?
              </Typography>

              <FaqsBox
                heading="Creativity and Uniqueness:"
                text="CraftyArt offers creative and unique invitation card designs."
              />

              <FaqsBox
                heading="Customization Options:"
                text="Extensive customization options for personalized invitations."
              />

              <FaqsBox
                heading="Wide Range of Occasions:"
                text="Covers diverse occasions, ensuring a suitable design for any event."
              />

              <FaqsBox
                heading="Quality Materials:"
                text="High-quality materials for a premium look and feel."
              />

              <FaqsBox
                heading="User-Friendly Platform:"
                text="Easy-to-navigate platform for a seamless design process."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/whyChooseInvitation.png"}
              alt={"invitation template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4 "
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
            <Rating name="read-only" value={5} readOnly />
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
            <Rating name="read-only" value={5} readOnly />
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
            <Rating name="read-only" value={5} readOnly />
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
            heading="Why choose CraftyArt for invitation card designs?"
            text="CraftyArt offers a unique blend of creativity, quality, and customization in every design."
          />

          <FaqsBox
            heading="Can I customize my invitation cards?"
            text="Yes, CraftyArt specializes in customization, allowing you to personalize colors, themes, and details."
          />

          <FaqsBox
            heading="How do I order custom invitation cards?"
            text="Visit Crafty Art, choose a design, and contact us to discuss customization and place your order."
          />

          <FaqsBox
            heading="What is the turnaround time for customized cards?"
            text="Turnaround time varies; our team provides an estimated timeline during customization discussions."
          />

          <FaqsBox
            heading="Do you offer bulk discounts?"
            text="Yes, CraftyArt provides competitive pricing and discounts for bulk orders."
          />
        </Box>
      </Box>
    </div>
  );
}
