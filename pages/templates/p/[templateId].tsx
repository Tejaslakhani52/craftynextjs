import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import TemplateModal, {
  IconsText,
} from "@/components/singleTemplate/TemplateModal";
import { authCookiesGet, tokenGet, tokenSet } from "@/redux/action/AuthToken";
import {
  modalClosePath,
  openSidebar,
  openTempModal,
  tempId,
} from "@/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

export async function getStaticPaths() {
  const response = await axios.post<any>(
    "https://story.craftyartapp.com/get/datas",
    {
      debug_key: "debug",
      limit: 10000,
      cat_id: "latest",
      page: 1,
    }
  );

  const templateIds = response?.data?.datas.map((template: any) => ({
    params: { templateId: template?.id_name } as any,
  }));

  return {
    paths: templateIds,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  try {
    const { params } = context;

    const response = await axios.post(
      "https://story.craftyartapp.com/my-posterPage",
      {
        key: "qwfsegxdhbxfjhncf",
        id_name: params?.templateId,
      },
      { withCredentials: false }
    );
    const jsonString = response.data.substring(
      response.data.indexOf("{"),
      response.data.lastIndexOf("}") + 1
    );

    const templateData = JSON.parse(jsonString);

    return {
      props: {
        templateData,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true,
    };
  }
}

export default function templateId({ templateData }: any) {
  console.log("templateData: ", templateData);
  const screenHeight = useScreenHeight();
  const router = useRouter();
  const dispatch = useDispatch();
  const token = authCookiesGet();
  const userPremium = tokenGet("premium");
  const currentPathname = router.query;
  console.log("currentPathname: ", currentPathname);
  const screenWidth = useScreenWidth();
  const [anotherData, setAnotherData] = React.useState<any>([]);
  console.log("anotherData: ", anotherData);
  const [isLoading, setIsLoading] = React.useState<any>(false);
  const [template, setTemplate] = React.useState<any>({});
  console.log("template: ", templateData);
  // const openModal = useSelector((state: any) => state.actions.openTempModal);
  const tempIdValue = useSelector((state: any) => state.actions.tempId);
  const [description, setDescription] = React.useState<string>("");
  const [notFound, setNotFound] = React.useState<any>(false);
  const [idName, setIdName] = React.useState<any>("");
  const [openModal, setOpenModal] = React.useState<any>("");
  const [showPrevButton, setShowPrevButton] = React.useState(true);
  const [showNextButton, setShowNextButton] = React.useState(true);

  const [showImage, setShowImage] = React.useState<any>();

  React.useEffect(() => {
    setShowImage(templateData?.thumbArray?.[0]);
  }, [templateData]);

  var templateIds: any;
  if (typeof window !== "undefined" && !openModal) {
    const pathSegments = window.location.pathname.split("/");
    templateIds = pathSegments[pathSegments.length - 1];
  }
  console.log("templateIds: ", templateIds);

  // const fetchPosterData = (templateIds: any) => {
  //   if (templateIds) {
  //     axios
  //       .post("/api/getSingleTemplate", {
  //         id_name: templateIds,
  //       })
  //       .then((response: any) => {
  //         const jsonString = response.data.substring(
  //           response.data.indexOf("{"),
  //           response.data.lastIndexOf("}") + 1
  //         );
  //         const getData = JSON.parse(jsonString);
  //         setTemplate(getData);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setNotFound(true);
  //         setIsLoading(false);
  //         console.log("error: ", error);
  //       });
  //   }
  // };

  const fetchSearchData = () => {
    axios
      .post("/api/searchTemplate", {
        keywords: templateData?.tags?.[0] as any,
        page: 1,
      })
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setAnotherData(getData);
      })
      .catch((error: any) => {
        console.log("error: ", error);
        // fetchPosterData(currentPathname?.templateId);
      });
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     fetchPosterData(currentPathname?.templateId);
  //   }, 100);
  // }, [currentPathname?.templateId]);

  React.useEffect(() => {
    // setIsLoading(true);
    fetchSearchData();
  }, [templateData]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.49;
      case screenWidth > 1200:
        return 5.49;
      case screenWidth > 1023:
        return 5.49;
      case screenWidth > 700:
        return 4.49;
      case screenWidth > 550:
        return 3.35;
      default:
        return 2.22;
    }
  }, [screenWidth]);

  React.useEffect(() => {
    const element: any = document.getElementById(tempIdValue);
    element?.scrollIntoView();
  }, [anotherData]);

  React.useEffect(() => {
    const formattedText = templateData?.description
      ?.replace(/\r\n\r\n/g, "\n\n")
      ?.replace(/\r\n/g, "\n");
    setDescription(formattedText);
  }, [templateData]);

  React.useEffect(() => {
    tokenSet("navigate", ``);
  }, []);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    console.log("container: ", container.scrollLeft);
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  React.useEffect(() => {
    const container = document.getElementById("carousel-slide-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNextClick = () => {
    const container = document.getElementById(
      "carousel-slide-container"
    ) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(
      "carousel-slide-container"
    ) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="px-[40px] max-sm:px-[10px] py-2">
      <Head>
        <title>{templateData?.template_name}</title>
        <meta
          content="description"
          name={`Design with ${templateData?.template_name}: Ignite Your Imagination, Create Unique Art, and Inspire Awe. Start Design Crafting Today with Crafty Art!`}
        />
      </Head>

      {notFound ? (
        <div
          className="flex justify-center items-center w-full"
          style={{ height: `${screenHeight - 230}px` }}
        >
          <img
            src="/images/NoDataFound.svg"
            alt="NoDataFound"
            className="w-[250px]"
          />
        </div>
      ) : (
        <>
          <Box className="flex  my-[20px] gap-[50px] max-2md:flex-col max-2md:h-auto">
            {isLoading ? (
              <>
                <Skeleton
                  variant="rectangular"
                  width={"66%"}
                  height={`100%`}
                  style={{
                    borderRadius: `5px`,
                  }}
                />
              </>
            ) : (
              <Box className="w-[66%]  max-sm:w-full">
                <Box className="rounded-[4px] h-[450px]  bg-[#F4F7FE] flex justify-center items-center">
                  <img
                    src={showImage}
                    alt={templateData?.template_name}
                    className="max-md:h-auto h-[430px] w-auto max-sm:w-auto max-sm:max-h-[400px] rounded-[4px]"
                    style={{ border: "1px solid #80808059" }}
                  />
                </Box>

                <Box
                  className=" relative "
                  sx={{
                    display:
                      templateData?.thumbArray?.length > 1 ? "block" : "none",
                  }}
                >
                  <Box
                    className="flex items-center overflow-auto py-[20px] scroll_none gap-[15px] max-sm:gap-[10px] "
                    id={"carousel-slide-container"}
                  >
                    {showPrevButton && (
                      <Box>
                        <button
                          onClick={handlePrevClick}
                          className="pre_button z-[1] left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex max-sm:hidden"
                          style={{ top: "52%" }}
                        >
                          <img
                            src="/icons/leftArrow.svg"
                            alt="leftArrow"
                            className="w-[8px]"
                          />
                        </button>
                      </Box>
                    )}
                    {templateData?.thumbArray?.map((image: any) => (
                      <Box
                        className="cursor-pointer p-[1px]"
                        sx={{
                          border:
                            showImage === image
                              ? "2px solid #2ec6b8"
                              : "2px solid #ffff",
                        }}
                        onClick={() => setShowImage(image)}
                      >
                        <Box className="w-[100px]">
                          <img
                            src={image}
                            alt={templateData?.template_name}
                            className="h-auto"
                          />
                        </Box>
                      </Box>
                    ))}
                    {showNextButton && (
                      <Box>
                        <button
                          onClick={handleNextClick}
                          className="next_button right-[-18px] flex max-sm:hidden"
                          style={{ top: "52%" }}
                        >
                          <img
                            src="/icons/rightArrow.svg"
                            alt="rightArrow"
                            className="w-[8px]"
                          />
                        </button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
            <Box className="w-[33%] max-2md:w-full">
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={`20px`}
                  style={{
                    borderRadius: `30px`,
                  }}
                />
              ) : (
                <h1 className="text-[#1C3048] text-[24px] font-[500] mb-3">
                  {templateData?.template_name}
                </h1>
              )}

              <Typography className="text-[#ABB2C7] text-[15px] mb-4">
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"35%"}
                    height={`20px`}
                    style={{
                      borderRadius: `30px`,
                      margin: "10px 0",
                    }}
                  />
                ) : (
                  templateData?.category_size
                )}
              </Typography>

              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={`40px`}
                  style={{
                    borderRadius: `4px`,
                    margin: "10px 0",
                  }}
                />
              ) : !token ? (
                <a
                  className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                  style={{
                    background:
                      "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                  }}
                  onClick={() => {
                    tokenSet(
                      "navigate",
                      `/templates/p/${templateData?.id_name}`
                    );
                    router.push("/login");
                  }}
                >
                  <img
                    src="/icons/pricing.svg"
                    alt={templateData?.template_name}
                    className="w-[22px] ml-[8px]"
                    style={{
                      display: templateData?.is_premium ? "block" : "none",
                    }}
                  />
                  Customize this template
                </a>
              ) : (
                <button
                  onClick={() => {
                    if (templateData?.is_premium && userPremium !== "true") {
                      dispatch(openSidebar(false));
                      router.push("/plans");
                    } else
                      window.open(
                        `https://editor.craftyartapp.com/${templateData?.id_name}`
                      );
                  }}
                  className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                  style={{
                    background:
                      "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                  }}
                >
                  <img
                    src="/icons/pricing.svg"
                    alt={templateData?.template_name}
                    className="w-[22px] ml-[8px]"
                    style={{
                      display: templateData?.is_premium ? "block" : "none",
                    }}
                  />
                  Customize this template
                </button>
              )}

              <div className="py-4">
                <IconsText
                  image="/icons/TmodalCustomize.svg"
                  text="100% Customize with online editing tools"
                  isLoading={isLoading}
                />
                <IconsText
                  image="/icons/TmodalSmartphone.svg"
                  text="Edit and download on the go"
                  isLoading={isLoading}
                />
                <IconsText
                  image="/icons/TmodalPublish.svg"
                  text="Share and publish anywhere"
                  isLoading={isLoading}
                />
                <IconsText
                  image="/icons/TmodalBacked.svg"
                  text="Backed by our happiness Guarantee"
                  isLoading={isLoading}
                />

                <IconsText
                  image="/icons/TmodalAccess.svg"
                  text="Access 10,000+ all inclusive templates"
                  isLoading={isLoading}
                />
              </div>
            </Box>
          </Box>

          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width={"40%"}
              height={`20px`}
              style={{
                borderRadius: `30px`,
                margin: "40px 0 30px",
              }}
            />
          ) : (
            <h2 className="text-[#1C3048] text-[23px] font-[500] pt-4 my-3">
              Templates with the same style and concept
            </h2>
          )}

          <Box>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={`500px`}
                style={{
                  borderRadius: `4px`,
                  margin: "10px 0",
                }}
              />
            ) : (
              <Box sx={{ minHeight: "500px" }}>
                <StackGrid
                  columnWidth={screenWidth / multiSizeFixSize}
                  duration={0}
                >
                  {anotherData?.datas
                    ?.filter(
                      (t: any) => t.template_id !== templateData?.template_id
                    )
                    ?.map((templates: any, index: number) => (
                      <div
                        className=""
                        style={{
                          height: `${calculateHeight(
                            templates?.width,
                            templates?.height,
                            screenWidth / multiSizeFixSize
                          )}px`,
                          width: `${screenWidth / multiSizeFixSize}px`,
                        }}
                        id={`content${index}`}
                        onClick={() => {
                          // const newPath = `/templates/p/${templates.id_name}`;
                          // window.history.pushState({}, "", newPath);
                          // dispatch(openTempModal(true));

                          dispatch(tempId(`content${index}`));
                          dispatch(
                            modalClosePath(`templates/p/${templateIds}`)
                          );
                        }}
                      >
                        {/* <Link
                          href={`/?templates=${templates.id_name}`}
                          as={`/templates/p/${templates.id_name}`}
                          scroll={false}
                          shallow={true}
                        > */}
                        <div
                          className="w-full h-full p-[8px] relative"
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
                            <img
                              src="/icons/proIcon.svg"
                              alt={templateData?.template_name}
                              className="w-[28px] absolute right-[13px] top-[13px] z-[1]"
                            />
                          )}
                          <img
                            src={templates?.template_thumb}
                            alt={templates?.category_name}
                            className={`w-full] rounded-[5px] cursor-pointer`}
                            style={{
                              border: "1px solid #80808082",
                              height: "100%",
                            }}
                          />
                        </div>
                        {/* </Link> */}
                      </div>
                    ))}
                </StackGrid>
                <Box className="my-[50px] w-[100%] mx-auto">
                  <h2 className="text-[23px] text-[#1C3048] font-medium mb-3">
                    {templateData?.h2_tag}
                  </h2>

                  <Typography className="text-[15px] whitespace-pre-line		">
                    {templateData?.description}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          {/* <h1 className="text-[#1C3048] text-[24px] font-[500] mb-3">
            {templateData?.template_name}
          </h1> */}
        </>
      )}

      {/* <TemplateModal
        open={openModal}
        currentPathname={`/templates/p/${currentPathname?.templateId}`}
      /> */}

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </Box>
  );
}
