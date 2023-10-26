import { consoleShow } from "@/commonFunction/console";
import api from "@/pages/api/api";
import { getTemplateDataType } from "@/pages/api/type";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CustomInvitations() {
  const [data, setData] = useState<getTemplateDataType>();
  console.log("data: ", data);

  useEffect(() => {
    axios
      .post("https://story.craftyartapp.com/get/datas", {
        debug_key: "debug",
        cat_id: "a4-invitation",
        limit: 10,
        page: 1,
      })
      .then((res: any) => {
        console.log("res: ", res);
        setData(res?.data.datas);
      })
      .catch((err) => consoleShow("err", err));
  }, []);

  return (
    <Box className="h-[516px] sm:h-[693px]  bg-[url('/images/customeinvitation.png')]  bg-cover bg-no-repeat mt-[-100px]  xl:mt-[-142px] bg-[#F4F7FE] 5xl:bg_linear px-[20px]   bg-top max-2sm:h-auto  max-2sm:pt-[50px]	">
      {/* <Box className="h-[693px] bg_linear mt-[-171px]  middle_round  bg-center	"> */}
      <Box className="flex flex-col items-center pt-14 gap-5  pt-[230px] max-sm:pt-[169px] max-2sm:pt-[100px]">
        <Typography
          className="text-[47px] font-bold text-white text-center max-sm:text-[28px]"
          variant="h1"
        >
          Create Custom Invitations with Ease
        </Typography>
        <Box className="flex flex-col items-center gap-2 ">
          <Typography className="text-[18px] font-medium text-white text-center">
            Customize invitations for any occasion with our easy-to-use
            Invitation customization tool.
          </Typography>
        </Box>

        <Button
          sx={{
            textTransform: "unset",
            fontSize: "14px",
            fontWeight: "500",
            color: "white",
            whiteSpace: "nowrap",
            opacity: "1",
            width: "180px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          className="bg-white text-black py-2"
        >
          Get Started
        </Button>
      </Box>

      <Box className=" items-center gap-[2%] justify-center mt-14  max-2sm:mt-12 hidden sm:flex">
        {data
          ?.filter((e: any, index: number) => index > 0 && index < 6)
          ?.map((item: any, index: number) => {
            console.log("index: ", index);
            let width;
            switch (true) {
              case index === 1:
                width = 200;
                break;
              case index === 2:
                width = 242;
                break;
              case index === 3:
                width = 200;
                break;
              default:
                width = 169;
            }
            return (
              <Box
                sx={{
                  width: `${width}px`,
                  filter: "  drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25))",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img src={item?.template_thumb} alt={item?.template_thumb} />
              </Box>
            );
          })}
      </Box>
      <Box className="flex items-center gap-[2%] justify-center mt-10 mb-5  max-2sm:mt-12 sm:hidden">
        {data
          ?.filter((e: any, index: number) => index > 0 && index < 4)
          ?.map((item: any, index: number) => {
            console.log("index: ", index);
            let width;
            switch (true) {
              case index === 0:
                width = 200;
                break;
              case index === 1:
                width = 242;
                break;
              case index === 2:
                width = 200;
                break;
              default:
                width = 169;
            }
            return (
              <Box
                sx={{
                  width: `${width}px`,
                  filter: "  drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25))",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img src={item?.template_thumb} alt={item?.template_thumb} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
