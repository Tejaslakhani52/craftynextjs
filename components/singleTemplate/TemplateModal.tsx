import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import {
  modalClosePath,
  openTempModal,
} from "@/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";
import Link from "next/link";

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
      <img src={image} alt="" className="w-[20px]" />
      {text}
    </Typography>
  );
};

export default function TemplateModal({ open, setOpen, currentPathname }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query;
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [anotherData, setAnotherData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);
  const [template, setTemplate] = React.useState<any>({});
  const [templateOpen, setTemplateOpen] = useState<any>(false);
  const [anotherTempLoad, setAnotherTempLoad] = useState<any>(true);

  const openModal = useSelector((state: any) => state.actions.openTempModal);
  const modalClose = useSelector((state: any) => state.actions.modalClosePath);

  React?.useEffect(() => {
    setAnotherTempLoad(true);
    setAnotherData(false);
    setIsLoading(true);

    if (id?.templates && id?.templates !== "") {
      axios
        .post(
          "https://story.craftyartapp.com/my-posterPage",
          {
            key: "qwfsegxdhbxfjhncf",
            id_name: id?.templates,
          },
          { withCredentials: false }
        )
        .then((response: any) => {
          setIsLoading(false);
          const jsonString = response.data.substring(
            response.data.indexOf("{"),
            response.data.lastIndexOf("}") + 1
          );
          const getDatas = JSON.parse(jsonString);
          setTemplate(getDatas);

          setTimeout(() => {
            axios
              .post("https://story.craftyartapp.com/search-template", {
                key: "qwfsegxdhbxfjhncf",
                app_id: "1",
                cat_id: "-1",
                keywords: getDatas?.tags?.[0] as any,
                device: "0",
                refWidth: "1080",
                refHeight: "1080",
                page: 1,
                debug: "debug",
              })
              .then((response: any) => {
                const jsonString = response.data.substring(
                  response.data.indexOf("{"),
                  response.data.lastIndexOf("}") + 1
                );
                const getData = JSON.parse(jsonString);

                // if (getData && getData?.datas?.length > 0) {
                //   setAnotherData(getData);
                //   setAnotherTempLoad(false);
                // } else
                //   axios
                //     .post(`https://story.craftyartapp.com/get/datas`, {
                //       debug_key: "debug",
                //       cat_id: getDatas?.category_id_name as any,
                //       limit: 48,
                //       page: 1,
                //     })
                //     .then((res: any) => {
                //       setAnotherData(res?.data);
                //       setAnotherTempLoad(false);
                //     });

                setAnotherData(getData);
                setAnotherTempLoad(false);
              })
              .catch((error: any) => {
                console.log("error: ", error);
              });
          }, 100);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [id?.templates]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 7;
      case screenWidth > 1200:
        return 6;
      case screenWidth > 1023:
        return 5;
      case screenWidth > 700:
        return 4;
      case screenWidth > 600:
      case screenWidth > 550:
        return 3;
      default:
        return 3;
    }
  }, [screenWidth]);

  React.useEffect(() => {
    if (id?.templates) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [id]);

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
            width: "80%",
            mx: "auto",
            my: "20px",
            borderRadius: "5px",
          }}
        >
          <Link
            href={modalClose}
            scroll={false}
            shallow={true}
            className="fixed right-[8%] w-[30px]"
          >
            <img src="/icons/modalClose.svg" alt="" className="" />
          </Link>
          <DialogContent className="px-[40px]">
            <Box className="flex h-[450px]  my-[20px] gap-[50px]">
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
                <Box className="w-[66%] rounded-[4px] bg-[#F4F7FE] flex justify-center items-center">
                  <img
                    src={template?.url + template?.template_thumb}
                    alt=""
                    className="h-[430px] w-auto rounded-[4px]"
                    style={{ border: "1px solid #80808059" }}
                  />
                </Box>
              )}
              <Box className="w-[33%]">
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
                ) : (
                  <button
                    className="text-white w-full py-[10px] rounded-[6px]"
                    style={{
                      background:
                        "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                    }}
                  >
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
                          onClick={() => {
                            setAnotherData(false);
                            setTemplate(false);
                            setIsLoading(true);
                          }}
                        >
                          <Link
                            href={`/?templates=${templates.id_name}`}
                            as={`/templates/p/${templates.id_name}`}
                            scroll={false}
                            shallow={true}
                          >
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
                            </div>
                          </Link>
                        </div>
                      ))}
                  </StackGrid>
                </Box>
              )}
            </Box>
          </DialogContent>
        </Box>
      </Box>
    </Box>
  );
}
