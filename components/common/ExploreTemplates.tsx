import { consoleShow } from "@/commonFunction/console";
import { getTemplateDataType } from "@/pages/api/type";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface props {
  category: string;
}

export default function ExploreTemplates({ category }: props) {
  const [data, setData] = useState<getTemplateDataType>();
  console.log("data: ", data);

  useEffect(() => {
    axios
      .post("https://craftyverse.in/templates/api/getCategoryDatas", {
        debug_key: "debug",
        cat_id: category,
        limit: 20,
        page: 1,
      })
      .then((res: any) => {
        console.log("res: ", res);
        setData(res?.data.datas);
      })
      .catch((err) => consoleShow("err", err));
  }, [category]);
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
          Start Explore Templates :)
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
        <Box className="hidden sm:block">
          <Box
            sx={{
              width: "75%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index < 5)
              .map((item: any, index: number) => (
                <Box key={index} sx={{ width: "18%", cursor: "pointer" }}>
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>
          <Box
            sx={{
              width: "90%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index > 5 && index < 12)
              .map((item: any, index: number) => (
                <Box
                  key={index}
                  sx={{ width: "14.66%", cursor: "pointer", my: "20px" }}
                >
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>

          <Box
            sx={{
              width: "75%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index > 12 && index < 18)
              .map((item: any, index: number) => (
                <Box key={index} sx={{ width: "18%", cursor: "pointer" }}>
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>
        </Box>

        <Box className="block sm:hidden">
          <Box
            sx={{
              width: "80%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index < 3)
              .map((item: any, index: number) => (
                <Box key={index} sx={{ width: "32.33%", cursor: "pointer" }}>
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index > 3 && index < 8)
              .map((item: any, index: number) => (
                <Box
                  key={index}
                  sx={{ width: "24%", cursor: "pointer", my: "20px" }}
                >
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>

          <Box
            sx={{
              width: "80%",
              justifyContent: "space-between",
              display: "flex",
              margin: "auto",
            }}
          >
            {data
              ?.filter((e: any, index: number) => index > 8 && index < 12)
              .map((item: any, index: number) => (
                <Box key={index} sx={{ width: "32.33%", cursor: "pointer" }}>
                  <img
                    src={item.template_thumb}
                    alt={item.template_thumb}
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
          </Box>
        </Box>
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
