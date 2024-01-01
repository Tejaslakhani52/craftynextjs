import { decryptData } from "@/aes-crypto";
import Icons from "@/assets";
import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import DashBoardSkelton from "@/components/Home/dashboard/dashboardComponents/DashBoardSkelton";
import Breadcrumb from "@/components/common/Breadcrumb";
import NotFound from "@/components/common/NotFound";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import {
  modalClosePath,
  openTempModal,
  tempId,
} from "@/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

const ImageBox = ({
  templates,
  screenWidth,
  multiSizeFixSize,
  setIdName,
  setOpenModal,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log("currentIndex: ", currentIndex);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: any = useRef(null);
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: any) => (prevIndex + 1) % templates?.thumbArray
        );
      }, 1300);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, templates?.thumbArray]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="relative"
      style={{
        height: `${calculateHeight(
          templates?.width,
          templates?.height,
          screenWidth / multiSizeFixSize
        )}px`,
        width: `${screenWidth / multiSizeFixSize}px`,
      }}
      // id={`content${index}`}
    >
      {/* <Link
      href={`/templates/p/${templates.id_name}`}
      // as={`/templates/p/${templates.id_name}`}
      // scroll={false}
      // shallow={true}
      // replace
    > */}
      <div
        className="w-full h-full p-[8px]"
        onClick={() => {
          setIdName(templates?.id_name);
          setOpenModal(true);

          window.history.replaceState(
            {},
            "",
            `/templates/p/${templates?.id_name}`
          );
        }}
      >
        {templates.is_premium && (
          <span className="w-[28px] absolute right-[13px] top-[13px] z-[1]">
            <Icons.proIcon svgProps={{ width: 28 }} />
          </span>
        )}
        <div
          className="custom-carousel w-full h-full overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel-slider w-full h-full rounded-[5px]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              border: "1px solid #80808082",
            }}
          >
            {templates?.thumbArray.map((image: any, index: number) => (
              <div
                className="carousel-slide"
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {/* <img
                  src={image}
                  alt={`slide-${index}`}
                  className={`w-full] rounded-[5px] cursor-pointer`}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                /> */}

                <Image
                  src={image}
                  alt={`slide-${index}`}
                  className={`w-full] rounded-[5px] cursor-pointer`}
                  width={200}
                  height={200}
                  quality={80}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>

        {isHovered && templates?.thumbArray > 1 && (
          <p
            className="absolute bottom-[10px] w-[45px] flex justify-center left-[5px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
            style={{ transition: "0.5s all" }}
          >
            <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
            {templates?.thumbArray}
          </p>
        )}
        {/* <img
          src={templates?.template_thumb}
          alt={templates?.category_name}
          className={`w-full] rounded-[5px] cursor-pointer`}
          style={{
            border: "1px solid #80808082",
            height: "100%",
          }}
        /> */}

        <div className="pt-2">
          <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
            {templates?.template_name}
          </p>
          <p className="text-[#ABB2C7] text-[13px] pb-1">
            {templates?.category_name}
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const { params } = context;

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/getKeyTemplates/",
      {
        key: "qwfsegxdhbxfjhncf",
        key_name: params?.sKeyword,
        page: 1,
      }
    );
    let serverData = response?.data;
    let updatedLines;

    const formattedText = response?.data?.long_desc;
    const lines = formattedText?.split(/\n/g);

    const keyword = "wedding invitation template";
    if (lines && keyword) {
      const link = `
        <a href="https://www.craftyartapp.com/k/wedding-invitation-template" target="_blank" rel="noopener" style="text-decoration: none;  " class="text_linear">
          Wedding Invitation Template
        </a>
      `;
      const keywordRegExp = new RegExp(keyword, "gi");
      updatedLines = lines.map((line: any) =>
        line.replace(keywordRegExp, link)
      );
    }

    return {
      props: {
        serverData,
        updatedLines,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true,
    };
  }
}

export default function sKeyword({ serverData, updatedLines }: any) {
  console.log("serverData: ", updatedLines);
  const router = useRouter();
  const searchName: any = router?.query?.sKeyword;
  const formattedSearchName = searchName?.replace(/\s+/g, "-").toLowerCase();
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<any>();
  const [contentData, setContentData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadMore, setLoadMore] = useState<any>(true);
  const [isLastPage, setIsLastPage] = useState<any>();
  const [idName, setIdName] = useState<any>("");

  const tempIdValue = useSelector((state: any) => state.actions.tempId);

  useEffect(() => {
    setLoadMore(true);
    if (formattedSearchName) {
      axios
        .post(`/api/specialKeyword`, {
          key_name: formattedSearchName,
          page: page,
        })
        .then((res: any) => {
          const response = JSON.parse(decryptData(res?.data));

          setLoadMore(false);
          setIsLastPage(response?.current_page >= response?.total_page);

          setContentData(res?.data);

          if (response?.datas) {
            setIsLoading(false);

            setData((prevData: any) => [
              ...(prevData || []),
              ...response?.datas,
            ]);
          }

          if (response?.status === 500) {
            setIsLoading(false);
          }
        })
        .catch((err: any) => {});
    }
  }, [formattedSearchName, page]);

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
      {serverData?.datas && (
        <>
          <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px]">
            <Head>
              <title>{serverData?.meta_title}</title>
              <meta name="description" content={serverData?.meta_desc} />
            </Head>
            <Box className="pt-[15px]">
              <Breadcrumb
                data={[
                  { name: "Home", path: "/" },
                  { name: formattedSearchName, current: true },
                ]}
              />
            </Box>

            <Box
              sx={{
                background:
                  "url(https://assets.craftyart.in/w_assets/images/sKeywordBanner.png)",
                margin: "10px auto",
                width: "100%",
                overflow: "hidden",
                backgroundSize: "cover",
                py: "50px",
              }}
              className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] rounded-[8px] max-sm:py-[20px ]"
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  width: "100%",
                  fontWeight: "500",
                  lineHeight: "40px",
                }}
                className="text-center text-[25px] sm:text-[35px] "
                variant="h1"
              >
                {serverData?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#ffff",
                  width: "100%",
                  marginBottom: "10px",
                }}
                className="text-center max-sm:text-[15px] py-[10px] w-[95%] sm:w-[70%] mx-auto my-[10px]"
              >
                {serverData?.short_desc}
              </Typography>
            </Box>

            <Box sx={{ minHeight: `700px` }}>
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
                  padding: "40px 0 70px",
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

            <Box
              sx={{
                width: { xs: "98%", lg: "98%" },
                margin: "auto",
                padding: "20px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", lg: "30px" },

                  fontWeight: "600",
                  lineHeight: "30px",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
                variant="h2"
              >
                {serverData?.h2_tag}
              </Typography>

              <div>
                {updatedLines.map((line: any, index: number) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line }}
                    className="mb-3"
                  />
                ))}
              </div>
            </Box>
          </Box>
        </>
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
