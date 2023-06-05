import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Box className="flex items-center">
        <Button className="min-w-[20px] h-[30px]">
          <img
            src="./icons/notification.svg"
            alt="notification"
            className="w-[20px]"
          />
        </Button>
        <Button onClick={handleClick}>
          <Box className="rounded-[50%] w-[40px] h-[40px] overflow-hidden">
            <img
              src={`./images/profileImage.png`}
              alt="Selected file preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Button>
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
              {/* {userProfile?.photo_uri ? (
                userProfile?.photo_uri?.includes("googleusercontent") ? (
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
                <div
                  style={{
                    background:
                      "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "30px",
                    textTransform: "capitalize",
                  }}
                >
                  {userProfile?.name?.charAt(0)}
                </div>
              )} */}

              <img
                src={`./images/profileImage.png`}
                alt="Selected file preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <Box>
              <Typography className="font-medium">
                {/* {userProfile?.name || userProfile?.displayName} */}
                Infiapp Solution
              </Typography>
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
                {/* {userProfile?.email} */}
                infiappsolution@gmail.com
              </p>
            </Box>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem
          //   onClick={() => {
          //     navigate("/subscriptions", { state: userProfile });
          //     setAnchorEl(null);
          //   }}
          className="text-[14px]"
        >
          My Account
        </MenuItem>
        <MenuItem className="text-[14px]">My Project</MenuItem>
        <MenuItem
          // onClick={handleClose}
          className="text-[14px] mb-3"
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
}
