import Icons from "@/assets";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { tokenGet } from "@/redux/action/AuthToken";
import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import toast from "react-hot-toast";

const DraftBoxes = ({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
  user_id,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log("currentIndex: ", currentIndex);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: any = useRef(null);
  const [removeId, setRemoveId] = useState<string>("");

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: any) => (prevIndex + 1) % item?.thumbs.length
        );
      }, 1300);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, item?.thumbs.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const moveTrash = (id: string) => {
    axios
      .post("https://panel.craftyartapp.com/templates/api/mdraft", {
        key: "qwfsegxdhbxfjhncf",
        id: id,
        user_id: user_id,
        type: "0",
      })
      .then((res: any) => {
        console.log("moveTrash: ", res);
        setRemoveId(id);
        toast.success("Design moved to trash");
      });
  };

  return (
    <Box
      className="p-[10px]"
      sx={{
        width: `${multiSize}px`,
        display: removeId === item?.id ? "none" : "block",
      }}
    >
      <Box
        className="bg-[#e6e8ee8a] relative p-[10px] rounded-[8px] flex justify-center"
        sx={{ height: "200px" }}
        onMouseEnter={() => {
          setMouseEnterItem(item?.id);
          setCurrentIndex(0);
        }}
        onMouseLeave={() => {
          setMouseEnterItem("");
          setCurrentIndex(0);
        }}
      >
        <button
          onClick={handleClick}
          className=" absolute right-[10px] top-[8px] z-[1]"
          style={{
            display: mouseEnterItem === item?.id || open ? "block" : "none",
          }}
        >
          <Icons.MoreIcon />
        </button>

        <div
          className="custom-carousel w-full overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {item?.thumbs.map((image: any, index: number) => (
              <div
                className="carousel-slide"
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={image}
                  alt={`slide-${index}`}
                  style={{
                    maxWidth: `${multiSize}px`,
                    maxHeight: "180px",
                    width: "auto",
                  }}
                />
              </div>
            ))}
          </div>

          {mouseEnterItem === item?.id && item?.thumbs.length > 1 && (
            <p
              className="absolute bottom-[10px] w-[45px] flex justify-center left-[5px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
              style={{ transition: "0.5s all" }}
            >
              <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
              {item?.thumbs.length}
            </p>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
              setIsHovered(false);
              setMouseEnterItem("");
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className="gap-2 w-[200px] mb-2">
              <Icons.CopyIcon /> Make a copy
            </MenuItem>

            <MenuItem
              className="gap-2 w-[200px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                moveTrash(item?.id);
              }}
            >
              <Icons.DeleteIcon /> Move to trash
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </Box>
  );
};

export default function index() {
  const dispatch = useDispatch();

  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const user_id = tokenGet("userProfile");
  const screenHeight = useScreenHeight();
  const screenWidth = useScreenWidth() - (sideBarRedux ? 289 : 40);
  const [draftData, setDraftData] = useState<any>();
  console.log("draftData: ", draftData);
  const [mouseEnterItem, setMouseEnterItem] = useState<any>("");
  const [loadMore, setLoadMore] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState<any>(false);
  const [page, setPage] = useState<number>(1);

  const multiSize = useMemo(() => {
    console.log("screenWidth: ", screenWidth);
    switch (true) {
      case screenWidth > 1500:
        return screenWidth / 6;
      case screenWidth > 1400:
        return screenWidth / 6;
      case screenWidth > 1200:
        return screenWidth / 6;
      case screenWidth > 1000:
        return screenWidth / 3;
      case screenWidth > 600:
      case screenWidth > 550:
        return screenWidth / 3;
      default:
        return screenWidth / 2;
    }
  }, [screenWidth, sideBarRedux]);

  console.log("multiSize: ", multiSize);

  useEffect(() => {
    setLoadMore(true);

    axios
      .post(`https://panel.craftyartapp.com/templates/api/drafts`, {
        key: "qwfsegxdhbxfjhncf",
        user_id: user_id,
        type: " 0",
        page: page,
      })
      .then((res: any) => {
        console.log("res: ", res);
        setLoadMore(false);
        setIsLastPage(res?.data?.isLastPage);
        if (res?.data?.datas) {
          setDraftData((prevData: any) => [
            ...(prevData || []),
            ...res?.data?.datas,
          ]);
        }
      })
      .catch((err: any) => console.log("err: ", err));
  }, [user_id, page]);

  return (
    <div className="px-[15px]">
      <h1 className="text-[32px] font-medium p-[10px]">Draft</h1>
      <div className="flex flex-wrap " style={{ width: screenWidth }}>
        {draftData?.map((item: any) => (
          <DraftBoxes
            item={item}
            setMouseEnterItem={setMouseEnterItem}
            mouseEnterItem={mouseEnterItem}
            multiSize={multiSize}
            user_id={user_id}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        {loadMore ? (
          <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
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
    </div>
  );
}
