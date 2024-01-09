import Icons from "@/assets";
import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import CustomHead from "@/components/common/CustomHead";
import TemplateModal, {
  IconsText,
} from "@/components/singleTemplate/TemplateModal";
import ShowPremiumDialog from "@/components/templatePayment/ShowPremiumDialog";
import { SingleTempType } from "@/interface/getSingleTempType";
import { SearchTempType } from "@/interface/searchTemplateType";
import { authCookiesGet, tokenGet, tokenSet } from "@/redux/action/AuthToken";
import { modalClosePath, tempId } from "@/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch } from "react-redux";
import StackGrid from "react-stack-grid";

export async function getServerSideProps(context: any) {
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

    const responseAnother = await axios.post(
      "https://story.craftyartapp.com/search-template",
      {
        key: "qwfsegxdhbxfjhncf",
        app_id: "1",
        cat_id: "-1",
        keywords: templateData?.tags?.[0] as any,
        device: "0",
        refWidth: "1080",
        refHeight: "1080",
        page: 1,
        debug: "debug",
      }
    );
    const jsonStringAnother = responseAnother.data.substring(
      responseAnother.data.indexOf("{"),
      responseAnother.data.lastIndexOf("}") + 1
    );
    const anotherData = JSON.parse(jsonStringAnother);

    return {
      props: {
        templateData,
        anotherData,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true,
    };
  }
}

interface serverProps {
  templateData: SingleTempType | any;
  anotherData: SearchTempType[] | any;
}

export default function templateId({ templateData, anotherData }: serverProps) {
  const containerId = `slider`;
  const screenHeight = useScreenHeight();
  const router = useRouter();
  const dispatch = useDispatch();
  const token = authCookiesGet();
  const userPremium = tokenGet("premium");
  const screenWidth = useScreenWidth();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [description, setDescription] = React.useState<string>("");
  const [notFound, setNotFound] = React.useState<boolean>(false);
  const [idName, setIdName] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [showPrevButton, setShowPrevButton] = React.useState(true);
  const [showNextButton, setShowNextButton] = React.useState(true);
  const [showImage, setShowImage] = React.useState<string>("");
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [showPremiumBox, setShowPremiumBox] = React.useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  React.useEffect(() => {
    setShowImage(templateData?.thumbArray?.[0]);
  }, [templateData]);

  var templateIds: any;
  if (typeof window !== "undefined" && !openModal) {
    const pathSegments = window.location.pathname.split("/");
    templateIds = pathSegments[pathSegments.length - 1];
  }

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.59;
      case screenWidth > 1200:
        return 6.49;
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
    window.scrollTo(0, 0);
  }, []);

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
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  React.useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerId]);

  const handleNextClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="px-[40px] max-sm:px-[10px] py-2">
      <CustomHead
        image={showImage}
        heading={templateData?.template_name}
        text={`Design with ${templateData?.template_name}: Ignite Your Imagination, Create Unique Art, and Inspire Awe. Start Design Crafting Today with Crafty Art!`}
      />

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
                  {imageLoaded ? (
                    <img
                      src={showImage}
                      alt={templateData?.template_name}
                      className="max-md:h-auto h-[430px] w-auto max-sm:w-auto max-sm:max-h-[400px] rounded-[4px]"
                      style={{ border: "1px solid #80808059" }}
                    />
                  ) : (
                    <div>Loading...</div>
                  )}

                  <img
                    onLoad={handleImageLoad}
                    src={showImage}
                    alt={templateData?.template_name}
                    style={{ display: "none" }}
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
                    id={containerId}
                  >
                    {showPrevButton && (
                      <Box>
                        <button
                          className="pre_button z-[1] left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex max-sm:hidden"
                          style={{ top: "52%" }}
                          onClick={handlePrevClick}
                        >
                          <Icons.leftArrowIcon svgProps={{ width: 8 }} />
                        </button>
                      </Box>
                    )}
                    {templateData?.thumbArray?.map(
                      (image: any, index: number) => (
                        <Box
                          key={index}
                          className="cursor-pointer rounded-[4px]"
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
                              className="h-auto rounded-[4px]"
                            />
                          </Box>
                        </Box>
                      )
                    )}
                    {showNextButton && (
                      <Box>
                        <button
                          className="next_button right-[-18px] flex max-sm:hidden"
                          style={{ top: "52%" }}
                          onClick={handleNextClick}
                        >
                          <Icons.rightArrowIcon svgProps={{ width: 8 }} />
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
                  {templateData?.is_premium && (
                    <span className="w-[22px] ml-[8px]">
                      <Icons.pricingIcon svgProps={{ width: 22, height: 21 }} />
                    </span>
                  )}
                  Customize this template
                </a>
              ) : (
                <Box>
                  <button
                    onClick={() => {
                      if (templateData?.is_premium && userPremium !== "true") {
                        setShowPremiumBox(true);
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
                    {templateData?.is_premium && (
                      <span className="w-[22px] ml-[8px]">
                        <Icons.pricingIcon
                          svgProps={{ width: 22, height: 21 }}
                        />
                      </span>
                    )}
                    Customize this template
                  </button>
                </Box>
              )}

              <div className="py-4">
                <IconsText
                  image={<Icons.tModalCustomizeIcon svgProps={{ width: 20 }} />}
                  text={`Customize ${templateData.category_name} with our online editing tool`}
                  isLoading={isLoading}
                />
                <IconsText
                  image={
                    <Icons.tModalSmartphoneIcon svgProps={{ width: 20 }} />
                  }
                  text="Edit and Download"
                  isLoading={isLoading}
                />
                <IconsText
                  image={<Icons.tModalPublishIcon svgProps={{ width: 20 }} />}
                  text="Share and publish anywhere"
                  isLoading={isLoading}
                />

                {templateData?.is_premium && (
                  <IconsText
                    image={<Icons.premiumIcon svgProps={{ width: 20 }} />}
                    text="This Template contains paid elements"
                    isLoading={isLoading}
                  />
                )}
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
                      <Link
                        href={`/templates/p/${templates.id_name}`}
                        onClick={(e) => e.preventDefault()}
                      >
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
                            dispatch(tempId(`content${index}`));
                            dispatch(
                              modalClosePath(`templates/p/${templateIds}`)
                            );
                          }}
                        >
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
                              <span className="w-[28px] absolute right-[13px] top-[13px] z-[1]">
                                <Icons.proIcon svgProps={{ width: 28 }} />
                              </span>
                            )}

                            <Image
                              src={templates?.template_thumb}
                              alt={templates?.category_name}
                              className={`w-full] rounded-[5px] cursor-pointer opacity-0`}
                              style={{
                                border: "1px solid #80808082",
                                height: "100%",
                                transition: "0.5s all",
                              }}
                              width={200}
                              height={200}
                              quality={60}
                              priority={true}
                              onLoadingComplete={(image) =>
                                image.classList.remove("opacity-0")
                              }
                            />
                          </div>
                        </div>
                      </Link>
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
        </>
      )}

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />

      <ShowPremiumDialog
        open={showPremiumBox}
        setOpen={setShowPremiumBox}
        tempData={{
          id: templateData.string_id,
          type: 0,
          usdAmount: templateData.usdAmount,
          usdVal: templateData.usdVal,
          inrAmount: templateData.inrAmount,
          inrVal: templateData.inrVal,
        }}
        amountProps={{
          usdAmount: templateData.usdAmount,
          usdVal: templateData.usdVal,
          inrAmount: templateData.inrAmount,
          inrVal: templateData.inrVal,
        }}
      />
    </Box>
  );
}
