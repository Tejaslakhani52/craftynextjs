import { decryptData } from "@/aes-crypto";
import Icons from "@/assets";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { DraftDataType } from "@/interface/getDraftsType";
import { authCookiesGet } from "@/redux/action/AuthToken";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

interface DraftBoxesType {
  item: DraftDataType | any;
  mouseEnterItem: string;
  multiSize: number;
  setMouseEnterItem: React.Dispatch<React.SetStateAction<string>>;
}

const DraftBoxes = ({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
}: DraftBoxesType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [removeId, setRemoveId] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  const moveTrash = (id: string) => {
    axios
      .post("/api/upload/action", {
        id: id,
        type: "0",
      })
      .then(() => {
        toast.success("Moved to trash");
        setRemoveId(id);
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

        <div className=" flex justify-center w-full overflow-hidden cursor-pointer">
          <Image
            src={item?.image}
            alt={item?.image}
            className="opacity-0"
            style={{
              maxWidth: `${multiSize}px`,
              maxHeight: "180px",
              width: "auto",
              transition: "0.5s all",
            }}
            width={200}
            height={200}
            quality={80}
            priority={true}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />

          {mouseEnterItem === item?.id && item?.thumbs?.length > 1 && (
            <p
              className="absolute bottom-[10px] w-[45px] flex justify-center left-[5px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
              style={{ transition: "0.5s all" }}
            >
              <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
              {item?.thumbs?.length}
            </p>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
              setMouseEnterItem("");
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="gap-2 min-w-[230px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                moveTrash(item?.id);
              }}
            >
              <Icons.DeleteIcon />
              Move to trash
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </Box>
  );
};

export default function index() {
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const user_id = authCookiesGet();
  const screenWidth = useScreenWidth() - (sideBarRedux ? 289 : 40);
  const screenHeight = useScreenHeight();
  const [uploadData, setUploadData] = useState<DraftDataType[] | any>([]);
  const [mouseEnterItem, setMouseEnterItem] = useState<any>("");
  const [loadMore, setLoadMore] = useState<any>(false);
  const [isLastPage, setIsLastPage] = useState<any>(false);
  const [page, setPage] = useState<number>(1);

  const multiSize = useMemo(() => {
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

  useEffect(() => {
    setLoadMore(true);

    axios
      .post(`/api/upload/getData`, {
        key: "qwfsegxdhbxfjhncf",
        type: "0",
        page: page,
      })
      .then((response: any) => {
        setLoadMore(false);
        const res = JSON.parse(decryptData(response?.data));

        if (res?.data?.datas.length > 0) {
          setUploadData((prevData: DraftDataType[]) => [
            ...(prevData || []),
            ...res?.data?.datas,
          ]);
          setIsLastPage(res?.data?.isLastPage);
        } else setUploadData(null);
      })
      .catch((err: any) => {
        // console.log("err: ", err);
      });
  }, [page]);

  return (
    <div className="px-[15px]">
      <h1 className="text-[32px] font-medium p-[10px]">Upload</h1>
      <div className="flex flex-wrap " style={{ width: screenWidth }}>
        {uploadData
          ? uploadData?.map((item: any, index: number) => (
              <DraftBoxes
                key={index}
                item={item}
                setMouseEnterItem={setMouseEnterItem}
                mouseEnterItem={mouseEnterItem}
                multiSize={multiSize}
              />
            ))
          : !loadMore && (
              <div
                className="flex justify-center items-center w-full"
                style={{
                  height: `${screenHeight - 230}px`,
                }}
              >
                <img
                  src="/images/NoDataFound.svg"
                  alt=""
                  className="w-[250px]"
                />
              </div>
            )}
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
          !isLastPage &&
          uploadData?.length > 0 && (
            <Button
              className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
              sx={{ display: !isLastPage ? "none" : "block" }}
              onClick={() => setPage((prev) => prev + 1)}
            >
              LOAD MORE
            </Button>
          )
        )}
      </div>
    </div>
  );
}
