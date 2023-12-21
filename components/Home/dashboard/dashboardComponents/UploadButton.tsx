import Icons from "@/assets";
import CustomizedMenus from "@/components/common/WidthType";
import { Box, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function UploadButton() {
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const [value, setValue] = React.useState(0);
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

  console.log("value: ", value);

  const fileInputRef: any = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    setIsDragOver(false);
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Button
        onClick={handleClick}
        className="bg-[#1C304833] text-white normal-case px-[20px]"
      >
        Upload
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
        <Box className="max-w-[500px]">
          <Typography
            className="font-medium py-3 px-[20px]"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            Start from designs
          </Typography>

          <Typography className="px-[20px] pt-3">
            Begin by selecting a file and uploading your personal photos or
            videos to use. Our system will convert them into a customizable
            format that you can edit, resize and collaborate on.
          </Typography>

          <Box className="flex-1 max-md:w-full px-[20px]">
            <div
              className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[20px] rounded-[5px] "
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{
                border: isDragOver ? "1px dashed black" : "1px dashed #ABB2C7",
                display: selectedFile ? "none" : "flex",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <Icons.uploadIcon />

              <div>
                <p className="text-center text-[14px]">
                  Drag your file here or
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="bg-[#E6E8EE] flex gap-3 items-center px-[50px] py-[10px] rounded-[5px] mb-3"
              >
                <Icons.uploadSmallIcon /> Upload Image
              </button>
            </div>

            <div className="my-4">
              <Typography className="text-center ">
                CraftyArt supports image, videos and files
              </Typography>
            </div>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
