import Icons from "@/assets";
import CustomizedMenus from "@/components/common/WidthType";
import { Box, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function hasDecimal(value: any) {
  return value.toString().includes(".");
}

export default function CustomSize() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [height, setHeight] = useState<any>(0);
  console.log("height: ", height);
  const [width, setWidth] = useState<any>(0);
  const [selectedUnit, setSelectedUnit] = React.useState<null | string>("px");
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(false);
  const [lastSelectUnit, setLastSelectUnit] = useState<any>();
  const [enterHeight, setEnterHeight] = useState<any>(0);
  const [enterWidth, setEnterWidth] = useState<any>(0);
  console.log("enterWidth: ", enterWidth);

  const [forAspectRatioWidth, setForAspectRatioWidth] = useState<any>(0);
  console.log("forAspectRatioWidth: ", forAspectRatioWidth);
  // console.log("forAspectRatioWidth: ", forAspectRatioWidth);
  const [forAspectRatioHeight, setForAspectRatioHeight] = useState<any>(0);
  console.log("lastSelectUnit: ", enterHeight);
  console.log("forAspectRatioWidth: ", forAspectRatioWidth);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const formatSize = (
      width: number,
      height: number,
      conversionFactor: number
    ) => {
      const formattedWidth: any = width / conversionFactor;
      const formattedHeight = height / conversionFactor;

      console.log("formattedWidth: ", formattedWidth.length);
      //   if (hasDecimal(formattedWidth)) {
      //     setWidth(formattedWidth.toFixed(3));
      //   } else setWidth(formattedWidth);

      //   const formattedHeight = height / conversionFactor;

      //   if (hasDecimal(formattedHeight)) {
      //     setHeight(formattedHeight.toFixed(3));
      //   } else setHeight(formattedHeight);

      setWidth(formattedWidth.toFixed(3));

      setHeight(formattedHeight.toFixed(3));
    };
    //{"w": 900, "h":900}

    const handleUnitChange = () => {
      switch (lastSelectUnit) {
        case "px":
          switch (selectedUnit) {
            case "in":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight,
                96
              );
              break;
            case "mm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight,
                3.78
              );
              break;
            case "cm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight,
                37.7958
              );
              break;
            default:
              setWidth(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth
              );
              setHeight(
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight
              );
              break;
          }
          break;
        case "mm":
          switch (selectedUnit) {
            case "in":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight,
                25.4
              );
              break;
            case "px":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 3.78,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 3.78,
                1
              );
              break;
            case "cm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth / 10,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight / 10,
                1
              );
              break;
            default:
              setWidth(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth
              );
              setHeight(
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight
              );
              break;
          }
          break;
        case "in":
          switch (selectedUnit) {
            case "px":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 96,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 96,
                1
              );
              break;
            case "mm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 25.4,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 25.4,
                1
              );
              break;
            case "cm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 2.54,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 2.54,
                1
              );
              break;
            default:
              setWidth(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth
              );
              setHeight(
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight
              );
              break;
          }
          break;
        case "cm":
          switch (selectedUnit) {
            case "in":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth / 2.54,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight / 2.54,
                1
              );
              break;
            case "px":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 37.7958,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 37.7958,
                1
              );
              break;
            case "mm":
              formatSize(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth * 10,
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight * 10,
                1
              );
              break;
            default:
              setWidth(
                lockAspectRatio && forAspectRatioWidth > 0
                  ? forAspectRatioWidth
                  : enterWidth
              );
              setHeight(
                lockAspectRatio && forAspectRatioHeight > 0
                  ? forAspectRatioHeight
                  : enterHeight
              );
              break;
          }
          break;
        default:
          setWidth(
            lockAspectRatio && forAspectRatioWidth > 0
              ? forAspectRatioWidth
              : enterWidth
          );
          setHeight(
            lockAspectRatio && forAspectRatioHeight > 0
              ? forAspectRatioHeight
              : enterHeight
          );
          break;
      }
    };

    // if (lockAspectRatio) {
    //   setEnterWidth(width);
    //   setEnterHeight(height);

    //   setTimeout(() => {
    //     handleUnitChange();
    //   }, 100);
    // } else
    // if (lockAspectRatio && (forAspectRatioWidth || forAspectRatioHeight)) {
    //   setEnterWidth(forAspectRatioWidth);
    //   setEnterHeight(forAspectRatioHeight);
    // }

    handleUnitChange();

    return () => {};
  }, [selectedUnit]);

  useEffect(() => {
    if (lockAspectRatio) {
      setHeight((enterWidth * 1.018).toFixed());
      setForAspectRatioHeight((enterWidth * 1.018).toFixed());
    }
  }, [enterWidth, lockAspectRatio]);

  useEffect(() => {
    if (lockAspectRatio) {
      setWidth((enterHeight / 1.018).toFixed());
      setForAspectRatioWidth((enterHeight / 1.018).toFixed());
    }
  }, [enterHeight, lockAspectRatio]);

  const [base64String, setBase64String] = useState("");
  console.log("base64String: ", base64String);

  useEffect(() => {
    const jsonString = JSON.stringify({ w: width, h: height });

    const encodedString = btoa(jsonString);

    setBase64String(encodedString);
  }, [width, height]);

  return (
    <Box>
      <Button
        onClick={handleClick}
        className="bg-[#1C304833] text-white normal-case px-[20px]"
      >
        Custom size
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box>
          <Typography
            className="font-medium py-3 px-[20px]"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            Enter custom size
          </Typography>

          <Box className="flex py-3 px-[20px] gap-4 items-end">
            <Box className="flex-1">
              <Typography className="mb-2">Width</Typography>
              <input
                type="number"
                value={width}
                style={{ border: "1px solid  #D9D9D9" }}
                className="max-w-[120px] px-3 py-2 rounded-[4px]"
                onChange={(e) => {
                  setWidth(e.target.value);
                  setEnterWidth(e.target.value);
                  setLastSelectUnit(selectedUnit);
                }}
              />
            </Box>

            <Box className="flex-1">
              <Typography className="mb-2">Height</Typography>
              <input
                type="number"
                value={height}
                style={{ border: "1px solid  #D9D9D9" }}
                className="max-w-[120px] px-3 py-2 rounded-[4px]"
                onChange={(e) => {
                  setHeight(e.target.value);
                  setEnterHeight(e.target.value);
                  setLastSelectUnit(selectedUnit);
                }}
              />
            </Box>

            <Box
              style={{ border: "1px solid  #D9D9D9" }}
              className="max-w-[120px] min-w-[70px] px-3 py-2 rounded-[4px] flex justify-center items-center"
            >
              px
            </Box>
            {/* <CustomizedMenus value={selectedUnit} setValue={setSelectedUnit} /> */}
            <Box>
              <Button
                className="p-[12px]"
                onClick={() => setLockAspectRatio(!lockAspectRatio)}
              >
                {lockAspectRatio ? <Icons.lockIcon /> : <Icons.unLockIcon />}
              </Button>
            </Box>
          </Box>
          <Box className="py-3 px-[20px]">
            <Button
              className="bg_linear text-white w-full py-2 normal-case text-[16px]"
              onClick={() =>
                window.open(`https://editor.craftyartapp.com/${base64String}`)
              }
            >
              Create new design
            </Button>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
