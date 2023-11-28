import { calculateHeight } from "@/commonFunction/calculateHeight";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
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
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

export default function sKeyword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchName: any = router?.query?.sKeyword;
  const formattedSearchName = searchName?.replace(/\s+/g, "-").toLowerCase();
  const screenWidth = useScreenWidth();
  const id: any = router.query;
  const currentPathname = router.asPath;
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<any>();
  const [contentData, setContentData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [notFound, setNotFound] = useState<any>(false);
  const [loadMore, setLoadMore] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState<any>();
  const [description, setDescription] = useState<string[]>([]);

  const tempIdValue = useSelector((state: any) => state.actions.tempId);

  useEffect(() => {
    setLoadMore(true);
    if (formattedSearchName) {
      axios
        .post(`/api2/templates/api/getKeyTemplates/?page=${page}`, {
          key: "qwfsegxdhbxfjhncf",
          key_name: formattedSearchName,
        })
        .then((res: any) => {
          setLoadMore(false);
          setIsLastPage(res?.data?.current_page >= res?.data?.total_page);

          setContentData(res?.data);

          setNotFound(res?.data?.message !== "Loading Success!" ? true : false);

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
          setNotFound(true);
        });
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

  useEffect(() => {
    const formattedText = contentData?.long_desc;
    const lines = formattedText?.split(/\n/g);

    const keyword = "wedding invitation template";
    if (lines && keyword) {
      const link = `
        <a href="https://www.craftyartapp.com/k/wedding-invitation-template" target="_blank" rel="noopener" style="text-decoration: none;  " class="text_linear">
          Wedding Invitation Template
        </a>
      `;
      const keywordRegExp = new RegExp(keyword, "gi");
      const updatedLines = lines.map((line: any) =>
        line.replace(keywordRegExp, link)
      );
      setDescription(updatedLines);
    }
  }, [contentData]);

  return (
    <>
      {isLoading && <DashBoardSkelton />}
      {notFound && <NotFound />}

      <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px]">
        <Head>
          <title>{contentData?.meta_title}</title>
          <meta name="description" content={contentData?.meta_desc} />
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
            background: "url(/images/sKeywordBanner.png)",
            margin: "10px auto",
            width: "100%",
            overflow: "hidden",
            backgroundSize: "cover",
            py: "50px",
          }}
          className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] rounded-[8px]"
        >
          <Typography
            sx={{
              color: "#ffffff",
              width: "100%",
              fontWeight: "500",
              lineHeight: "40px",
            }}
            className="text-center text-[30px] sm:text-[35px] "
            variant="h1"
          >
            {contentData?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#ffff",
              width: "100%",
              marginBottom: "10px",
            }}
            className="text-center py-[10px] w-[95%] sm:w-[70%] mx-auto my-[10px]"
          >
            {contentData?.short_desc}
          </Typography>
        </Box>

        <StackGrid columnWidth={screenWidth / multiSizeFixSize} duration={0}>
          {data?.map((templates: any, index: number) => (
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
              id={`content${index}`}
            >
              <Link
                href={`/?templates=${templates.id_name}`}
                as={`/templates/p/${templates.id_name}`}
                scroll={false}
                shallow={true}
              >
                {templates.is_premium && (
                  <img
                    src="/icons/proIcon.svg"
                    alt=""
                    className="w-[28px] absolute right-[15px] top-[15px]"
                  />
                )}
                <div className="w-full h-full p-[8px]">
                  <img
                    src={templates?.template_thumb}
                    alt={templates?.category_name}
                    className={`w-full] rounded-[5px] cursor-pointer`}
                    style={{
                      border: "1px solid #80808082",
                      height: "100%",
                    }}
                  />

                  <div className="pt-2">
                    <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
                      {templates?.template_name}
                    </p>
                    <p className="text-[#ABB2C7] text-[13px] pb-1">
                      {templates?.category_name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </StackGrid>

        {/* <Box className=" flex items-center flex-wrap justify-center sm:justify-start">
          {data?.map((templates: any, index: number) => (
            <Box
              className={`${true && "p-[5px] bg-[bg-[#F4F7FE]] "}  `}
              style={{
                width: !isNotFix
                  ? `${100 / multiSizeFixSize}%`
                  : `${
                      (screenWidth -
                        (sideBarRedux && screenWidth > 1023
                          ? 300
                          : screenWidth > 630
                          ? 50
                          : 37)) /
                      multiSizeFixSize
                    }px`,
              }}
              id={`content${index}`}
            >
              <Box
                className={`cursor-pointer h-auto bg-white ${
                  !isNotFix ? "p-3" : "p-[7px]"
                } rounded-[12px]`}
                key={templates?.template_name}
                onClick={() => {
                  // const newPath = `/templates/p/${templates.id_name}`;
                  // window.history.pushState({}, "", newPath);
                  // dispatch(openTempModal(true));
                  dispatch(tempId(`content${index}`));
                  dispatch(modalClosePath(`templates/${id?.categoryId}`));
                }}
              >
                <Link
                  // href={{
                  //   pathname: `/templates/[${id?.categoryId}]?templates=[${templates.id_name}]`,
                  //   query: { templates: templates.id_name },
                  // }}
                  href={`/?templates=${templates.id_name}`}
                  as={`/templates/p/${templates.id_name}`}
                  scroll={false}
                  shallow={true}
                >
                  <Box
                    className={` ${
                      !isNotFix ? "bg-[#E6E8EE] p-2   " : "p-[0px]"
                    } rounded-[10px]`}
                    style={{
                      height: !isNotFix
                        ? `auto`
                        : `${
                            calculateHeight(
                              templates?.width,
                              templates?.height,
                              (screenWidth -
                                (sideBarRedux && screenWidth > 1023
                                  ? 300
                                  : 50)) /
                                multiSizeFixSize -
                                30
                            ) + 4
                          }px`,
                    }}
                  >
                    <div
                      className="bg-slate-200  w-full rounded-[4px] overflow-hidden"
                      style={{
                        height: !isNotFix
                          ? `${
                              calculateHeight(
                                500,
                                500,
                                (screenWidth -
                                  (sideBarRedux && screenWidth > 1023
                                    ? 300
                                    : 50)) /
                                  multiSizeFixSize -
                                  30
                              ) - (templates.height < 1919 ? 16 : 7)
                            }px`
                          : "100%",

                        display: templates.height < 1920 ? "flex" : "block",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={templates?.template_thumb}
                        alt={templates?.category_name}
                        className={` w-[auto] ${
                          !isNotFix ? " max-h-full" : ""
                        }  mx-auto rounded-[4px]`}
                      />
                    </div>
                  </Box>
                </Link>

                <Box
                  className="pt-2"
                  style={{
                    width: !isNotFix
                      ? "auto"
                      : `${
                          (screenWidth -
                            (sideBarRedux && screenWidth > 1023 ? 300 : 50)) /
                            multiSizeFixSize -
                          30
                        }px`,
                  }}
                >
                  <Typography className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
                    {templates?.template_name}
                  </Typography>
                  <Typography className="text-[#ABB2C7] text-[13px] pb-1">
                    {templates?.category_name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 0 70px",
          }}
        >
          {loadMore ? (
            <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
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
            {contentData?.h2_tag}
          </Typography>

          <div>
            {description.map((line, index) => (
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
  );
}
