import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function ResumeStatic() {
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById("brandIcons");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["brandIcons"]);

  const handleNextClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth + 100,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Box className="py-[70px] max-sm:pb-[30px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Create Resume on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="relative px-[10%] w-[100%] max-md:px-0 mt-14">
          <button
            onClick={handlePrevClick}
            className="pre_button left-[8%] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] hidden sm:flex"
          >
            <KeyboardArrowLeftIcon />
          </button>

          <Box
            className="flex mx-auto overflow-x-auto gap-[100px] items-center scroll_none max-md:gap-[100px]   max-sm:w-[100%]"
            id="brandIcons"
          >
            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src="/images/category/makeResume1.png"
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  1
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Choose a Template
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Crafty Art resume-building platforms provide a variety of
                    templates. Choose one that suits your style and the industry
                    you're applying to.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src="/images/category/makeResume1.png"
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  2
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Customize for Each Job
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Tailor your resume for each job application by emphasizing
                    the skills and experiences most relevant to the specific
                    position.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src="/images/category/makeResume1.png"
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  3
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Save and Download
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Once you're satisfied with your resume, save your work and
                    download it in a format supported by CraftyArt or any other
                    platform (e.g., PDF, Word).
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src="/images/category/makeResume1.png"
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  4
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Print or Submit Online
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Print physical copies for in-person applications, or submit
                    your resume online through job portals or directly to
                    employers.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex justify-center  sm:hidden my-8 gap-[30px]">
            <Button
              onClick={handlePrevClick}
              disabled={!showPrevButton ? true : false}
              sx={{
                opacity: !showPrevButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <img
                src="/icons/leftArrow.svg"
                alt="leftArrow"
                className="w-[10px]"
              />
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={!showNextButton ? true : false}
              sx={{
                opacity: !showNextButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <img
                src="/icons/rightArrow.svg"
                alt="rightArrow"
                className="w-[10px]"
              />
            </Button>
          </Box>

          <button
            onClick={handleNextClick}
            className="next_button right-[8%] max-md:right-[20px] max-sm:top-[100px] max-sm:right-[30%] hidden sm:flex"
          >
            <KeyboardArrowRightIcon />
          </button>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]    ">
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
                Why Choose Crafty Art For Resume Designs ?
              </Typography>

              <FaqsBox
                heading="Creativity "
                text="Unique and visually appealing templates."
              />

              <FaqsBox
                heading="User-Friendly "
                text="Easy-to-navigate interface for all users."
              />

              <FaqsBox
                heading="Versatility "
                text="Diverse resume and design styles for various industries."
              />

              <FaqsBox
                heading="Time Savings "
                text="Streamlines the resume creation process."
              />

              <FaqsBox
                heading="Support "
                text="Offers feedback and assistance for a positive experience."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={"/images/category/whyChooseFestival.png"}
              alt={"Resume Portrait Templates"}
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
            heading="What makes CraftyArt unique for resume designs?"
            text="CraftyArt offers a personalized approach, collaborating closely with clients for unique, industry-aligned resumes."
          />

          <FaqsBox
            heading="Can CraftyArt cater to different industries?"
            text="Yes, our diverse team tailors designs to match various professions, ensuring industry relevance."
          />

          <FaqsBox
            heading="What design elements does CraftyArt focus on?"
            text="CraftyArt combines aesthetics with readability, emphasizing clean and professional designs."
          />

          <FaqsBox
            heading="How does CraftyArt ensure industry standards are met?"
            text="Staying updated on trends, CraftyArt aligns resumes with current industry norms."
          />

          <FaqsBox
            heading="Can CraftyArt handle traditional and creative designs?"
            text="Yes, CraftyArt caters to both traditional and creative preferences, adapting to diverse needs."
          />
        </Box>
      </Box>
    </div>
  );
}
