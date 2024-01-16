import api from "@/src/clientApi/api";
import { UserProfileType } from "@/src/interface/commonType";
import { userPremium } from "@/src/redux/action/AuthToken";
import { customerId, userData } from "@/src/redux/reducer/AuthDataReducer";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { Box, Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const [userProfile, setUserProfile] = useState<UserProfileType | any>(null);
  const [imageBaseUrl, setImageBaseUrl] = useState<any>(null);

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    api
      .getUserData()
      .then(({ user, url }) => {
        userPremium(`${user?.is_premium}`);
        dispatch(userData(user));
        setImageBaseUrl(url);
        setUserProfile(user);
        dispatch(customerId(user?.stripe_cus_id));
      })
      .catch((error) => {});
  }, []);

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
    <>
      <Box className="flex items-center">
        <Box onClick={handleClick} className="cursor-pointer">
          <Box className="rounded-[50%] w-[40px] h-[40px] overflow-hidden">
            <ProfileImage />
          </Box>
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
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
        </MenuItem>
        <Divider />
        <MenuItem
          className="text-[14px]"
          onClick={() => {
            router.push("/your-account");
            setAnchorEl(null);
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            dispatch(openSidebar(false));
            Cookies.remove("rememberMe");

            Cookies.remove("_sdf", { domain: ".craftyartapp.com" });
            Cookies.remove("premium", { domain: ".craftyartapp.com" });

            Cookies.remove("_sdf");
            Cookies.remove("premium");

            window.location.reload();
          }}
          className="text-[14px] mb-3"
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
}
