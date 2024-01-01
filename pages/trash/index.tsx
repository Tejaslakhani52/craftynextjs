import Icons from "@/assets";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { decryptData } from "@/aes-crypto";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "20px 0" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DraftBoxes = ({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
  user_id,
}: any) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log("currentIndex: ", currentIndex);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: any = useRef(null);
  const [removeId, setRemoveId] = useState<string>("");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDeleteBox, setOpenDeleteBox] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpenDeleteBox(true);
  };

  const handleClose = () => {
    setOpenDeleteBox(false);
  };

  const handleDelete = (id: string) => {
    axios
      .post("/api/draftAction", {
        id: id,
        type: "2",
      })
      .then((res: any) => {
        setRemoveId(id);
      });
  };

  const restore = (id: string) => {
    axios
      .post("/api/draftAction", {
        id: id,
        type: "1",
      })
      .then((res: any) => {
        toast.success("Moved to your project");
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

        <div
          className="custom-carousel w-full overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              height: "100%",
            }}
          >
            {item?.thumbs.map((image: any, index: number) => (
              <div
                className="carousel-slide"
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
            <MenuItem
              className="gap-2 w-[200px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                restore(item?.id);
              }}
            >
              <Icons.RestoreIcon />
              Restore
            </MenuItem>

            <MenuItem
              className="gap-2 min-w-[230px] mb-2"
              onClick={handleClickOpen}
            >
              <Icons.DeleteIcon />
              Delete permanently
            </MenuItem>
          </Menu>

          <Dialog
            fullScreen={fullScreen}
            open={openDeleteBox}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="py-[20px]">
              <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px]  pb-4">
                Delete permanently?
              </h3>

              <p className="px-[15px] pb-[35px]">
                You're about to delete this design permanently. This can't be
                undone.
              </p>

              <div
                className="flex justify-end gap-4 px-[15px]"
                style={{ paddingBottom: "0" }}
              >
                <Button
                  className={`${"normal-case bg-[#E6E8EE] text-black px-[15px]"} `}
                  onClick={() => setOpenDeleteBox(false)}
                  style={{ height: "40px" }}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-[#C70000] text-white normal-case px-[15px]`}
                  onClick={() => {
                    setAnchorEl(null);
                    setOpenDeleteBox(false);
                    handleDelete(item?.id);
                  }}
                  style={{ height: "40px" }}
                >
                  Delete permanently
                </Button>
              </div>
            </div>
          </Dialog>
        </div>
      </Box>
    </Box>
  );
};

const DraftBoxesTab2 = ({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
  user_id,
}: any) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  console.log("currentIndex: ", currentIndex);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: any = useRef(null);
  const [removeId, setRemoveId] = useState<string>("");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDeleteBox, setOpenDeleteBox] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpenDeleteBox(true);
  };

  const handleClose = () => {
    setOpenDeleteBox(false);
  };

  const handleDelete = (id: string) => {
    axios
      .post("/api/uploadAction", {
        id: id,
        type: "2",
      })
      .then((res: any) => {
        setRemoveId(id);
      });
  };

  const restore = (id: string) => {
    axios
      .post("/api/uploadAction", {
        id: id,
        type: "1",
      })
      .then((res: any) => {
        toast.success("Moved to your upload");
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

        <div
          className=" flex justify-center w-full overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item?.image}
            alt={`image`}
            style={{
              maxWidth: `${multiSize}px`,
              maxHeight: "180px",
              width: "auto",
            }}
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
              setIsHovered(false);
              setMouseEnterItem("");
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="gap-2 w-[200px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                restore(item?.id);
              }}
            >
              <Icons.RestoreIcon />
              Restore
            </MenuItem>

            <MenuItem
              className="gap-2 min-w-[230px] mb-2"
              onClick={handleClickOpen}
            >
              <Icons.DeleteIcon />
              Delete permanently
            </MenuItem>
          </Menu>

          <Dialog
            fullScreen={fullScreen}
            open={openDeleteBox}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="py-[20px]">
              <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px]  pb-4">
                Delete permanently?
              </h3>

              <p className="px-[15px] pb-[35px]">
                You're about to delete this design permanently. This can't be
                undone.
              </p>

              <div className="button_tabs" style={{ paddingBottom: "0" }}>
                <button
                  className={`${"text_style"} `}
                  onClick={() => setOpenDeleteBox(false)}
                  style={{ height: "40px" }}
                >
                  Cancel
                </button>
                <button
                  className={`font`}
                  onClick={() => {
                    setAnchorEl(null);
                    setOpenDeleteBox(false);
                    handleDelete(item?.id);
                  }}
                  style={{ height: "40px" }}
                >
                  Delete permanently
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      </Box>
    </Box>
  );
};

export default function index() {
  const dispatch = useDispatch();
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);
  const user_id = authCookiesGet();
  const screenHeight = useScreenHeight();
  const screenWidth = useScreenWidth() - (sideBarRedux ? 289 : 40);
  const [designTrash, setDesignTrash] = useState<any>([]);
  const [imagesTrash, setImagesTrash] = useState<any>([]);
  console.log("draftData: ", designTrash);
  const [mouseEnterItem, setMouseEnterItem] = useState<any>("");
  const [loadMore, setLoadMore] = useState<any>(false);
  const [loadMore2, setLoadMore2] = useState<any>(false);
  console.log("loadMore2: ", loadMore2);
  const [isLastDesignPage, setIsLastDesignPage] = useState<any>(false);
  const [isLastImagesPage, setIsLastImagesPage] = useState<any>(false);
  console.log("isLastImagesPage: ", isLastImagesPage);
  const [designPage, setDesignPage] = useState<number>(1);
  const [imagesPage, setImagesPage] = useState<number>(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
      .post(`/api/getDrafts`, {
        type: "1",
        page: designPage,
      })
      .then((response: any) => {
        const res: any = JSON.parse(decryptData(response?.data));

        setLoadMore(false);
        if (res?.datas.length > 0) {
          setDesignTrash((prevData: any) => [
            ...(prevData || []),
            ...res?.datas,
          ]);
          setIsLastDesignPage(res?.isLastPage);
        } else setDesignTrash(null);
      })
      .catch((err: any) => console.log("err: ", err));
  }, [designPage]);

  useEffect(() => {
    setLoadMore2(true);
    axios
      .post(`/api/getUploads`, {
        key: "qwfsegxdhbxfjhncf",
        type: "1",
        page: imagesPage,
      })
      .then((response: any) => {
        const res = JSON.parse(decryptData(response?.data));

        setLoadMore2(false);
        if (res?.data?.datas.length > 0) {
          setImagesTrash((prevData: any) => [
            ...(prevData || []),
            ...res?.data?.datas,
          ]);

          setIsLastImagesPage(res?.data?.isLastPage);
        } else setImagesTrash(null);
      })
      .catch((err: any) => console.log("err: ", err));
  }, [imagesPage]);

  return (
    <div className="px-[15px]">
      <h1 className="text-[32px] font-medium p-[10px]">Trash</h1>
      <Box sx={{ width: "100%", mx: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            justifyContent: "space-between",
            padding: "0 10px",
            "& .MuiTabs-flexContainer": {
              gap: { xs: "0", md: "20px" },
              overflow: "auto",
            },
            "& .MuiTabs-flexContainer::-webkit-scrollbar": {
              display: "none",
            },
            "& .MuiTabs-indicator": {
              background:
                "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
            },
            "& .MuiBox-root": {
              padding: "0",
            },
          }}
        >
          <Tab
            label="Designs"
            {...a11yProps(0)}
            sx={{
              "&.MuiButtonBase-root": {
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: { sm: "16px" },
                minWidth: "auto",
              },

              "&.Mui-selected": {
                color: "transparent",
                background:
                  "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                backgroundClip: "text",
              },
            }}
          />
          <Tab
            label="Images"
            {...a11yProps(1)}
            sx={{
              "&.MuiButtonBase-root": {
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: { sm: "16px" },
                minWidth: "auto",
              },

              "&.Mui-selected": {
                color: "transparent",
                background:
                  "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                backgroundClip: "text",
              },
            }}
          />
        </Tabs>

        <Box className=" ">
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-wrap " style={{ width: screenWidth }}>
              {designTrash
                ? designTrash?.map((item: any) => (
                    <DraftBoxes
                      item={item}
                      setMouseEnterItem={setMouseEnterItem}
                      mouseEnterItem={mouseEnterItem}
                      multiSize={multiSize}
                      user_id={user_id}
                    />
                  ))
                : !loadMore && (
                    <div
                      className="flex justify-center items-center w-full"
                      style={{ height: `${screenHeight - 330}px` }}
                    >
                      <img
                        src="/images/NoDataFound.svg"
                        alt="NoDataFound"
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
                <Box className="text_linear font-[700 text-[20px]">
                  Loading....
                </Box>
              ) : (
                !isLastDesignPage &&
                designTrash?.length > 0 && (
                  <Button
                    className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
                    onClick={() => setDesignPage((prev) => prev + 1)}
                  >
                    LOAD MORE
                  </Button>
                )
              )}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex flex-wrap " style={{ width: screenWidth }}>
              {imagesTrash
                ? imagesTrash?.map((item: any) => (
                    <DraftBoxesTab2
                      item={item}
                      setMouseEnterItem={setMouseEnterItem}
                      mouseEnterItem={mouseEnterItem}
                      multiSize={multiSize}
                      user_id={user_id}
                    />
                  ))
                : !loadMore2 && (
                    <div
                      className="flex justify-center items-center w-full"
                      style={{ height: `${screenHeight - 330}px` }}
                    >
                      <img
                        src="/images/NoDataFound.svg"
                        alt="NoDataFound"
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
              {loadMore2 ? (
                <Box className="text_linear font-[700 text-[20px]">
                  Loading....
                </Box>
              ) : (
                !isLastImagesPage &&
                imagesTrash?.length > 0 && (
                  <Button
                    className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
                    sx={{ display: !isLastImagesPage ? "none" : "block" }}
                    onClick={() => setImagesPage((prev) => prev + 1)}
                  >
                    LOAD MORE
                  </Button>
                )
              )}
            </div>
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
}
