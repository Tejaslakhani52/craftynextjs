import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/router";

export const Product = {
  name: "Product",
  subName: [
    {
      heading: "Industry",
      allName: [
        { name: "Marketing", path: "/marketing" },
        { name: "Bussiness", path: "/bussiness" },
        { name: "Card & Invitation", path: "" },
      ],
    },

    {
      heading: "Category",
      allName: [
        { name: "Invitation", path: "/invitation" },
        { name: "Quotes", path: "/quotes" },
        { name: "Resume", path: "/resume" },
        { name: "Flyer", path: "/flyers" },
        { name: "Festival", path: "" },
        { name: "Logo", path: "/logos" },
      ],
    },
  ],
};

export const EditorTools = {
  name: "Editor tools",
  subName: [
    {
      heading: "",
      allName: [
        { name: "Background Remover", path: "" },
        { name: "Brand kit", path: "" },
        { name: "Resize", path: "" },
        { name: "Carry Cature", path: "" },
        { name: "Style kit", path: "" },
        { name: "Customize Invitation", path: "" },
      ],
    },
  ],
};

export const Templates = {
  name: "Templates",
  subName: [
    {
      heading: "",
      allName: [
        { name: "Background Remover", path: "" },
        { name: "Brand kit", path: "" },
        { name: "Resize", path: "" },
        { name: "Carry Cature", path: "" },
        { name: "Style kit", path: "" },
        { name: "Customize Invitation", path: "" },
      ],
    },
  ],
};
interface SubName {
  heading: string;
  allName: { name: string; path: string }[];
}

export interface BasicMenuProps {
  title: string;
  itemName: SubName[];
}

export function BasicMenu({ title, itemName }: BasicMenuProps) {
  const router = useRouter();
  const [onBoxLeave, setOnBoxLeave] = React.useState<boolean>(false);
  const [onButtonLeave, setOnButtonLeave] = React.useState<boolean>(false);

  return (
    <Box className="relative ">
      <button
        className={`peer px-3 max-2xl:px-3 py-2   text-[14px] flex items-center whitespace-nowrap   `}
        style={{ color: onButtonLeave || onBoxLeave ? "#2EC6B8" : "#1C3048" }}
        // onMouseEnter={() => setSelectColor("#2EC6B8")}
        onMouseEnter={() => setOnButtonLeave(true)}
        onMouseLeave={() => setOnButtonLeave(false)}
      >
        {title}
        <Box className="w-[14px] mx-2   ">
          {onButtonLeave || onBoxLeave ? (
            <img src="./icons/menuIcon.svg" alt="menuIcon" />
          ) : (
            <img src="./icons/menuBlackIcon.svg" alt="menuBlackIcon" />
          )}
        </Box>
      </button>

      <Box
        onMouseLeave={() => setOnBoxLeave(false)}
        onMouseEnter={() => setOnBoxLeave(true)}
        className="hidden peer-hover:flex hover:flex
        w-[auto]
         bg-white drop-shadow-lg absolute rounded-[6px] gap-8 z-[10000045]"
        sx={{
          padding: "20px 20px",
          boxShadow: "0px 5px 12px 3px rgba(0, 0, 0, 0.16)",
        }}
      >
        {itemName?.map((data: any) => (
          <>
            <Box className="flex flex-col">
              <Typography
                className={`text-black font-semibold px-4 ${
                  data?.heading && " pb-3"
                }`}
              >
                {data?.heading}
              </Typography>
              {data?.allName?.map((item: any) => (
                <MenuItem
                  onClick={() => router.push(item.path)}
                  sx={{
                    fontSize: "14px",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#EDF0F9",
                    },
                    color:
                      router.pathname === item.path ? "#2EC6B8" : "#1C3048",
                  }}
                >
                  {item?.name}
                </MenuItem>
              ))}
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default function MenuBox() {
  const [selectColor, setSelectColor] = React.useState<string>("#1C3048");
  const [openHideButton, setOpenHideButton] = useState<boolean>(false);

  return (
    <>
      <Box className="flex w-[auto] justify-between items-center  max-lg:hidden">
        <BasicMenu title={Product?.name} itemName={Product?.subName} />
        <BasicMenu title={EditorTools?.name} itemName={EditorTools?.subName} />

        <BasicMenu title={Templates?.name} itemName={Templates?.subName} />

        <button
          className={` max-xl:hidden px-3 max-2xl:px-3 py-2   text-[14px] flex items-center whitespace-nowrap   text-[#1C3048] hover:text-[#2EC6B8]`}
        >
          Custom order
        </button>

        <button
          className={` max-xl:hidden px-4 max-2xl:px-3 py-2   text-[14px] flex items-center whitespace-nowrap   text-[#1C3048] hover:text-[#2EC6B8]`}
        >
          Pricing
          <img src="./icons/pricing.svg" alt="" className="ml-[8px] " />
        </button>
        <Box className=" relative block xl:hidden">
          <Button className="text-black px-2 min-w-[auto] peer ">
            <MoreHorizIcon />
          </Button>

          <Box
            className="hidden peer-hover:flex hover:flex
            w-[200px]
            flex-col bg-white drop-shadow-lg absolute rounded-[6px]"
            sx={{
              padding: "15px 15px",
              boxShadow: "0px 5px 12px 3px rgba(0, 0, 0, 0.16)",
            }}
          >
            <MenuItem
              // onClick={handleClose}
              sx={{
                fontSize: "14px",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#EDF0F9",
                },
              }}
            >
              Custom order
            </MenuItem>
            <MenuItem
              // onClick={handleClose}
              sx={{
                fontSize: "14px",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#EDF0F9",
                },
              }}
            >
              Pricing
              <img
                src="./icons/pricing.svg"
                alt=""
                className="ml-[8px] w-[20px] "
              />
            </MenuItem>
          </Box>
        </Box>
      </Box>
    </>
  );
}
