import { decryptData } from "@/aes-crypto";
import Icons from "@/assets";
import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { SingleTempType } from "@/interface/getSingleTempType";
import { DataType, SearchTempType } from "@/interface/searchTemplateType";
import { authCookiesGet, tokenGet, tokenSet } from "@/redux/action/AuthToken";
import { Box, Skeleton, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import ShowPremiumDialog from "../templatePayment/ShowPremiumDialog";

export const IconsText = ({ image, text, isLoading }: any) => {
  return isLoading ? (
    <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
      <Skeleton
        variant="rectangular"
        width={"30px"}
        height={`30px`}
        style={{
          borderRadius: `5px`,
        }}
      />

      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={`10px`}
        style={{
          borderRadius: `5px`,
        }}
      />
    </Typography>
  ) : (
    <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
      {image}
      {text}
    </Typography>
  );
};

export default function TemplateModal({ open, setOpen, id, setId }: any) {
  const router = useRouter();
  const userPremium = tokenGet("premium");
  const token = authCookiesGet();
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [anotherData, setAnotherData] = React.useState<SearchTempType[] | any>(
    []
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [template, setTemplate] = React.useState<SingleTempType | any>({});
  const [anotherTempLoad, setAnotherTempLoad] = useState<boolean>(true);
  const [showImage, setShowImage] = useState<string>("");
  const [showPremiumBox, setShowPremiumBox] = useState<boolean>(false);

  React.useEffect(() => {
    setShowImage(template?.thumbArray?.[0]);
  }, [template]);

  useEffect(() => {
    setAnotherTempLoad(true);
    setAnotherData([]);
    setIsLoading(true);

    if (id) {
      axios
        .post("/api/get/getSingleTemplate", {
          id_name: id,
        })
        .then((res) => {
          const response1 = JSON.parse(decryptData(res?.data));

          const jsonString1 = response1.substring(
            response1.indexOf("{"),
            response1.lastIndexOf("}") + 1
          );
          const getData = JSON.parse(jsonString1);

          setIsLoading(false);
          setTemplate(getData);

          axios
            .post("/api/search/templates", {
              keywords: getData?.tags?.[0],
              page: 1,
            })
            .then((res) => {
              const res2: any = JSON.parse(decryptData(res?.data));

              const jsonString2 = res2.substring(
                res2.indexOf("{"),
                res2.lastIndexOf("}") + 1
              );
              const getData2 = JSON.parse(jsonString2);

              setAnotherData(getData2);
              setAnotherTempLoad(false);
            });
        })
        .catch((error) => {
          axios
            .post("/api/get/getSingleTemplate", {
              id_name: id,
            })
            .then((res) => {
              const response1 = JSON.parse(decryptData(res?.data));

              const jsonString1 = response1.substring(
                response1.indexOf("{"),
                response1.lastIndexOf("}") + 1
              );
              const getData = JSON.parse(jsonString1);

              setIsLoading(false);
              setTemplate(getData);

              axios
                .post("/api/search/templates", {
                  keywords: getData?.tags?.[0],
                  page: 1,
                })
                .then((res) => {
                  const res2: any = JSON.parse(decryptData(res?.data));

                  const jsonString2 = res2.substring(
                    res2.indexOf("{"),
                    res2.lastIndexOf("}") + 1
                  );
                  const getData2 = JSON.parse(jsonString2);

                  setAnotherData(getData2);
                  setAnotherTempLoad(false);
                });
            });
        });
    }
  }, [id]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.92;
      case screenWidth > 1200:
        return 6.92;
      case screenWidth > 1023:
        return 6.92;
      case screenWidth > 700:
        return 4.92;
      case screenWidth > 600:
      case screenWidth > 550:
        return 2.35;
      default:
        return 2.35;
    }
  }, [screenWidth]);

  React.useEffect(() => {
    if (id) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [open]);

  const scrollContainerRef: any = React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isLoading, template]);

  return (
    <Box
      className="fixed top-0 bottom-0 left-0 right-0 z-[1000]"
      style={{
        backgroundColor: "#1c3048ba",
        visibility: open ? "visible" : "hidden",
      }}
    >
      <Box
        className="overflow-auto"
        ref={scrollContainerRef}
        sx={{
          height: `${screenHeight}px`,
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            background: "white",
            width: { xs: "100%", lg: "80%" },
            mx: "auto",
            borderRadius: "5px",
          }}
          className="my-[20px] max-sm:my-[0]"
        >
          <>
            <button
              className="fixed  z-[100] right-[8%] max-muiLG:right-[3%] max-muiLG:top-[3%] bg-white w-[30px] h-[30px] max-sm:w-[35px] max-sm:top-[2%] max-sm:right-[3%] p-[5px] rounded-[50%] max-muiLG:bg-[aliceblue] "
              onClick={() => {
                setId("");
                setTemplate({});
                setAnotherData([]);
                setOpen(false);
                window.history.replaceState({}, "", `${router.asPath}`);
              }}
            >
              <Icons.modalCloseIcon svgProps={{ width: 20 }} />
            </button>
          </>
          <DialogContent className="px-[40px] max-sm:px-[20px]">
            <Box className="flex my-[20px] gap-[50px] max-2md:flex-col max-2md:h-auto">
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
                      alt={template?.template_name}
                      className="max-md:h-auto h-[430px] w-auto max-sm:w-auto max-sm:max-h-[400px] rounded-[4px]"
                      style={{ border: "1px solid #80808059" }}
                    />
                  </Box>

                  <Box
                    className="relative"
                    sx={{
                      display:
                        template?.thumbArray?.length > 1 ? "block" : "none",
                    }}
                  >
                    <Box className="flex items-center justify-center overflow-auto py-[20px] scroll_none   ">
                      {template?.thumbArray?.map(
                        (image: string, index: number) => (
                          <Box
                            key={index}
                            className="cursor-pointer p-[1px] mx-[5px] rounded-[5px]"
                            sx={{
                              border:
                                showImage === image
                                  ? "2px solid #2ec6b8"
                                  : "2px solid #ffff",
                            }}
                            onClick={() => setShowImage(image)}
                          >
                            <Box className="w-[60px] rounded-[5px]">
                              <img
                                src={image}
                                alt={template?.template_name}
                                className="h-auto rounded-[5px]"
                              />
                            </Box>
                          </Box>
                        )
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
                    {template?.template_name}
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
                    template?.category_size
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
                  <Box>
                    <a
                      className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                      style={{
                        background:
                          "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                      }}
                      onClick={() => {
                        tokenSet(
                          "navigate",
                          `/templates/p/${template?.id_name}`
                        );
                        router.push("/login");
                      }}
                    >
                      {template?.is_premium && (
                        <span className="w-[22px] ml-[8px]">
                          <Icons.pricingIcon
                            svgProps={{ width: 22, height: 21 }}
                          />
                        </span>
                      )}
                      Customize this template
                    </a>
                  </Box>
                ) : (
                  <Box>
                    <button
                      onClick={() => {
                        if (true) {
                          setShowPremiumBox(true);
                        } else
                          window.open(
                            `https://editor.craftyartapp.com/${template?.id_name}`
                          );
                      }}
                      className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                      style={{
                        background:
                          "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                      }}
                    >
                      {template?.is_premium && (
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
                    image={
                      <Icons.tModalCustomizeIcon svgProps={{ width: 20 }} />
                    }
                    text={`Customize ${template.category_name} with our online editing tool`}
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

                  {template?.is_premium && (
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
              {anotherTempLoad ? (
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
                  <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
                    {anotherData?.datas
                      ?.filter(
                        (t: any) => t.template_id !== template?.template_id
                      )
                      ?.map((templates: DataType, index: number) => (
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
                            onClick={() => {
                              window.history.replaceState(
                                {},
                                "",
                                `/templates/p/${templates?.id_name}`
                              );
                              setId("");
                              setTemplate({});
                              setAnotherData([]);
                              setIsLoading(true);
                              setId(templates?.id_name);
                            }}
                          >
                            <div className="w-full h-full p-[8px] relative">
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
                                quality={80}
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
                </Box>
              )}
            </Box>
          </DialogContent>
        </Box>
      </Box>
      {open && (
        <ShowPremiumDialog
          open={showPremiumBox}
          setOpen={setShowPremiumBox}
          tempData={{
            id: template.string_id,
            type: 0,
            usdAmount: template.usdAmount,
            usdVal: template.usdVal,
            inrAmount: template.inrAmount,
            inrVal: template.inrVal,
          }}
          amountProps={{
            usdAmount: template.usdAmount,
            usdVal: template.usdVal,
            inrAmount: template.inrAmount,
            inrVal: template.inrVal,
          }}
        />
      )}
    </Box>
  );
}
