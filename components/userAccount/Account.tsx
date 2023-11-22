import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useScreenHeight } from "@/commonFunction/screenWidthHeight";
import { useEffect, useState } from "react";
import { tokenGet, tokenSet } from "@/redux/action/AuthToken";
import axios from "axios";
import { useRouter } from "next/router";

export const sidebarMenu = [
  {
    name: "Personal Info",
    icons: "/icons/profiile.svg",
    activeIcon: "/icons/profileActive.svg",
    path: "/profile",
  },
  {
    name: "Subscription",
    icons: "/icons/homeIcons.svg",
    activeIcon: "/icons/homeIconActive.svg",
    path: "/",
  },
  {
    name: "Payment History",
    icons: "/icons/homeIcons.svg",
    activeIcon: "/icons/homeIconActive.svg",
    path: "/",
  },
];

export default function Account() {
  const router = useRouter();
  const getData = tokenGet("userProfile");
  const [userProfile, setUserProfile] = useState<any>(null);
  const [imageBaseUrl, setImageBaseUrl] = useState<any>(null);
  const screenHeight = useScreenHeight();

  const fetchData = async () => {
    axios
      .post("https://story.craftyartapp.com/get/user", {
        key: "qwfsegxdhbxfjhncf",
        device_id: "",
        email: getData,
      })
      .then(({ data }) => {
        tokenSet("premium", data?.user?.is_premium === 1 ? "true" : "false");
        setImageBaseUrl(data?.url);
        setUserProfile(data?.user);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    if (getData == "") {
      setUserProfile(null);
    } else fetchData();
  }, [getData]);

  const ProfileImage = () => {
    return userProfile?.photo_uri !== "null" && userProfile?.photo_uri ? (
      userProfile?.photo_uri.includes("googleusercontent") ? (
        <img
          src={`${userProfile?.photo_uri}`}
          alt="Selected file preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <img
          src={`${imageBaseUrl}${userProfile?.photo_uri}`}
          alt="Selected file preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )
    ) : (
      <p
        style={{
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          fontSize: "23px",
          textTransform: "capitalize",
        }}
      >
        {userProfile?.name?.charAt(0)}
      </p>
    );
  };

  return (
    <div className="">
      <Box
        className="w-[360px] fixed left-0 top-[72px] bottom-0 "
        sx={{
          height: `${screenHeight - 65}px`,
          borderRight: "1px solid #D9D9D9",
        }}
      >
        <Box
          sx={{ borderBottom: "1px solid #D9D9D9" }}
          className="py-[30px] pl-[20px]"
        >
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <ProfileImage />
            </div>
            <div>
              <h4 className="mb-0">
                {userProfile?.name || userProfile?.displayName}
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  opacity: "0.7",
                  maxWidth: "173px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  marginBottom: "0",
                }}
              >
                {userProfile?.email}
              </p>
            </div>
          </Box>
        </Box>
        <Box className="py-[20px] px-[15px]">
          {sidebarMenu?.map((item) => (
            <Box
              sx={{
                borderTop:
                  item.name === "Refer and earn"
                    ? "1px dashed #1c304840"
                    : "none",
                borderBottom:
                  item.name === "Refer and earn"
                    ? "1px dashed  #1c304840"
                    : "none",
              }}
            >
              <Box
                className={`flex cursor-pointer py-3 px-3 w-full hover:bg-[#F4F7FE] ${
                  router.pathname === item.path && " bg-[#F4F7FE]"
                }    rounded-[4px]`}
                onClick={() => router.push(item.path)}
              >
                {/* <Box className="w-[3px] bg-[#2EC6B8] h-5px"></Box> */}
                <Box className="flex gap-5  w-full">
                  <Box className="w-[20px]">
                    <img
                      src={true ? item.activeIcon : item.icons}
                      alt="Icons"
                    />
                  </Box>
                  <Typography
                    className={`text-[15px] font-medium ${
                      true ? " active_text_linear " : "text-black opacity-60"
                    }`}
                  >
                    {item.name}
                  </Typography>
                  {item.name === "Templates" && (
                    <img
                      src="/icons/rightArrow.svg"
                      alt="rightArrow"
                      className="w-[6px] ml-auto"
                    />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}
