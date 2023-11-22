import { calculateHeight } from "@/commonFunction/calculateHeight";
import { consoleShow } from "@/commonFunction/console";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/commonFunction/screenWidthHeight";
import { getTemplateDataType } from "@/pages/api/type";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";

interface props {
  category: string;
}

export default function ExploreTemplates({ category }: props) {
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [data, setData] = useState<getTemplateDataType>();

  useEffect(() => {
    axios
      .post("https://story.craftyartapp.com/search-template", {
        key: "qwfsegxdhbxfjhncf",
        app_id: "1",
        cat_id: "-1",
        keywords: lastSegment,
        device: "0",
        refWidth: "1080",
        refHeight: "1080",
        page: 1,
        debug: "debug",
      })
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setData(getData?.datas);
      })
      .catch((err) => consoleShow("err", err));
  }, [lastSegment]);
  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6;
      case screenWidth > 1200:
        return 4.3;
      case screenWidth > 1023:
        return 4.3;
      case screenWidth > 700:
        return 3.3;

      case screenWidth > 550:
        return 3.3;

      case screenWidth > 250:
        return 2.4;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  return (
    <Box>
      <Box sx={{ width: "90%", margin: "50px auto" }}>
        <Typography
          sx={{
            color: "#1C3048",
            textAlign: "center",
            fontWeight: "500",
          }}
          className="text-[25px] sm:text-[36px]"
        >
          Start Explore Templates :
        </Typography>

        <Typography
          sx={{
            color: "#1C3048",
            fontSize: "18px",
            textAlign: "center",
            fontWeight: "500",
            mt: "20px",
            mb: "40px",
          }}
        >
          Get a headstart with fully customizable templates
        </Typography>

        <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
          {data
            ?.filter((e: any, index: number) => index < 20)
            ?.map((templates: any, index: number) => (
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
                id={`content${index}`}
              >
                <Link
                  href={`/?templates=${templates.id_name}`}
                  as={`/templates/p/${templates.id_name}`}
                  scroll={false}
                  shallow={true}
                >
                  <div className="w-full h-full p-[8px]">
                    <img
                      src={templates?.template_thumb}
                      alt={templates?.category_name}
                      className={`w-full] rounded-[5px] cursor-pointer`}
                      style={{
                        border: "1px solid #80808082",
                        height: "100%",
                      }}
                    />

                    <div className="pt-2">
                      <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
                        {templates?.template_name}
                      </p>
                      <p className="text-[#ABB2C7] text-[13px] pb-1">
                        {templates?.category_name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </StackGrid>

        <Box sx={{ display: "flex", justifyContent: "center", p: "30px" }}>
          <button
            style={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
              width: "fit-content",
              fontSize: "17px",
              textTransform: "unset",
              borderRadius: "10px",
              fontWeight: "500",
              color: "white",
            }}
            className="bg_linear py-[10px] px-[15px]"
          >
            Get All Templates
          </button>
        </Box>
      </Box>
    </Box>
  );
}
