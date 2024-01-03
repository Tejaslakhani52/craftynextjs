import { decryptData } from "@/aes-crypto";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import Breadcrumb from "@/components/common/Breadcrumb";
import FaqsBox from "@/components/common/FAQs";
import ImageBox from "@/components/common/ImageBox";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { CategoryApiData } from "@/interface/categoryType";
import { DatasType } from "@/interface/searchTemplateType";
import { ActionStateType } from "@/interface/stateType";
import { Box, Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

export default function index() {
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<string>("");
  const [data, setData] = useState<CategoryApiData[] | any>();
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const tempIdValue = useSelector(
    (state: ActionStateType) => state.actions.tempId
  );

  useEffect(() => {
    setLoadMore(true);
    axios
      .post(`/api/category`, {
        cat_id: "latest",
        page: page,
      })
      .then((response: any) => {
        const res = JSON.parse(decryptData(response?.data));
        setLoadMore(false);
        setIsLastPage(res?.isLastPage);

        if (res?.datas) {
          setData((prevData: CategoryApiData[]) => [
            ...(prevData || []),
            ...res?.datas,
          ]);
        }
      })
      .catch((err: any) => {
        // console.log("err: ", err);
      });
  }, [page]);

  useEffect(() => {
    const element: any = document.getElementById(tempIdValue);
    element?.scrollIntoView();
  }, [data]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.3;
      case screenWidth > 1200:
        return 5.3;
      case screenWidth > 1023:
        return 4.3;
      case screenWidth > 700:
        return 3.3;

      case screenWidth > 550:
        return 3.3;

      case screenWidth > 250:
        return 2.22;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  return (
    <>
      {true && (
        <Box>
          {" "}
          <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px]">
            <Head>
              <title>Latest Free Templates For You</title>
              <meta
                name="description"
                content={
                  "Unleash Creativity Now with Our Latest Free Templates! 🚀 Transform Your Projects Instantly. Grab Yours Today! 🎨✨"
                }
              />
            </Head>
            <Box className="pt-[15px]">
              <Breadcrumb
                data={[
                  { name: "Home", path: "/" },
                  { name: "Templates", current: true },
                ]}
              />
            </Box>

            <Box
              sx={{
                background:
                  "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
                display: "flex",
                alignItems: "center",
                margin: "10px auto",
                width: "100%",
                overflow: "hidden",
              }}
              className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] rounded-[8px]"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "10px 0",
                }}
                className="w-full lg:w-[57%] max-lg:items-center "
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    width: "100%",
                    fontWeight: "500",
                    lineHeight: "40px",
                  }}
                  className="max-lg:text-center text-[30px] sm:text-[40px]"
                  variant="h1"
                >
                  Latest Free Templates For You
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#ffff",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                  className="max-lg:text-center"
                >
                  Explore graphic design with the latest templates using this
                  powerful tool, unleashing your creativity effortlessly.
                  Elevate your designs with ease and stay ahead in the world of
                  visual aesthetics
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "43%",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="hidden lg:flex"
              >
                <Box sx={{ width: "400px" }}>
                  <img
                    src={
                      "https://assets.craftyart.in/w_assets/images/categoryBanner.png"
                    }
                    alt=" Latest Free Templates For You"
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingRight: "0px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="min-h-[800px]">
              <StackGrid
                columnWidth={screenWidth / multiSizeFixSize}
                duration={0}
              >
                {data?.map((templates: DatasType, index: number) => (
                  <ImageBox
                    key={index}
                    templates={templates}
                    screenWidth={screenWidth}
                    multiSizeFixSize={multiSizeFixSize}
                    setIdName={setIdName}
                    setOpenModal={setOpenModal}
                  />
                ))}
              </StackGrid>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "40px 0",
                }}
              >
                {loadMore ? (
                  <Box className="text_linear font-[700 text-[20px]">
                    Loading....
                  </Box>
                ) : (
                  <Button
                    className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
                    sx={{ display: isLastPage ? "none" : "block" }}
                    onClick={() => setPage((prev) => prev + 1)}
                  >
                    LOAD MORE
                  </Button>
                )}
              </div>
            </Box>
          </Box>
          <div>
            <Box className="py-[70px] px-[15px]">
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
              >
                How To Edit Template With Crafty Art?
              </Typography>

              <Typography className="text-center md:w-[70%] mx-auto">
                Transform templates effortlessly with Crafty Art: Simply open,
                customize, and save. Intuitive tools make editing a breeze for
                stunning results!"
              </Typography>

              <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-[85%] max-xl:w-full mx-auto mt-[30px] md:mt-[150px] ">
                <Box
                  className="bg-white py-[20px] md:pb-[50px] px-[20px]"
                  sx={{
                    boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Box className="md:mt-[-80px] lg:min-h-[300px]">
                    <img
                      src="https://assets.craftyart.in/w_assets/images/category/Cinvitation1.png"
                      alt=" Latest Free Templates For You"
                      className="max-h-[300px] w-auto block mx-auto"
                    />
                  </Box>

                  <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
                    Choose A Template Design
                  </Typography>

                  <Typography className="text-center ">
                    Explore our best and well designed graphics template and
                    Choose the best template according your need.
                  </Typography>
                </Box>
                <Box
                  className="bg-white py-[20px] md:pb-[50px] px-[20px]"
                  sx={{
                    boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Box className="md:mt-[-80px] lg:min-h-[300px]">
                    <img
                      src="https://assets.craftyart.in/w_assets/images/category/Cinvitation2.png"
                      alt=" Latest Free Templates For You"
                      className="max-h-[300px] w-auto block mx-auto"
                    />
                  </Box>

                  <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
                    Customize This Template
                  </Typography>

                  <Typography className="text-center ">
                    Once you've chosen a template, customize it to meet your
                    specific needs. pay attention to details to ensure the
                    customization aligns with your intended message or theme.
                  </Typography>
                </Box>
                <Box
                  className="bg-white py-[20px] md:pb-[50px] px-[20px]"
                  sx={{
                    boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Box className="md:mt-[-80px] lg:min-h-[300px]">
                    <img
                      src="https://assets.craftyart.in/w_assets/images/category/Cinvitation3.png"
                      alt=" Latest Free Templates For You"
                      className="max-h-[300px] w-auto block mx-auto"
                    />
                  </Box>

                  <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
                    Download And Share
                  </Typography>

                  <Typography className="text-center ">
                    After customizing the template, download the templates in
                    various format like (e.g., PDF, JPEG, PNG).
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
                      Why Choose Crafty Art For Graphics Design?
                    </Typography>

                    <FaqsBox
                      heading="Creativity and Innovation:"
                      text="Look for a design service that demonstrates creativity and innovation in their work. This can set your designs apart and make them more memorable to your audience."
                    />
                    <FaqsBox
                      heading="Cost and Value:"
                      text="Assess the pricing structure and determine whether it aligns with your budget. Also, consider the value you'll receive in terms of quality and service."
                    />

                    <FaqsBox
                      heading="Versatility:"
                      text="A good graphics design service should be versatile and able to handle a variety of design needs, from logos and branding to web design and marketing materials."
                    />
                  </Box>
                </Box>

                <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
                  <img
                    src={
                      "https://assets.craftyart.in/w_assets/images/category/whyChooseInvitation.png"
                    }
                    alt={" Latest Free Templates For You"}
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
                What are Customers Saying about Crafty Art
              </Typography>
              <Typography className="text-center">
                Crafty Art has a proven track record of delivering efficiency,
                results and excellent customer service.
              </Typography>

              <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
                <Box
                  className="w-full bg-[#F4F7FE] p-[30px] h-full "
                  sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
                >
                  <Box className="flex items-center space-x-4 mb-2">
                    <Box
                      className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                      sx={{
                        backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/girl1.jpg)`,
                      }}
                    ></Box>
                    <Box className="font-medium dark:text-white">
                      <Box>Olivia Davis</Box>
                    </Box>
                  </Box>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                    “Crafty Art's custom invitations exceeded my expectations.
                    Their user-friendly graphics design tools made it easy to
                    create a unique design. The quality and design of invitation
                    card was outstanding, and their customer service was
                    top-notch. Quick delivery and attention to detail set Crafty
                    Art apart. They made my event extra special!,”
                  </Typography>
                </Box>
                <Box
                  className="w-full bg-[#F4F7FE] p-[30px] h-full "
                  sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
                >
                  <Box className="flex items-center space-x-4 mb-2">
                    <Box
                      className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                      sx={{
                        backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man3.jpg)`,
                      }}
                    ></Box>
                    <Box className="font-medium dark:text-white">
                      <Box>Ethan Wilson</Box>
                    </Box>
                  </Box>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                    “Crafty Art Graphic Design Tool has been a game-changer for
                    my design projects. Here a reasons why Crafty Art has earned
                    my trust and loyalty: User Feedback Integration,
                    Cross-Platform Compatibility, Time-Saving Features, Regular
                    Content Updates, Security and Privacy, Advanced Export
                    Options and Many More…”
                  </Typography>
                </Box>
                <Box
                  className="w-full bg-[#F4F7FE] p-[30px] h-full "
                  sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
                >
                  <Box className="flex items-center space-x-4 mb-2">
                    <Box
                      className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                      sx={{
                        backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man2.jpg)`,
                      }}
                    ></Box>
                    <Box className="font-medium dark:text-white">
                      <Box>James Johnson</Box>
                    </Box>
                  </Box>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                    “Crafty Art is a fantastic online caricature tool for
                    creating unique invitations. Its user-friendly interface
                    make easy to design personalized caricatures that bring fun
                    and humor in to my event. With excellent customer support
                    and quick delivery, I prefer to design Caricature
                    invitations with Crafty Art!,”
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
                  heading=" What makes Crafty Art unique in graphic design?"
                  text="Crafty Art is known for its innovative and creative approach, delivering personalized and high-quality designs."
                />

                <FaqsBox
                  heading="  How does Crafty Art approach branding and logo design?"
                  text="Crafty Art takes a strategic approach, considering brand identity, target audience, and market positioning to create impactful visuals."
                />
                <FaqsBox
                  heading=" How can I get started with Crafty Art for my design needs?"
                  text="To begin, contact Crafty Art through their Contact us page or provided contact information to Crafty Art and otherwise going to the custom order page for your special design need,"
                />

                <FaqsBox
                  heading=" How does Crafty Art ensure client satisfaction?"
                  text="Crafty Art prioritizes client satisfaction through open communication, thorough understanding of project requirements, and incorporating feedback at every stage."
                />

                <FaqsBox
                  heading=" Can Crafty Art handle small and large-scale projects?"
                  text="Yes, Crafty Art is equipped to handle projects of any size, from small social media graphics to comprehensive branding campaigns."
                />
              </Box>
            </Box>
          </div>
        </Box>
      )}

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </>
  );
}
