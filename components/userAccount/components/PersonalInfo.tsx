import { tokenGet } from "@/redux/action/AuthToken";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function PersonalInfo() {
  const uId = tokenGet("userProfile");
  const [removeImage, setRemoveImage] = useState<any>(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [imageBaseUrl, setImageBaseUrl] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [editNameInput, setEditNameInput] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [acountDetail, setacountDetail] = useState<any>({
    name: "",
    user_id: "",
    updateDp: 0,
    photo_uri: null,
  });

  useEffect(() => {
    setacountDetail({
      ...acountDetail,
      name: userProfile?.name,
      user_id: userProfile?.uid,
    });
  }, [userProfile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        const imageUrl: any = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setacountDetail({ ...acountDetail, photo_uri: file, updateDp: 1 });
      }
    }
  };

  const handleFileRemove = () => {
    setacountDetail({ ...acountDetail, photo_uri: null, updateDp: 1 });
    setImagePreview(null);
    setRemoveImage(true);
  };

  const fetchData = async () => {
    axios
      .post("/api1/get/user", {
        key: "qwfsegxdhbxfjhncf",
        device_id: "",
        email: uId,
      })
      .then(({ data }: any) => {
        setImageBaseUrl(data?.url);
        setUserProfile(data?.user);
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [uId]);

  const updateFetchData = (event: any) => {
    const formData = new FormData();
    formData.append("key", "qwfsegxdhbxfjhncf");
    formData.append("name", acountDetail?.name);
    formData.append("user_id", acountDetail?.user_id);
    formData.append("updateDp", acountDetail?.updateDp);
    formData.append("photo_uri", acountDetail?.photo_uri);

    setLoading(true);

    axios
      .post("/api2/templates/api/V3/updateUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setTimeout(() => {
          fetchData();
          toast.success("User updated successfully");
          window.location.reload();
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <Box>
      <Typography variant="h1" className="font-semibold text-[24px]">
        Personal Info
      </Typography>

      <Box className="w-[60%] max-xl:w-full">
        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">
            Profile Photo
          </Typography>
          <Box
            className="flex justify-between items-end pb-4"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box
              style={{
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                overflow: "hidden",
              }}
            >
              {/* {profilePhoto} */}

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Selected file preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {userProfile?.photo_uri !== "null" &&
              userProfile?.photo_uri &&
              !removeImage ? (
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
              )}
            </Box>

            <Box className="flex items-center gap-3">
              <Button
                className="h-[35px] normal-case px-[20px] text-black"
                onClick={handleFileRemove}
              >
                Remove
              </Button>

              <Button className="bg-[#E9EDF6] h-[35px] normal-case px-[20px] text-black">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="imageUpload">Change Photo</label>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">Name</Typography>
          <Box
            className="flex justify-between items-end pb-4 gap-2"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box className="w-full">
              {editNameInput ? (
                <input
                  type="text"
                  className="w-full h-[40px] px-[10px] border_linear_1px rounded-[4px]"
                  placeholder="name"
                  value={acountDetail?.name}
                  onChange={(e) =>
                    setacountDetail({
                      ...acountDetail,
                      name: e.target.value,
                    })
                  }
                  autoFocus={true}
                />
              ) : (
                <Typography>{acountDetail?.name}</Typography>
              )}
            </Box>

            {editNameInput ? (
              <Box className="flex items-center gap-2">
                <Button
                  className="bg-[#E9EDF6] h-[40px] normal-case px-[20px] text-black"
                  onClick={() => {
                    setEditNameInput(false);
                    setacountDetail({
                      ...acountDetail,
                      name: userProfile?.name,
                    });
                  }}
                >
                  Cancle
                </Button>

                <Button
                  className="bg_linear h-[40px] normal-case px-[20px] text-white"
                  onClick={() => setEditNameInput(false)}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Button
                className="bg-[#E9EDF6] h-[40px] normal-case px-[20px] text-black"
                onClick={() => setEditNameInput(true)}
              >
                Edit
              </Button>
            )}
          </Box>
        </Box>

        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">
            Email Address
          </Typography>
          <Box
            className="flex justify-between items-end pb-4 gap-2"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box className="w-full">
              <Typography className="opacity-[0.7] font-medium">
                {userProfile?.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="py-14 flex justify-end max-2md:justify-center">
          <Button
            className="bg_linear h-[40px] normal-case px-[80px] max-sm:w-full text-white"
            onClick={updateFetchData}
          >
            Save
          </Button>
        </Box>
      </Box>

      {loading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </Box>
  );
}
