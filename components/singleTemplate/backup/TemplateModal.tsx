import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import Skelton from "@/components/common/Skelton";
import { getAllTemplatesDataType, getTemplateDataType } from "@/pages/api/type";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TemplatesSkelton from "./TemplatesSkelton";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { templatesData } from "@/redux/reducer/AuthDataReducer";
import TemplateModal from "@/components/singleTemplate/TemplateModal";

export const TemplatesBoxes = ({ item, openModal, setOpenModal }: any) => {
  const router = useRouter();
  const uniqueCat =
    item?.category_name === "Latest" ||
    item?.category_name === "Trending" ||
    item?.category_name === "Invitation";
  console.log("item: ", item);
  const containerId = `carousel-slide-container-${item.category_id}`;
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
    <Box className="relative ">
      <Box className="flex items-center justify-between pt-8 pb-4">
        <Typography className="text-black font-semibold text-[22px]">
          {item?.category_name}
        </Typography>
        <Button
          className="normal-case"
          onClick={() => router.push(`/templates/${item?.id_name}`)}
        >
          <span className="text-[#2EC6B8] font-semibold text-[16px] flex items-center">
            See all
          </span>
          <img
            src={"./icons/rightActiveArrow.svg"}
            alt="rightActiveArrow"
            className="w-[7px] inline-block ml-3"
          />
        </Button>
      </Box>
      <Box
        className="flex items-center overflow-auto scroll_none gap-[15px] "
        id={containerId}
      >
        {showPrevButton && (
          <button
            onClick={handlePrevClick}
            className="pre_botton left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex"
            style={{ top: "52%" }}
          >
            <img
              src="./icons/leftArrow.svg"
              alt="leftArrow"
              className="w-[8px]"
            />
          </button>
        )}
        {item?.template_model?.map((templates: any) => (
          <>
            <Box
              className={` h-auto bg-white cursor-pointer ${
                uniqueCat ? "p-3 min-w-[250px]" : "p-[7px]"
              } rounded-[12px]`}
              key={templates?.template_name}
              onClick={() => {
                const newPath = `/templates/p/${templates.id_name}`;
                window.history.pushState({}, "", newPath);
                setOpenModal(true);
              }}
            >
              <Box
                className={` ${
                  uniqueCat ? "bg-[#E6E8EE] p-2 h-[165px]" : "p-[0px]"
                } rounded-[10px]`}
                style={{
                  height: uniqueCat
                    ? "auto"
                    : `${calculateHeight(
                        templates?.width,
                        templates?.height,
                        200
                      )}px`,
                  width: uniqueCat ? "auto" : "200px",
                }}
              >
                <div className="bg-slate-200 w-full h-full rounded-[4px]">
                  <img
                    src={templates?.template_thumb}
                    alt={templates?.category_name}
                    className={` w-[auto] ${
                      uniqueCat ? "h-[100%]" : ""
                    }  mx-auto rounded-[4px]`}
                  />
                </div>
              </Box>

              <Box
                className="pt-2"
                style={{
                  width: uniqueCat ? "auto" : "200px",
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
          </>
        ))}
        {showNextButton && (
          <button
            onClick={handleNextClick}
            className="next_botton right-[-18px] flex "
            style={{ top: "52%" }}
          >
            <img
              src="./icons/rightArrow.svg"
              alt="rightArrow"
              className="w-[8px]"
            />
          </button>
        )}
      </Box>
    </Box>
  );
};

export default function TemplatesBox() {
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const [data, setData] = useState<getAllTemplatesDataType | null>(null);

  const data = useSelector((state: any) => state.auth.templatesData);

  useEffect(() => {
    axios
      .post(`/api/get/main/data`, {
        key: `qwfsegxdhbxfjhncf`,
        page: 1,
        count: 0,
      })
      .then((res: any) => {
        console.log("res: ", res);
        // setData(res?.data?.datas);
        dispatch(templatesData(res?.data?.datas));
      })
      .catch((err: any) => consoleShow("err", err));
  }, []);

  return (
    <Box className="px-[20px] pb-10">
      {data?.length > 0
        ? data?.map((item: any) => (
            <TemplatesBoxes
              item={item}
              key={item?.id}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))
        : true && <TemplatesSkelton />}

      <TemplateModal
        open={openModal}
        setOpen={setOpenModal}
        currentPathname={`/`}
      />
    </Box>
  );
}

import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import Skelton from "@/components/common/Skelton";
import { getAllTemplatesDataType, getTemplateDataType } from "@/pages/api/type";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TemplatesSkelton from "./TemplatesSkelton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { templatesData } from "@/redux/reducer/AuthDataReducer";
import TemplateModal from "@/components/singleTemplate/TemplateModal";

export const TemplatesBoxes = ({ item, openModal, setOpenModal }: any) => {
  const router = useRouter();
  const uniqueCat =
    item?.category_name === "Latest" ||
    item?.category_name === "Trending" ||
    item?.category_name === "Invitation";
  console.log("item: ", item);
  const containerId = `carousel-slide-container-${item.category_id}`;
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
    <Box className="relative ">
      <Box className="flex items-center justify-between pt-8 pb-4">
        <Typography className="text-black font-semibold text-[22px]">
          {item?.category_name}
        </Typography>
        <Button
          className="normal-case"
          onClick={() => router.push(`/templates/${item?.id_name}`)}
        >
          <span className="text-[#2EC6B8] font-semibold text-[16px] flex items-center">
            See all
          </span>
          <img
            src={"./icons/rightActiveArrow.svg"}
            alt="rightActiveArrow"
            className="w-[7px] inline-block ml-3"
          />
        </Button>
      </Box>
      <Box
        className="flex items-center overflow-auto scroll_none gap-[15px] "
        id={containerId}
      >
        {showPrevButton && (
          <button
            onClick={handlePrevClick}
            className="pre_botton left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex"
            style={{ top: "52%" }}
          >
            <img
              src="./icons/leftArrow.svg"
              alt="leftArrow"
              className="w-[8px]"
            />
          </button>
        )}
        {item?.template_model?.map((templates: any) => (
          <>
            <Box
              // href={`/?templates=${templates.id_name}`}
              // as={`/templates/p/${templates.id_name}`}
              className={`h-auto bg-white cursor-pointer ${
                uniqueCat ? "p-3 min-w-[250px]" : "p-[7px]"
              } rounded-[12px]`}
              key={templates?.template_name}
              onClick={() => {
                const newPath = `/templates/p/${templates.id_name}`;
                router.push(newPath, undefined, { q: true });
                setOpenModal(true);
              }}
            >
              <Box
                className={` ${
                  uniqueCat ? "bg-[#E6E8EE] p-2 h-[165px]" : "p-[0px]"
                } rounded-[10px]`}
                style={{
                  height: uniqueCat
                    ? "auto"
                    : `${calculateHeight(
                        templates?.width,
                        templates?.height,
                        200
                      )}px`,
                  width: uniqueCat ? "auto" : "200px",
                }}
              >
                <div className="bg-slate-200 w-full h-full rounded-[4px]">
                  <img
                    src={templates?.template_thumb}
                    alt={templates?.category_name}
                    className={` w-[auto] ${
                      uniqueCat ? "h-[100%]" : ""
                    }  mx-auto rounded-[4px]`}
                  />
                </div>
              </Box>

              <Box
                className="pt-2"
                style={{
                  width: uniqueCat ? "auto" : "200px",
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
          </>
        ))}
        {showNextButton && (
          <button
            onClick={handleNextClick}
            className="next_botton right-[-18px] flex "
            style={{ top: "52%" }}
          >
            <img
              src="./icons/rightArrow.svg"
              alt="rightArrow"
              className="w-[8px]"
            />
          </button>
        )}
      </Box>
    </Box>
  );
};

export default function TemplatesBox() {
  const router = useRouter();
  const id = router.query.templates;
  console.log("idsadcsacsa: ", id);
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const [data, setData] = useState<getAllTemplatesDataType | null>(null);

  const data = useSelector((state: any) => state.auth.templatesData);

  useEffect(() => {
    axios
      .post(`/api/get/main/data`, {
        key: `qwfsegxdhbxfjhncf`,
        page: 1,
        count: 0,
      })
      .then((res: any) => {
        console.log("res: ", res);
        // setData(res?.data?.datas);
        dispatch(templatesData(res?.data?.datas));
      })
      .catch((err: any) => consoleShow("err", err));
  }, []);

  return (
    <Box className="px-[20px] pb-10">
      {data?.length > 0
        ? data?.map((item: any) => (
            <TemplatesBoxes
              item={item}
              key={item?.id}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))
        : true && <TemplatesSkelton />}

      <TemplateModal open={id} setOpen={setOpenModal} currentPathname={`/`} />
    </Box>
  );
}

import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { openTempModal } from "@/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

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
  console.log("idscsdcsdcs: ", id);
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [anotherData, setAnotherData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);
  const [template, setTemplate] = React.useState<any>({});
  const targetDivRef: any = React.useRef(null);

  const openModal = useSelector((state: any) => state.actions.openTempModal);

  var pathSegments;
  var templateId: any;
  if (typeof window !== "undefined" && openModal) {
    pathSegments = window.location.pathname.split("/");
    templateId = pathSegments[pathSegments.length - 1];
  }

  React?.useEffect(() => {
    if (!templateId || templateId == "latest") {
      dispatch(openTempModal(false));
    }
  }, [templateId]);

  const fetchPosterData = (templateId: any) => {
    if (templateId) {
      axios
        .post(
          "https://story.craftyartapp.com/my-posterPage",
          {
            key: "qwfsegxdhbxfjhncf",
            id_name: templateId,
          },
          { withCredentials: false }
        )
        .then((response: any) => {
          const jsonString = response.data.substring(
            response.data.indexOf("{"),
            response.data.lastIndexOf("}") + 1
          );
          const getData = JSON.parse(jsonString);
          console.log("getData: ", getData);

          setTemplate(getData);
        })
        .catch((error) => {});
    }
  };

  const fetchSearchData = () => {
    if (template?.tags) {
      axios
        .post("https://story.craftyartapp.com/search-template", {
          key: "qwfsegxdhbxfjhncf",
          app_id: "1",
          cat_id: "-1",
          keywords: template?.tags?.[0] as any,
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
          console.log("assaqsa: ", getData);

          if (getData > 0) {
            setAnotherData(getData);
            setIsLoading(false);
          } else
            axios
              .post(`https://story.craftyartapp.com/get/datas`, {
                debug_key: "debug",
                cat_id: template?.category_id_name as any,
                limit: 48,
                page: 1,
              })
              .then((res: any) => {
                setAnotherData(res?.data);
                setIsLoading(false);
              });
        })
        .catch((error: any) => {
          console.log("error: ", error);
        });
    }
  };

  const handleChangeTemp = (template: any) => {
    setIsLoading(true);
    if (targetDivRef.current) {
      targetDivRef.current.scrollTop = 0;
    }
    const newPath = `/templates/p/${template.id_name}`;
    window.history.pushState({}, "", newPath);
    if (typeof window !== "undefined") {
      const pathSegments = window.location.pathname.split("/");
      const templateId = pathSegments[pathSegments.length - 1];

      setTimeout(() => {
        fetchPosterData(templateId);
      }, 100);
    }
  };

  React?.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        fetchPosterData(id?.templates);
      }
    }, 100);
  }, [id]);

  React.useEffect(() => {
    setIsLoading(true);
    fetchSearchData();
  }, [template, openModal]);

  console.log("template: ", template);

  const handleClose = () => {
    dispatch(openTempModal(false));
    setAnotherData(false);
    setTemplate(false);
    router.back();
    // window.history.pushState({}, "", currentPathname);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openModal) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openModal]);

  const handleBackButton = () => {
    setTemplate({});
    setTimeout(() => {
      fetchPosterData(templateId);
    }, 100);
  };

  React.useEffect(() => {
    const handlePopstate = () => {
      if (openModal) {
        handleBackButton();
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [openModal]);

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
          <button className="fixed right-[8%] w-[30px]" onClick={handleClose}>
            <img src="/icons/modalClose.svg" alt="" className="" />
          </button>
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
                  <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
                    {anotherData?.datas
                      ?.filter(
                        (t: any) => t.template_id !== template?.template_id
                      )
                      ?.map((templates: any, index: number) => (
                        <div
                          className=" "
                          style={{
                            height: `${calculateHeight(
                              templates?.width,
                              templates?.height,
                              screenWidth / multiSizeFixSize
                            )}px`,
                            width: `${screenWidth / multiSizeFixSize}px`,
                          }}
                          onClick={() => {
                            handleChangeTemp(templates);
                          }}
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
