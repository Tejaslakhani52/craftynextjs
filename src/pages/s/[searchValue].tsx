import { decryptData } from "@/src/aes-crypto";
import api from "@/src/clientApi/api";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import ImageBox from "@/src/components/common/ImageBox";
import { DataType } from "@/src/interface/searchTemplateType";
import { Box, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";

const TemplateModal = dynamic(
  () => import("@/src/components/singleTemplate/TemplateModal")
);

export default function searchValue() {
  const router = useRouter();
  const searchName: any = router?.query?.searchValue;
  const formattedSearchName = searchName?.replace(/-/g, " ");
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [data, setData] = useState<DataType | any>();
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<any>("");

  const getSearchList = (pages: number) => {
    api
      .searchTemplate({
        keywords: formattedSearchName,
        page: pages,
      })
      .then((response: any) => {
        setLoading(false);
        const jsonString = response.substring(
          response.indexOf("{"),
          response.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setIsLastPage(getData?.isLastPage);
        setData((prevData: any) => [...(prevData || []), ...getData?.datas]);
      })
      .catch((error: any) => {
        // console.log("error: ", error);
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

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!isLastPage) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLastPage]);

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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px 0",
              }}
            >
              <Box className="text_linear font-[700 text-[20px]">
                Loading....
              </Box>
            </div>
          ) : data?.length > 0 ? (
            <Box>
              <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
                {data?.map((templates: any, index: number) => (
                  <ImageBox
                    key={index}
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
                {!isLastPage && (
                  <Box className="text_linear font-[700 text-[20px]">
                    Loading....
                  </Box>
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
