import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import { templatesData } from "@/redux/reducer/AuthDataReducer";
import { modalClosePath } from "@/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplatesSkelton from "./TemplatesSkelton";
import TemplateModal from "@/components/singleTemplate/TemplateModal";

export const TemplatesBoxes = ({
  item,
  openModal,
  setOpenModal,
  setIdName,
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
            src={"/icons/rightActiveArrow.svg"}
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
            className="pre_button left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex"
            style={{ top: "52%" }}
          >
            <img
              src="/icons/leftArrow.svg"
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
              // scroll={false}
              // shallow={true}

              className={` h-auto bg-white cursor-pointer ${
                uniqueCat ? "p-3 min-w-[250px]" : "p-[7px]"
              } rounded-[12px]`}
              key={templates?.template_name}
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
                  uniqueCat ? "bg-[#E6E8EE] p-2 h-[165px]" : "p-[0px]"
                } rounded-[10px] relative`}
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
                onClick={() => {
                  dispatch(modalClosePath(`/`));
                }}
              >
                {templates.is_premium && (
                  <img
                    src="/icons/proIcon.svg"
                    alt=""
                    className="w-[28px] absolute right-[5px] top-[5px]"
                  />
                )}
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
            className="next_button right-[-18px] flex "
            style={{ top: "52%" }}
          >
            <img
              src="/icons/rightArrow.svg"
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
  const [idName, setIdName] = useState<any>("");
  const router = useRouter();
  console.log("router: ", router.asPath);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.auth.templatesData);

  useEffect(() => {
    axios
      .post(`/api/dashboard`)
      .then((res: any) => {
        console.log("res: ", res);
        dispatch(templatesData(res?.data));
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
              setIdName={setIdName}
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
