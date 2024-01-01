import { calculateHeight } from "@/commonFunction/calculateHeight";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import {
  modalClosePath,
  openSidebar,
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
import { authCookiesGet, tokenGet, tokenSet } from "@/redux/action/AuthToken";
import { Templates } from "../header/headerComponents/Menu";
import { AnyAaaaRecord } from "dns";
import Icons from "@/assets";
import { decryptData } from "@/aes-crypto";
import Image from "next/image";

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

export default function TemplateModal({
  open,
  setOpen,
  currentPathname,
  id,
  setId,
}: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const userPremium = tokenGet("premium");
  const token = authCookiesGet();
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [anotherData, setAnotherData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);
  const [template, setTemplate] = React.useState<any>({});
  const [templateOpen, setTemplateOpen] = useState<any>(false);
  const [anotherTempLoad, setAnotherTempLoad] = useState<any>(true);
  const openModal = useSelector((state: any) => state.actions.openTempModal);
  const modalClose = useSelector((state: any) => state.actions.modalClosePath);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showImage, setShowImage] = useState<any>();
  const containerId = `modalId`;

  React.useEffect(() => {
    setShowImage(template?.thumbArray?.[0]);
  }, [template]);

  React.useEffect(() => {
    const fetchData = async () => {
      let getData1;

      try {
        setAnotherTempLoad(true);
        setAnotherData(false);
        setIsLoading(true);

        if (id) {
          const res = await axios.post("/api/getSingleTemplate", {
            id_name: id,
          });

          const response1 = JSON.parse(decryptData(res?.data));

          const jsonString1 = response1.substring(
            response1.indexOf("{"),
            response1.lastIndexOf("}") + 1
          );
          getData1 = JSON.parse(jsonString1);

          setIsLoading(false);
          setTemplate(getData1);

          const response2 = await axios.post("/api/searchTemplate", {
            keywords: getData1?.tags?.[0],
            page: 1,
          });

          const res2: any = JSON.parse(decryptData(response2?.data));

          const jsonString2 = res2.substring(
            res2.indexOf("{"),
            res2.lastIndexOf("}") + 1
          );
          const getData2 = JSON.parse(jsonString2);

          setAnotherData(getData2);
          setAnotherTempLoad(false);
        }
      } catch (error) {
        if (id) {
          const res = await axios.post("/api/getSingleTemplate", {
            id_name: id,
          });

          const response1 = JSON.parse(decryptData(res?.data));

          const jsonString1 = response1.data.substring(
            response1.data.indexOf("{"),
            response1.data.lastIndexOf("}") + 1
          );
          getData1 = JSON.parse(jsonString1);

          setIsLoading(false);
          setTemplate(getData1);

          const response2 = await axios.post("/api/searchTemplate", {
            keywords: getData1?.tags?.[0],
            page: 1,
          });

          const res2: any = JSON.parse(decryptData(response2?.data));

          const jsonString2 = res2.substring(
            res2.indexOf("{"),
            res2.lastIndexOf("}") + 1
          );
          const getData2 = JSON.parse(jsonString2);

          setAnotherData(getData2);
          setAnotherTempLoad(false);
        }

        try {
          const response = await axios.post("/api/searchTemplate", {
            keywords: getData1?.tags?.[0],
            page: 1,
          });

          const res2: any = JSON.parse(decryptData(response?.data));

          const jsonString = res2.substring(
            res2.indexOf("{"),
            res2.lastIndexOf("}") + 1
          );
          const getData = JSON.parse(jsonString);

          setAnotherData(getData);
          setAnotherTempLoad(false);
        } catch (error) {
          // console.log("error: ", error);
        }
      }
    };

    fetchData();
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

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const container = e.target as HTMLDivElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

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
                    <Box
                      className="flex items-center justify-center overflow-auto py-[20px] scroll_none   "
                      id={containerId}
                      onScroll={handleScroll}
                    >
                      {/* {showPrevButton && (
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
                      )} */}
                      {template?.thumbArray?.map((image: any) => (
                        <Box
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
                      ))}
                      {/* {showNextButton && (
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
                      )} */}
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
                        if (template?.is_premium && userPremium !== "true") {
                          dispatch(openSidebar(false));
                          router.push("/plans");
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
                    text="100% Customize with online editing tools"
                    isLoading={isLoading}
                  />
                  <IconsText
                    image={
                      <Icons.tModalSmartphoneIcon svgProps={{ width: 20 }} />
                    }
                    text="Edit and download on the go"
                    isLoading={isLoading}
                  />
                  <IconsText
                    image={<Icons.tModalPublishIcon svgProps={{ width: 20 }} />}
                    text="Share and publish anywhere"
                    isLoading={isLoading}
                  />
                  <IconsText
                    image={<Icons.tModalBackedIcon svgProps={{ width: 20 }} />}
                    text="Backed by our happiness Guarantee"
                    isLoading={isLoading}
                  />
                  <IconsText
                    image={<Icons.tModalAccessIcon svgProps={{ width: 20 }} />}
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
                                className={`w-full] rounded-[5px] cursor-pointer`}
                                style={{
                                  border: "1px solid #80808082",
                                  height: "100%",
                                }}
                                width={200}
                                height={200}
                                quality={80}
                                priority={true}
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
    </Box>
  );
}

// import { calculateHeight } from "@/commonFunction/calculateHeight";
// import {
//   useScreenHeight,
//   useScreenWidth,
// } from "@/commonFunction/screenWidthHeight";
// import {
//   modalClosePath,
//   openTempModal,
// } from "@/redux/reducer/actionDataReducer";
// import { Box, Skeleton, Typography } from "@mui/material";
// import Dialog, { DialogProps } from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import StackGrid from "react-stack-grid";
// import Link from "next/link";

// export const IconsText = ({ image, text, isLoading }: any) => {
//   return isLoading ? (
//     <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
//       <Skeleton
//         variant="rectangular"
//         width={"30px"}
//         height={`30px`}
//         style={{
//           borderRadius: `5px`,
//         }}
//       />

//       <Skeleton
//         variant="rectangular"
//         width={"100%"}
//         height={`10px`}
//         style={{
//           borderRadius: `5px`,
//         }}
//       />
//     </Typography>
//   ) : (
//     <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
//       <img src={image} alt={template?.template_name}className="w-[20px]" />
//       {text}
//     </Typography>
//   );
// };

// export default function TemplateModal({
//   open,
//   setOpen,
//   currentPathname,
//   id,
// }: any) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const id = router.query;
//   const screenWidth = useScreenWidth();
//   const screenHeight = useScreenHeight();
//   const [anotherData, setAnotherData] = React.useState<any>([]);
//   const [isLoading, setIsLoading] = React.useState<any>(true);
//   const [template, setTemplate] = React.useState<any>({});
//   const [templateOpen, setTemplateOpen] = useState<any>(false);
//   const [anotherTempLoad, setAnotherTempLoad] = useState<any>(true);

//   const openModal = useSelector((state: any) => state.actions.openTempModal);
//   const modalClose = useSelector((state: any) => state.actions.modalClosePath);

//   React?.useEffect(() => {
//     setAnotherTempLoad(true);
//     setAnotherData(false);
//     setIsLoading(true);

//     if (id?.templates && id?.templates !== "") {
//       axios
//         .post(
//           "/api1/my-posterPage",
//           {
//             key: "qwfsegxdhbxfjhncf",
//             id_name: id?.templates,
//           },
//           { withCredentials: false }
//         )
//         .then((response: any) => {
//           setIsLoading(false);
//           const jsonString = response.data.substring(
//             response.data.indexOf("{"),
//             response.data.lastIndexOf("}") + 1
//           );
//           const getDatas = JSON.parse(jsonString);
//           setTemplate(getDatas);

//           setTimeout(() => {
//             axios
//               .post("/api1/search-template", {
//                 key: "qwfsegxdhbxfjhncf",
//                 app_id: "1",
//                 cat_id: "-1",
//                 keywords: getDatas?.tags?.[0] as any,
//                 device: "0",
//                 refWidth: "1080",
//                 refHeight: "1080",
//                 page: 1,
//                 debug: "debug",
//               })
//               .then((response: any) => {
//                 const jsonString = response.data.substring(
//                   response.data.indexOf("{"),
//                   response.data.lastIndexOf("}") + 1
//                 );
//                 const getData = JSON.parse(jsonString);

//                 // if (getData && getData?.datas?.length > 0) {
//                 //   setAnotherData(getData);
//                 //   setAnotherTempLoad(false);
//                 // } else
//                 //   axios
//                 //     .post(`/api/get/datas`, {
//                 //       debug_key: "debug",
//                 //       cat_id: getDatas?.category_id_name as any,
//                 //       limit: 48,
//                 //       page: 1,
//                 //     })
//                 //     .then((res: any) => {
//                 //       setAnotherData(res?.data);
//                 //       setAnotherTempLoad(false);
//                 //     });

//                 setAnotherData(getData);
//                 setAnotherTempLoad(false);
//               })
//               .catch((error: any) => {
//                 console.log("error: ", error);
//               });
//           }, 100);
//         })
//         .catch((error) => {
//           console.log("error: ", error);
//         });
//     }
//   }, [id?.templates]);

//   const multiSizeFixSize = React.useMemo(() => {
//     switch (true) {
//       case screenWidth > 1500:
//         return 7;
//       case screenWidth > 1200:
//         return 6;
//       case screenWidth > 1023:
//         return 5;
//       case screenWidth > 700:
//         return 4;
//       case screenWidth > 600:
//       case screenWidth > 550:
//         return 3;
//       default:
//         return 3;
//     }
//   }, [screenWidth]);

//   React.useEffect(() => {
//     if (id?.templates) {
//       document.body.classList.add("body-no-scroll");
//     } else {
//       document.body.classList.remove("body-no-scroll");
//     }

//     return () => {
//       document.body.classList.remove("body-no-scroll");
//     };
//   }, [id]);

//   const scrollContainerRef: any = React.useRef(null);

//   React.useEffect(() => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollTop = 0;
//     }
//   }, [isLoading, template]);

//   return (
//     <Box
//       className="fixed top-0 bottom-0 left-0 right-0 z-[1000]"
//       style={{
//         backgroundColor: "#1c3048ba",
//         visibility: open ? "visible" : "hidden",
//       }}
//     >
//       <Box
//         className="overflow-auto"
//         ref={scrollContainerRef}
//         sx={{
//           height: `${screenHeight}px`,
//         }}
//       >
//         <Box
//           sx={{
//             overflow: "auto",
//             background: "white",
//             width: "80%",
//             mx: "auto",
//             my: "20px",
//             borderRadius: "5px",
//           }}
//         >
//           <Link
//             href={modalClose}
//             scroll={false}
//             shallow={true}
//             className="fixed right-[8%] w-[30px]"
//           >
//             <img src="/icons/modalClose.svg" alt={template?.template_name}className="" />
//           </Link>
//           <DialogContent className="px-[40px]">
//             <Box className="flex h-[450px]  my-[20px] gap-[50px]">
//               {isLoading ? (
//                 <>
//                   <Skeleton
//                     variant="rectangular"
//                     width={"66%"}
//                     height={`100%`}
//                     style={{
//                       borderRadius: `5px`,
//                     }}
//                   />
//                 </>
//               ) : (
//                 <Box className="w-[66%] rounded-[4px] bg-[#F4F7FE] flex justify-center items-center">
//                   <img
//                     src={template?.url + template?.template_thumb}
//                     alt={template?.template_name}//                     className="h-[430px] w-auto rounded-[4px]"
//                     style={{ border: "1px solid #80808059" }}
//                   />
//                 </Box>
//               )}
//               <Box className="w-[33%]">
//                 {isLoading ? (
//                   <Skeleton
//                     variant="rectangular"
//                     width={"100%"}
//                     height={`20px`}
//                     style={{
//                       borderRadius: `30px`,
//                     }}
//                   />
//                 ) : (
//                   <h1 className="text-[#1C3048] text-[24px] font-[500] mb-3">
//                     {template?.template_name}
//                   </h1>
//                 )}

//                 <Typography className="text-[#ABB2C7] text-[15px] mb-4">
//                   {isLoading ? (
//                     <Skeleton
//                       variant="rectangular"
//                       width={"35%"}
//                       height={`20px`}
//                       style={{
//                         borderRadius: `30px`,
//                         margin: "10px 0",
//                       }}
//                     />
//                   ) : (
//                     template?.category_size
//                   )}
//                 </Typography>

//                 {isLoading ? (
//                   <Skeleton
//                     variant="rectangular"
//                     width={"100%"}
//                     height={`40px`}
//                     style={{
//                       borderRadius: `4px`,
//                       margin: "10px 0",
//                     }}
//                   />
//                 ) : (
//                   <button
//                     className="text-white w-full py-[10px] rounded-[6px]"
//                     style={{
//                       background:
//                         "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
//                     }}
//                   >
//                     Customize this template
//                   </button>
//                 )}

//                 <div className="py-4">
//                   <IconsText
//                     image="/icons/TmodalCustomize.svg"
//                     text="100% Customize with online editing tools"
//                     isLoading={isLoading}
//                   />
//                   <IconsText
//                     image="/icons/TmodalSmartphone.svg"
//                     text="Edit and download on the go"
//                     isLoading={isLoading}
//                   />
//                   <IconsText
//                     image="/icons/TmodalPublish.svg"
//                     text="Share and publish anywhere"
//                     isLoading={isLoading}
//                   />
//                   <IconsText
//                     image="/icons/TmodalBacked.svg"
//                     text="Backed by our happiness Guarantee"
//                     isLoading={isLoading}
//                   />

//                   <IconsText
//                     image="/icons/TmodalAccess.svg"
//                     text="Access 10,000+ all inclusive templates"
//                     isLoading={isLoading}
//                   />
//                 </div>
//               </Box>
//             </Box>

//             {isLoading ? (
//               <Skeleton
//                 variant="rectangular"
//                 width={"40%"}
//                 height={`20px`}
//                 style={{
//                   borderRadius: `30px`,
//                   margin: "40px 0 30px",
//                 }}
//               />
//             ) : (
//               <h2 className="text-[#1C3048] text-[23px] font-[500] pt-4 my-3">
//                 Templates with the same style and concept
//               </h2>
//             )}

//             <Box>
//               {anotherTempLoad ? (
//                 <Skeleton
//                   variant="rectangular"
//                   width={"100%"}
//                   height={`500px`}
//                   style={{
//                     borderRadius: `4px`,
//                     margin: "10px 0",
//                   }}
//                 />
//               ) : (
//                 <Box sx={{ minHeight: "500px" }}>
//                   <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
//                     {anotherData?.datas
//                       ?.filter(
//                         (t: any) => t.template_id !== template?.template_id
//                       )
//                       ?.map((templates: any, index: number) => (
//                         <div
//                           className=""
//                           style={{
//                             height: `${calculateHeight(
//                               templates?.width,
//                               templates?.height,
//                               screenWidth / multiSizeFixSize
//                             )}px`,
//                             width: `${screenWidth / multiSizeFixSize}px`,
//                           }}
//                           onClick={() => {
//                             setAnotherData(false);
//                             setTemplate(false);
//                             setIsLoading(true);
//                           }}
//                         >
//                           <Link
//                             href={`/?templates=${templates.id_name}`}
//                             as={`/templates/p/${templates.id_name}`}
//                             scroll={false}
//                             shallow={true}
//                           >
//                             <div className="w-full h-full p-[8px]">
//                               <img
//                                 src={templates?.template_thumb}
//                                 alt={templates?.category_name}
//                                 className={`w-full] rounded-[5px] cursor-pointer`}
//                                 style={{
//                                   border: "1px solid #80808082",
//                                   height: "100%",
//                                 }}
//                               />
//                             </div>
//                           </Link>
//                         </div>
//                       ))}
//                   </StackGrid>
//                 </Box>
//               )}
//             </Box>
//           </DialogContent>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
