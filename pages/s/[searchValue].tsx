// import { Box, Button, Skeleton, Typography } from "@mui/material";
// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import StackGrid from "react-stack-grid";
// import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
// import { calculateHeight } from "@/commonFunction/calculateHeight";

// export default function searchValue() {
//   const [data, setData] = useState<any>();
//   const screenWidth = useScreenWidth();
//   const [page, setPage] = useState<number>(1);
//   const [loadMore, setLoadMore] = useState<any>(false);
//   const [isLastPage, setIsLastPage] = useState<any>();

//   const getSearchList = (pages: number) => {
//     setLoadMore(true);
//     axios
//       .post("/api1/search-template", {
//         key: "qwfsegxdhbxfjhncf",
//         app_id: "1",
//         cat_id: "-1",
//         keywords: "wedding",
//         device: "0",
//         refWidth: "1080",
//         refHeight: "1080",
//         page: pages,
//         debug: "debug",
//       })
//       .then((response: any) => {
//         setLoadMore(false);
//         const jsonString = response.data.substring(
//           response.data.indexOf("{"),
//           response.data.lastIndexOf("}") + 1
//         );
//         const getData = JSON.parse(jsonString);
//         console.log("getData_dfscvds: ", getData);
//         setIsLastPage(getData?.isLastPage);
//         setData((prevData: any) => [...(prevData || []), ...getData?.datas]);
//       })
//       .catch((error: any) => {
//         console.log("error: ", error);
//       });
//   };

//   const multiSizeFixSize = React.useMemo(() => {
//     switch (true) {
//       case screenWidth > 1500:
//         return 6.3;
//       case screenWidth > 1200:
//         return 6;
//       case screenWidth > 1023:
//         return 5;
//       case screenWidth > 700:
//         return 4;
//       case screenWidth > 600:
//       case screenWidth > 550:
//         return 4;
//       default:
//         return 3;
//     }
//   }, [screenWidth]);

//   useEffect(() => {
//     getSearchList(page);
//   }, [page]);

//   return (
//     <>
//       <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px] pt-[15px]">
//         <Box
//           sx={{
//             background: "url(https://assets.craftyart.in/w_assets/images/searchBanner.svg)",
//             margin: "10px auto",
//             width: "100%",
//             overflow: "hidden",
//             backgroundSize: "cover",
//             py: "50px",
//           }}
//           className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] rounded-[8px]"
//         >
//           <Typography
//             sx={{
//               color: "#ffffff",
//               width: "100%",
//               fontWeight: "500",
//               lineHeight: "40px",
//             }}
//             className="text-center text-[30px] sm:text-[35px]"
//             variant="h1"
//           >
//             Wedding templates
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: "18px",
//               color: "#ffff",
//               width: "100%",
//               marginBottom: "10px",
//             }}
//             className="text-center py-[10px] w-[70%] mx-auto"
//           >
//             Browse high quality Wedding templates for your next design
//           </Typography>
//         </Box>

//         <Box className="py-[50px]">
//           {false ? (
//             <Skeleton
//               variant="rectangular"
//               width={"100%"}
//               height={`500px`}
//               style={{
//                 borderRadius: `4px`,
//                 margin: "10px 0",
//               }}
//             />
//           ) : (
//             <Box sx={{ minHeight: "500px" }}>
//               <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
//                 {data?.map((templates: any, index: number) => (
//                   <div
//                     className=""
//                     style={{
//                       height: `${calculateHeight(
//                         templates?.width,
//                         templates?.height,
//                         screenWidth / multiSizeFixSize
//                       )}px`,
//                       width: `${screenWidth / multiSizeFixSize}px`,
//                     }}
//                     id={`content${index}`}
//                   >
//                     <Link
//                       href={`/?templates=${templates.id_name}`}
//                       as={`/templates/p/${templates.id_name}`}
//                       scroll={false}
//                       shallow={true}
//                     >
//                       <div className="w-full h-full p-[8px]">
//                         <img
//                           src={templates?.template_thumb}
//                           alt={templates?.category_name}
//                           className={`w-full] rounded-[5px] cursor-pointer`}
//                           style={{
//                             border: "1px solid #80808082",
//                             height: "100%",
//                           }}
//                         />

//                         <div className="pt-2">
//                           <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
//                             {templates?.template_name}
//                           </p>
//                           <p className="text-[#ABB2C7] text-[13px] pb-1">
//                             {templates?.category_name}
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </StackGrid>

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "40px 0",
//                 }}
//               >
//                 {loadMore ? (
//                   <Box className="text_linear font-[700 text-[20px]">
//                     Loading....
//                   </Box>
//                 ) : (
//                   <Button
//                     className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
//                     sx={{ display: isLastPage ? "none" : "block" }}
//                     onClick={() => setPage((prev) => prev + 1)}
//                   >
//                     LOAD MORE
//                   </Button>
//                 )}
//               </div>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// }

import { Box, Button, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import StackGrid from "react-stack-grid";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { calculateHeight } from "@/commonFunction/calculateHeight";
import { useRouter } from "next/router";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import ImageBox from "@/components/common/ImageBox";

export default function searchValue() {
  const router = useRouter();
  const searchName: any = router?.query?.searchValue;
  const formattedSearchName = searchName?.replace(/-/g, " ");
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [data, setData] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<any>("");

  const getSearchList = (pages: number) => {
    setLoadMore(true);
    axios
      .post("/api/searchTemplate", {
        keywords: formattedSearchName,
        page: pages,
      })
      .then((response: any) => {
        setLoading(false);
        setLoadMore(false);
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setIsLastPage(getData?.isLastPage);
        setData((prevData: any) => [...(prevData || []), ...getData?.datas]);
      })
      .catch((error: any) => {
        console.log("error: ", error);
      });
  };

  const multiSizeFixSize: any = React.useMemo(() => {
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
        return 2.4;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  useEffect(() => {
    getSearchList(page);
  }, [page, formattedSearchName]);

  useEffect(() => {
    setLoading(true);
    setPage(1);
    setData([]);
  }, [formattedSearchName]);

  return (
    <>
      <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px] pt-[15px]">
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={`250px`}
            style={{
              borderRadius: `4px`,
              margin: "0px 0",
            }}
          />
        ) : (
          <Box
            sx={{
              background:
                "url(https://assets.craftyart.in/w_assets/images/searchBanner.png)",
              margin: "10px auto",
              width: "100%",
              overflow: "hidden",
              backgroundSize: "cover",
              py: "50px",
              display: data?.length > 0 ? "block" : "none",
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
              <span className="capitalize"> {formattedSearchName} </span>{" "}
              templates
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#ffff",
                width: "100%",
                marginBottom: "10px",
              }}
              className="text-center py-[10px] w-[70%] mx-auto my-[10px]"
            >
              Explore High-Quality{" "}
              <span className="capitalize"> {formattedSearchName} </span>{" "}
              Templates for Your Next Design Project
            </Typography>
          </Box>
        )}

        <Box
          className="py-[50px]"
          sx={{ minHeight: `${screenHeight - 340}px` }}
        >
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={`${screenHeight - 440}px`}
              style={{
                borderRadius: `4px`,
                margin: "10px 0",
              }}
            />
          ) : data?.length > 0 ? (
            <Box>
              <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
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
          ) : (
            <Box
              className="flex flex-col items-center justify-center"
              sx={{ minHeight: `${screenHeight - 187}px` }}
            >
              <img
                src="/images/NoDataFound.svg"
                alt="NoDataFound"
                className="w-[250px]"
              />
              {/* <Typography className="text-[18px] font-semibold opacity-70">
                No Templates Found
              </Typography> */}
            </Box>
          )}
        </Box>
      </Box>

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </>
  );
}
