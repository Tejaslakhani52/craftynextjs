import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import { templatesData } from "@/redux/reducer/AuthDataReducer";
import { modalClosePath } from "@/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplatesSkelton from "./TemplatesSkelton";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import Icons from "@/assets";
import { decryptData } from "@/aes-crypto";
import { resolve } from "path";
import Image from "next/image";

function ImageBox({
  templates,
  uniqueCat,
  height,
  setIdName,
  setOpenModal,
}: any) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: any = useRef(null);
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: any) => (prevIndex + 1) % templates?.thumbArray.length
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
    setCurrentIndex(0);
  };

  return (
    <Link
      className={`h-auto bg-white cursor-pointer ${
        uniqueCat
          ? "p-3 max-sm:p-1 min-w-[250px] max-sm:min-w-[130px]"
          : "p-[7px] max-sm:p-1"
      } rounded-[12px]`}
      key={templates?.template_name}
      href={`/templates/p/${templates.id_name}`}
      onClick={(e) => e.preventDefault()}
    >
      <Box
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
        <Box
          className={` ${
            uniqueCat
              ? "bg-[#E6E8EE] p-2 max-sm:p-1 h-[165px] max-sm:h-[150px]"
              : "p-[0px]"
          } rounded-[10px] relative`}
          style={{
            height: uniqueCat
              ? "auto"
              : `${calculateHeight(
                  templates?.width,
                  templates?.height,
                  height
                )}px`,
            width: uniqueCat ? "auto" : `${height}px`,
          }}
          onClick={() => {
            dispatch(modalClosePath(`/`));
          }}
        >
          {templates.is_premium && (
            <span className="w-[28px] absolute right-[5px] top-[5px] z-[1]">
              <Icons.proIcon svgProps={{ width: 28 }} />
            </span>
          )}

          <div
            className="custom-carousel w-full h-full overflow-hidden cursor-pointer rounded-[5px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="carousel-slider w-full h-full "
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {templates?.thumbArray.map((image: any, index: number) => (
                <div className="bg-slate-200 flex justify-center w-full h-full rounded-[4px] carousel-slide">
                  <Image
                    src={image}
                    alt={image}
                    className={` w-[auto] ${
                      uniqueCat ? "h-[100%]" : ""
                    }  mx-auto rounded-[4px] opacity-0`}
                    style={{ transition: "0.5s all" }}
                    width={200}
                    height={200}
                    quality={80}
                    priority={true}
                    loading="eager"
                    onLoadingComplete={(image) =>
                      image.classList.remove("opacity-0")
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {isHovered && templates?.thumbArray?.length > 1 && (
            <p
              className="absolute bottom-[10px] w-[45px] flex justify-center left-[10px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
              style={{ transition: "0.5s all" }}
            >
              <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
              {templates?.thumbArray.length}
            </p>
          )}
        </Box>
      </Box>

      <Box
        className="pt-2"
        style={{
          width: uniqueCat ? "auto" : `${height}px`,
        }}
      >
        <Typography className="text-ellipsis max-sm:text-[12px] w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
          {templates?.template_name}
        </Typography>
        <Typography className="text-[#ABB2C7] text-[13px] pb-1 max-sm:hidden">
          {templates?.category_name}
        </Typography>
      </Box>
    </Link>
  );
}

export const TemplatesBoxes = ({
  item,
  openModal,
  setOpenModal,
  setIdName,
  height,
}: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const uniqueCat =
    item?.category_name === "Latest" ||
    item?.category_name === "Trending" ||
    item?.category_name === "Invitation";
  const containerId = `carousel-slide-container-${item.category_id}`;
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);
  const screenWidth = useScreenWidth();

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
    <Box className="relative">
      <Box className="flex items-center justify-between pt-8 pb-4 max-sm:pb-2 max-sm:pt-5">
        <Typography className="text-black font-semibold text-[22px] max-sm:text-[14px]">
          {item?.category_name}
        </Typography>
        <Button
          className="normal-case"
          onClick={() => router.push(`/templates/${item?.id_name}`)}
        >
          <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[14px] flex items-center">
            See all
          </span>

          <span className="w-[7px] inline-block ml-3">
            <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
          </span>
        </Button>
      </Box>
      <Box
        className="flex items-center overflow-auto scroll_none gap-[15px] max-sm:gap-[10px] "
        id={containerId}
      >
        {showPrevButton && (
          <Box>
            <button
              onClick={handlePrevClick}
              className="pre_button z-[1] left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex max-sm:hidden"
              style={{ top: "52%" }}
            >
              <Icons.leftArrowIcon svgProps={{ width: 8 }} />
            </button>
          </Box>
        )}
        {item?.template_model?.map((templates: any) => (
          <>
            <ImageBox
              templates={templates}
              uniqueCat={uniqueCat}
              height={height}
              setIdName={setIdName}
              setOpenModal={setOpenModal}
            />
          </>
        ))}
        {showNextButton && (
          <Box>
            <button
              onClick={handleNextClick}
              className="next_button right-[-18px] flex max-sm:hidden"
              style={{ top: "52%" }}
            >
              <span>
                <Icons.rightArrowIcon svgProps={{ width: 8 }} />
              </span>
            </button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const response = await axios.post(
      "https://story.craftyartapp.com/get/main/data",
      {
        key: `qwfsegxdhbxfjhncf`,
        page: 1,
        count: 0,
      }
    );

    const responseData = response.data;

    return {
      props: {
        apiData: responseData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
}
export default function TemplatesBox({ apiData }: any) {
  console.log("data: ", apiData);
  const screenWidth = useScreenWidth();

  const [openModal, setOpenModal] = React.useState(false);
  const [idName, setIdName] = useState<any>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.auth.templatesData);

  useEffect(() => {
    axios
      .post(`/api/dashboard`)
      .then((response: any) => {
        if (response?.data) {
          const res: any = JSON.parse(decryptData(response?.data));
          dispatch(templatesData(res));
        }
      })
      .catch((err: any) => consoleShow("err", err));
  }, []);

  const height = useMemo(() => {
    if (screenWidth > 600) {
      return 200;
    } else return 100;
  }, [screenWidth]);

  return (
    <Box className="px-[20px] max-sm:px-[10px] pb-10">
      {data?.length > 0
        ? data?.map((item: any) => (
            <TemplatesBoxes
              item={item}
              key={item?.id}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setIdName={setIdName}
              height={height}
            />
          ))
        : true && <TemplatesSkelton />}

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
        currentPathname={router?.asPath}
      />
    </Box>
  );
}
