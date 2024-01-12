import Icons from "@/src/assets";
import { calculateHeight } from "@/src/commonFunction/calculateHeight";
import { DataType } from "@/src/interface/searchTemplateType";
import { modalClosePath } from "@/src/redux/reducer/actionDataReducer";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

interface ImageBoxesProps {
  templates: DataType;
  uniqueCat: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIdName: React.Dispatch<React.SetStateAction<string>>;
  height: number | any;
}

export default function ImageBox({
  templates,
  uniqueCat,
  height,
  setIdName,
  setOpenModal,
}: ImageBoxesProps) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: React.RefObject<HTMLInputElement> | any = useRef(null);
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
      className={`h-auto bg-white cursor-pointer block ${
        uniqueCat
          ? "p-3 max-sm:p-1 max-w-[250px] max-sm:max-w-[130px]"
          : "p-[7px] max-sm:p-1"
      } rounded-[12px]`}
      key={templates.id_name}
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
                <div
                  className="bg-slate-200 flex justify-center w-full h-full rounded-[4px] carousel-slide"
                  key={index}
                >
                  <img
                    src={image}
                    alt={image}
                    className={` w-[auto] ${
                      uniqueCat ? "h-[100%]" : ""
                    }  mx-auto rounded-[4px] opacity-0`}
                    style={{
                      transition: "0.8s all",
                      height: "auto",
                      width: "auto",
                    }}
                    onLoad={(e: any) => e.target.classList.remove("opacity-0")}
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
