import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import Skelton from "@/components/common/Skelton";
import { Box, Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function DashBoardSkelton() {
  const screenWidth = useScreenWidth();
  const sideBarRedux = useSelector((state: any) => state.actions.openSidebar);

  console.log("screenWidth: ", screenWidth);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[white] z-[1000]">
      <div className="h-[80px]"></div>

      <div className="flex">
        <div
          className=""
          style={{
            width: "15%",
            padding: "13px 10px   ",
            display: sideBarRedux ? "block" : "none",
          }}
        >
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"80%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"50%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"60%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
        </div>

        <div
          className="py-2 px-4   "
          style={{ width: sideBarRedux ? `85%` : "100%" }}
        >
          <Skeleton
            variant="rectangular"
            width={`100%`}
            height={`${270}px`}
            style={{
              borderRadius: `20px`,
              marginBottom: "10px",
            }}
          />
          <Box className="flex flex-col gap-5 py-[50px]">
            <Box className="flex items-center overflow-hidden scroll_none gap-[20px]  ">
              <Skelton
                width="250px"
                height="200px"
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text={"true"}
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
            <Box className="flex  items-center overflow-hidden scroll_none gap-[20px]  ">
              <Skelton
                width="250px"
                height="200px"
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text={"true"}
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
            <Box className="flex items-center overflow-hidden scroll_none gap-[20px] mb-5 ">
              <Skelton
                width="250px"
                height="200px"
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text={"true"}
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
