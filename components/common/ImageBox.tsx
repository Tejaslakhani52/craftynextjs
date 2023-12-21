import { calculateHeight } from "@/commonFunction/calculateHeight";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function ImageBox({
  templates,
  screenWidth,
  multiSizeFixSize,
  setIdName,
  setOpenModal,
}: any) {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log("currentIndex: ", currentIndex);
  const [isHovered, setIsHovered] = useState(false);
  console.log("isHovered: ", isHovered);
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
      // id={`content${index}`}
    >
      {/* <Link
    href={`/templates/p/${templates.id_name}`}
    // as={`/templates/p/${templates.id_name}`}
    // scroll={false}
    // shallow={true}
    // replace
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
          <>
            <img
              src="/icons/proIcon.svg"
              alt="pro"
              className="w-[28px] absolute right-[13px] top-[13px] z-[1]"
            />
          </>
        )}
        <div
          className="custom-carousel w-full h-full overflow-hidden cursor-pointer rounded-[5px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ border: "1px solid #80808082" }}
        >
          <div
            className="carousel-slider w-full h-full "
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {templates?.thumbArray.map((image: any, index: number) => (
              <div
                className="carousel-slide"
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className={`w-full] rounded-[5px] cursor-pointer`}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
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
        {/* <img
        src={templates?.template_thumb}
        alt={templates?.category_name}
        className={`w-full] rounded-[5px] cursor-pointer`}
        style={{
          border: "1px solid #80808082",
          height: "100%",
        }}
      /> */}

        <div className="pt-2">
          <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
            {templates?.template_name}
          </p>
          <p className="text-[#ABB2C7] text-[13px] pb-1">
            {templates?.category_name}
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}