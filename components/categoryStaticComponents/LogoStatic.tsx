import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

export default function LogoStatic() {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <div>
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How Does Customize Your Logo ?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an logo with our online utility is simple and
          straightforward. You can make a beautiful logo for your event by
          following the easy set of rules given below.
        </Typography>

        <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[83%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="flex gap-3 mb-10">
              {["", "", "", ""].map((item, index) => (
                <Box
                  className={`${
                    activeStep === index + 1
                      ? "bg-[#1C3048]  text-white"
                      : "bg-[#EDF0F9]  text-[#5C626A]"
                  }  text-[20px] font-semibold cursor-pointer h-[38px] w-[40px] rounded-full flex justify-center items-center`}
                  onClick={() => setActiveStep(index + 1)}
                >
                  {index + 1}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: activeStep === 1 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 1
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Browse
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Explore our diverse collection of logo design templates. Filter
                by industry, style, or color to find options that resonate with
                your brand.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 2 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 2
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Select
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Once you've found the perfect template, click to view details.
                See how the design looks in different applications and envision
                how it can elevate your brand.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 3 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 3
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Customize
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Personalize your chosen template using our intuitive
                customization tools. Experiment with colors, fonts, and layout
                until you achieve the desired look.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 4 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 4
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Download
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                When you're satisfied with your design, download the
                high-resolution files. Our templates come in formats compatible
                with various design software for seamless integration into your
                branding strategy.
              </Typography>
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/makeLogo1.png"}
              alt={"logo template"}
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
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] font-[600] mb-5"
              >
                Why Choose Our Logo Design Templates?
              </Typography>

              <FaqsBox
                heading="Professional Craftsmanship"
                text="Our templates are created by skilled designers who understand the nuances of effective logo design. Each template reflects a commitment to quality and professionalism."
              />

              <FaqsBox
                heading="Versatility"
                text="From sleek and modern to classic and timeless, our collection encompasses a wide range of styles. Find the perfect match for your brand's personality, ensuring that your logo stands out in any industry."
              />

              <FaqsBox
                heading="Easy Customization"
                text="Tailor your chosen template to suit your brand with ease. Our templates are fully customizable, allowing you to adjust colors, fonts, and layout to create a logo that truly represents your vision."
              />

              <FaqsBox
                heading="Affordable Solutions"
                text="Hiring a designer for a custom logo can be expensive. Our templates offer a cost-effective alternative without compromising on quality. Invest in your brand without breaking the bank."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/chooseLogo.png"}
              alt={"logo template"}
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
