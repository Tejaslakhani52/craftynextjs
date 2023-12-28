import { calculateHeight } from "@/commonFunction/calculateHeight";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import DashBoardSkelton from "@/components/Home/dashboard/dashboardComponents/DashBoardSkelton";
import FestivalBanner from "@/components/categoryStaticComponents/FestivalStatic";
import FlyerStatic from "@/components/categoryStaticComponents/FlyerStatic";
import InvitationStatic from "@/components/categoryStaticComponents/InvitationStatic";
import LogoStatic from "@/components/categoryStaticComponents/LogoStatic";
import QuotesStatic from "@/components/categoryStaticComponents/QuotesStatic";
import ResumeStatic from "@/components/categoryStaticComponents/ResumeStatic";
import Breadcrumb from "@/components/common/Breadcrumb";
import FaqsBox from "@/components/common/FAQs";
import ImageBox from "@/components/common/ImageBox";
import NotFound from "@/components/common/NotFound";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import {
  modalClosePath,
  openTempModal,
  tempId,
} from "@/redux/reducer/actionDataReducer";
import { Box, Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

const otherData = {
  latestMeta: {
    short_desc:
      "Stay ahead with our collection of latest templates. From cutting-edge designs to contemporary trends, find the perfect fit for your next events.",
    h1_tag: "Latest Templates",
    h2_tag: "Dive into Creativity: Latest Template Designs",
    meta_title: "Latest Template Collection for Every Need | Get Started Now!",
    meta_desc:
      "Enhance your next events with the latest templates. Discover a wide range of Latest Templates for various needs. Get started today!",
    long_desc:
      "In today's fast-paced digital landscape, staying up-to-date with the latest trends and tools is crucial for any creative endeavor. Whether you're a designer, marketer, blogger, or business owner, having access to the most recent templates can significantly boost your projects' impact and efficiency. This is where the world of Latest Templates comes into play.\n\nThe term Latest Templates encompasses a wide array of design resources that span various industries and purposes. These templates can range from website designs, graphic assets, presentation layouts, email designs, social media graphics, and much more. They serve as pre-designed frameworks that can be customized to suit your specific needs, allowing you to save valuable time while maintaining a professional and polished appearance.\n\nThe beauty of these latest templates lies in their adaptability. No matter the nature of your project, whether it's a cutting-edge tech startup pitch, a cozy corner cafe's promotional materials, or a fashion blog's Instagram posts, there are templates available that align with your vision. With a multitude of styles, color schemes, typography choices, and layouts to choose from, you have the freedom to make each template your own.\n\nOne of the key advantages of utilizing the latest templates is the speed they bring to your workflow. Traditional design processes can be time-consuming, often requiring you to start from scratch. With templates, the foundation is already set, and you're simply adding your unique touch. This expedites the design process, allowing you to meet tight deadlines without compromising quality.\n\nMoreover, these templates often come crafted by experienced designers who understand the principles of aesthetics, visual hierarchy, and user experience. This means you're starting with a design that's not only visually appealing but also strategically effective. Even if you're not a design expert yourself, these templates empower you to create materials that resonate with your audience.\n\nLet's delve into some of the most popular categories where the latest templates prove to be game-changers:\n\nWeb Design Templates: In the digital age, your website is often the first point of contact with potential customers. Utilizing the latest web design templates ensures your site is modern, user-friendly, and responsive across devices.\n\nGraphic Design Templates: From business cards to brochures, these templates cover a wide range of print and digital materials. They help you maintain a consistent brand identity across all touchpoints.\n\nPresentation Templates: Whether for business pitches or educational purposes, presentation templates make your content engaging and impactful. Creative slides and visually appealing graphics keep your audience attentive.\n\nSocial Media Templates: Consistency is key on social platforms. With these templates, you can maintain a cohesive brand presence and share eye-catching content that stops users from scrolling.\n\nEmail Marketing Templates: Crafting effective emails can be challenging. The latest email templates ensure your messages are well-designed and optimized for better open and click-through rates.\n\nE-commerce Templates: If you're an online retailer, e-commerce templates help showcase your products in the best light, leading to higher conversion rates and increased sales.\n\nIn conclusion, the world of Latest Templates opens doors to a universe of creativity and efficiency. Whether you're a design professional or a novice, these templates offer a shortcut to stunning visuals and effective communication. By harnessing the power of the latest templates, you're not just keeping up with trends; you're setting new standards for your projects and leaving a lasting impression on your audience. Explore, customize, and elevate your creations with the ever-evolving realm of the latest templates.",
  },
  trendingData: {
    short_desc:
      "Explore the latest design trends with our collection of trending templates. Stay ahead in the world of design with these contemporary and sought-after layouts.",
    h1_tag: "Trending Templates",
    h2_tag: "Popular Trending Design Templates",
    meta_title:
      "Discover the Hottest Trending Templates for Captivating Creations",
    meta_desc:
      "Elevate your content with trending templates! Explore CapCut templates, Instagram trends, and download popular templates to stand out.",
    long_desc:
      "Introducing our curated selection of Trending Templates, designed to help you create captivating and cutting-edge visuals that capture the essence of the moment. Whether you're a content creator, social media enthusiast, or business owner, these templates are your gateway to unleashing creativity like never before.\n\nTrending CapCut Templates:\n\nAre you a fan of video editing? Dive into the world of Trending CapCut Templates, where each frame is an opportunity to express your unique style. CapCut, a popular video editing application, offers a plethora of templates that can transform your raw footage into mesmerizing works of art with Trending Templates. From seamless transitions to eye-catching effects, Trending Templates are designed to elevate your videos to a level of professionalism that stands out in a sea of ordinary content. Whether you're creating content for personal enjoyment or for your audience's delight, CapCut templates provide a canvas for innovation.\n\nRiding the Wave of Trends:\n\nStaying relevant in the digital realm means keeping up with the latest trends. Our Trending Templates are carefully curated to align with the current digital landscape, ensuring that your content resonates with your audience. Whether it's the trending color palettes, typography styles, or visual motifs, these templates are imbued with elements that capture the spirit of the times. Riding the wave of trends isn't just about following the crowd – it's about infusing your unique voice into what's popular, creating a harmonious blend that's both familiar and refreshingly original.\n\nInstagram Trending Templates:\n\nInstagram, as a visual-centric platform, thrives on innovation and aesthetics. Our collection of Instagram Trending Templates is designed to make your profile stand out amidst the noise. From story templates that enhance your engagement to post templates that deliver your message with impact, these designs are tailored for the Instagram-savvy individual. Elevate your stories, enhance your posts, and leave an indelible mark on your followers' feeds with templates that scream scroll-stopping content.\n\nThe Power of Downloadable Creativity:\n\nExploring new horizons of creativity is made easy with our downloadable templates. With just a few clicks, you can infuse your projects with the power of Trending Templates designs. The convenience of downloading these templates empowers you to focus more on content creation and less on design intricacies. Whether you're a seasoned creator or just starting, our templates provide a launching pad for your creative journey, giving you the tools to translate your ideas into tangible, visually appealing realities.Instagram Trending Template Download:\n\nAccessing trending designs for your Instagram feed has never been easier. Our platform offers a seamless Instagram Trending Templates Download experience, granting you instant access to designs that are making waves in the digital sphere. Elevate your grid, stories, and highlights with visuals that reflect the pulse of the online community. Whether it's for personal branding or business promotion, these templates are your secret weapon in making a memorable digital statement.\n\nUnleash Your Creativity:\n\nIn the realm of content creation, creativity knows no bounds. Our Trending Templates serve as the catalyst that propels your imagination to new heights. Whether you're looking to craft visually striking videos, enhance your social media presence, or make your mark in the digital universe, these templates are your companions in the journey. Unleash your creativity, embrace the trends, and craft content that captivates, inspires, and leaves a lasting impact.",
  },
  invitationData: {
    short_desc:
      "Discover a variety of invitation templates for every occasion. From parties to events, our invitation templates offer creative designs to make your invites truly special.",
    h1_tag: "Invitation Templates",
    h2_tag: "Creative Event Invitation Templates",
    meta_title:
      "Stunning Invitation Templates for Every Occasion - Customize with Ease",
    meta_desc:
      "Discover a wide range of invitation templates for all events. Personalize effortlessly and create memorable invitations. Get started today!",
    long_desc:
      "Are you in search of the perfect invitation templates to set the tone for your upcoming event? Look no further! Our collection boasts an extensive array of professionally designed invitation templates tailored to suit every occasion imaginable. Whether you're hosting a birthday bash, a wedding extravaganza, a corporate soirée, or a casual get-together, we've got you covered.\n\nGone are the days of spending hours wrangling with complicated design software. Our user-friendly platform lets you customize each invitation templates with ease. From selecting the color palette that complements your theme to adding your personalized text, the process is a breeze. The result? Unique and eye-catching invitations that reflect your style and event's essence.\n\nOur invitation templates are curated by a team of creative experts who understand the importance of making a lasting impression. A well-designed invitation sets the stage for an unforgettable experience. Choose from a variety of styles, from elegant and timeless to modern and vibrant. Our templates can be tailored to match any event's atmosphere.\n\nThe versatility of our invitation templates is truly remarkable. They're not just for physical invitations; they can be used for digital invitations, e-cards, or social media announcements. Share your event details with friends and family across the globe with just a few clicks. The convenience of digital invitations combined with the beauty of our invitation templates ensures that your event will be talked about long before it happens.\n\nTo make your invitation even more special, we offer the option to upload your own images or artwork. Imagine personalizing wedding invitations with your engagement photos or adding childhood snapshots to birthday invites. The possibilities are endless, and the result is an invitation that's uniquely you.\n\nHosting an event often involves a myriad of tasks, but creating the perfect invitation doesn't have to be a hassle. With our intuitive platform and customizable invitation templates, you'll save time without compromising on quality. Each template is meticulously crafted, ensuring that every element is placed thoughtfully and aesthetically.\n\nDon't settle for generic invitations that fail to capture the essence of your event. Let our invitation templates be the canvas for your creativity. With just a few clicks, you can transform a template into a masterpiece that excites and entices your guests. Make your event stand out from the rest with invitations that mirror the effort and care you've put into planning.\n\n",
  },
};

export default function index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const id: any = router.query;
  console.log("id: ", id?.categoryId);
  const currentPathname = router.asPath;
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<any>("");
  const [data, setData] = useState<any>();
  const [contentData, setContentData] = useState<any>([]);
  const [isNotFix, setIsNotFix] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [notFound, setNotFound] = useState<any>(false);
  const [loadMore, setLoadMore] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState<any>();
  const userLoginStatus = authCookiesGet();
  const tempIdValue = useSelector((state: any) => state.actions.tempId);

  useEffect(() => {
    setLoadMore(true);
    axios
      .post(`/api/category`, {
        cat_id: "latest",
        page: page,
      })
      .then((res: any) => {
        setLoadMore(false);
        setIsLastPage(res?.data?.isLastPage);
        setContentData(otherData.latestMeta);

        setIsNotFix(res?.data?.cat_id >= 0);
        setNotFound(res?.data?.status === 500 ? true : false);

        if (id?.page > res?.data?.total_pages || id?.page < 0) {
          setNotFound(true);
        }

        if (res?.data?.datas) {
          setIsLoading(false);

          setData((prevData: any) => [
            ...(prevData || []),
            ...res?.data?.datas,
          ]);
        }

        if (res?.data?.status === 500) {
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  }, [id, page]);

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

  const height = useMemo(() => {
    let val;

    if (screenWidth > 600) {
      val = 250;
    } else val = 100;

    return val;
  }, [screenWidth]);

  return (
    <>
      {isLoading && <DashBoardSkelton height={height} />}
      {notFound && <NotFound />}

      {!isLoading && (
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

                <Button
                  style={{
                    backgroundColor: "white",
                    width: "162px",
                    textTransform: "unset",
                    boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                    border: "none",
                    padding: "8px 10px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  <span className="text_linear">Start Design</span>
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
                <Box sx={{ width: "400px" }}>
                  <img
                    src={"/images/categoryBanner.png"}
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

            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
              {data?.map((templates: any, index: number) => (
                <ImageBox
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
                      src="/images/category/Cinvitation1.png"
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
                      src="/images/category/Cinvitation2.png"
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
                      src="/images/category/Cinvitation3.png"
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
                    src={"/images/category/whyChooseInvitation.png"}
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
                What are Customers Saying about Craftyart
              </Typography>
              <Typography className="text-center">
                Craftyart has a proven track record of delivering efficiency,
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
                      sx={{ backgroundImage: `url(/images/comment/girl1.jpg)` }}
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
                      sx={{ backgroundImage: `url(/images/comment/man3.jpg)` }}
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
                      sx={{ backgroundImage: `url(/images/comment/man2.jpg)` }}
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
