import { Box, Rating, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LeftImageSection from "../wedding/components/LeftImageSection";
import { MarkText } from "@/components/Home/landingPage/LandingPage";
import RightImageSection from "../wedding/components/RightImageSection";
import GetTemplates from "@/components/common/GetTemplates";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import FaqsBox from "@/components/common/FAQs";
import WithCraftyartBanner from "@/components/common/WithCraftyartBanner";
import CustomerSayingSmall from "@/components/common/CustomerSayingSmall";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function index() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const [value, setValue] = React.useState(0);
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
    <div>
      <Box className="bg-[#F4F7FE] py-[50px] max-sm:py-[20px]  px-[15px]">
        <Typography className="text-[50px] max-sm:text-[28px] text-center font-[700] mb-2">
          Instantly Remove Background from Images
        </Typography>

        <Typography className="text-center font-medium text-[20px] ">
          How to Remove Backgrounds Like a Pro? 
        </Typography>

        <Box className="flex items-center gap-[100px] max-sm:gap-[35px] w-[80%] max-sm:w-full  mx-auto py-[50px]  max-sm:py-[20px]  max-md:flex-col">
          <Box className="flex-1">
            <img src="/images/bg_remove.png" alt="" />
          </Box>
          <Box className="flex-1 max-md:w-full">
            <div
              className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[50px] rounded-[5px] "
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
              <button
                onClick={handleButtonClick}
                className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
              >
                Upload Image
              </button>

              <div>
                <h2 className="font-medium text-center mb-2">
                  or drag and drop here to remove background
                </h2>

                <p className="text-center text-[14px]">
                  {" "}
                  JPEG, JPG, PNG or WEBP
                </p>
              </div>
            </div>

            <div className="my-4">
              <Typography className="text-center font-medium">
                You have no image? Try one of these
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>

      <div className="flex justify-center py-[50px] max-md:py-[30px] px-[15px]">
        <h2 className="text_linear text-[40px] text-center max-sm:text-[28px] font-semibold">
          Visualize the power of Remover
        </h2>
      </div>

      <Box sx={{ width: "100%", mx: "auto" }}>
        <Box sx={{ px: "15px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              justifyContent: "space-between",
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "space-between", md: "center" },
                gap: { xs: "0", md: "50px" },
                overflow: "auto",
              },
              "& .MuiTabs-flexContainer::-webkit-scrollbar": {
                display: "none",
              },
              "& .MuiTabs-indicator": {
                background:
                  "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
              },
            }}
          >
            <Tab
              label="People"
              {...a11yProps(0)}
              sx={{
                "&.MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { sm: "18px" },
                  minWidth: "auto",
                },

                "&.Mui-selected": {
                  color: "transparent",
                  background:
                    "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  backgroundClip: "text",
                },
              }}
            />
            <Tab
              label="Product"
              {...a11yProps(1)}
              sx={{
                "&.MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { sm: "18px" },
                  minWidth: "auto",
                },

                "&.Mui-selected": {
                  color: "transparent",
                  background:
                    "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  backgroundClip: "text",
                },
              }}
            />
            <Tab
              label="Car"
              {...a11yProps(2)}
              sx={{
                "&.MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { sm: "18px" },
                  minWidth: "auto",
                },

                "&.Mui-selected": {
                  color: "transparent",
                  background:
                    "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  backgroundClip: "text",
                },
              }}
            />
            <Tab
              label="Animals"
              {...a11yProps(2)}
              sx={{
                "&.MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { sm: "18px" },
                  minWidth: "auto",
                },

                "&.Mui-selected": {
                  color: "transparent",
                  background:
                    "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  backgroundClip: "text",
                },
              }}
            />
            <Tab
              label="Graphics"
              {...a11yProps(2)}
              sx={{
                "&.MuiButtonBase-root": {
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { sm: "18px" },
                  minWidth: "auto",
                },

                "&.Mui-selected": {
                  color: "transparent",
                  background:
                    "linear-gradient(268deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  backgroundClip: "text",
                },
              }}
            />
          </Tabs>
        </Box>
        <Box className=" ">
          <CustomTabPanel value={value} index={0}>
            <img
              src="/images/bgRemove/people.png"
              alt=""
              className="w-[80%] max-md:w-full mx-auto block"
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <img
              src="/images/bgRemove/graphic.png"
              alt=""
              className="w-[80%] max-md:w-full mx-auto block"
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <img
              src="/images/bgRemove/car.png"
              alt=""
              className="w-[80%] max-md:w-full mx-auto block"
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <img
              src="/images/bgRemove/animals.png"
              alt=""
              className="w-[80%] max-md:w-full mx-auto block"
            />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <img
              src="/images/bgRemove/product.png"
              alt=""
              className="w-[80%] max-md:w-full mx-auto block"
            />
          </CustomTabPanel>
        </Box>
      </Box>

      <Box className="bg_linear py-[60px] my-[40px] px-[15px]">
        <Typography className="text-[40px] max-sm:text-[28px] text-white font-semibold text-center pb-8">
          How to use the free background remover
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-md:gap-[60px] w-[85%] max-xl:w-full mx-auto mt-[30px] md:mt-[50px] ">
          <Box
            className="bg-[#ffff] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="mt-[-60px]">
              <img
                src="/images/bgRemove/uploadImage.png"
                alt=""
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Upload Image
            </Typography>

            <Typography className="text-center">
              Begin by uploading the desired image to the background removal
              tool. This can be done by either selecting the image from your
              computer or dragging and dropping it into the designated area.
            </Typography>
          </Box>
          <Box
            className="bg-[#ffff] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="mt-[-60px]">
              <img
                src="/images/bgRemove/rb.png"
                alt=""
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Remove Background
            </Typography>

            <Typography className="text-center">
              Once the image is uploaded, the tool will process it and
              automatically detect the background. With a single click or
              selection, the background will be removed, leaving the main
              subject or object of the image isolated.
            </Typography>
          </Box>
          <Box
            className="bg-[#ffff] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="mt-[-60px]">
              <img
                src="/images/bgRemove/download.png"
                alt=""
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Download
            </Typography>

            <Typography className="text-center">
              After the background has been successfully removed, you can
              download the edited image. Simply click on the download button to
              save the image to your computer or device in your preferred file
              format.
            </Typography>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="Can background remover feature
          handle complex backgrounds?"
        point={
          <Box>
            <MarkText text="Can handle complex backgrounds, but accuracy may vary" />
            <MarkText text="May struggle with similar colours or patterns between foreground and background" />
            <MarkText text="Can handle multiple foreground elements if distinguishable from background" />
            <MarkText text="May require manual refinements or adjustments to achieve accurate results" />
            <MarkText text="May take longer to process images with complex backgrounds" />
          </Box>
        }
        buttonName={"Upload Image"}
        image="/images/bgRemove/brFeature.png"
      />

      <RightImageSection
        title="How can I improve the accuracy of
          the background remover feature?"
        point={
          <Box>
            <MarkText text="Use high-resolution images with clear contrast " />
            <MarkText text="Choose images with solid colours or simple patterns in background" />
            <MarkText text="Manually refine selection with brush tool or adjust threshold settings" />
            <MarkText text="Use additional features or plugins, such as edge refinement or colour adjustment tools" />
            <MarkText text="Can fine-tune selection and eliminate any remaining artefacts or noise" />
          </Box>
        }
        buttonName={"Upload Image"}
        image="/images/bgRemove/brImprove.png"
      />

      <LeftImageSection
        title="How does the background remover
          save time and improve workflow?"
        point={
          <Box>
            <MarkText
              text="The background remover eliminates the need for manual editing or hiring a
professional designer."
            />
            <MarkText text="You can remove backgrounds in seconds, without any special skills or expertise." />
            <MarkText
              text="The tool is available on-the-go, allowing you to remove backgrounds anytime,
anywhere."
            />
            <MarkText text="With a professional finish, you can impress clients and enhance your brand image." />
            <MarkText
              text="You can save time and effort for other important tasks, such as creating designs
and generating ideas."
            />
          </Box>
        }
        buttonName={"Upload Image"}
        image="/images/bgRemove/brWork.png"
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />
      <GetTemplates
        heading="Say goodbye to tedious background removal with our powerful and user-friendly
          background remover tool."
        text="Remove Backgrounds Like a Pro and Design Like Never Before"
        bt_name="Remove Background"
        navigate="/templates/invitation-card"
      />

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] my-[30px] lg:my-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. Is the background remover easy to use?"
          text="Yes, it's very easy! Just upload your image, select the background remover, highlight the object you want to keep and
            the background you want to remove, preview and save your image with the new background."
        />
        <FaqsBox
          heading="2. Can the background remover handle all types of images?"
          text="It can handle a lot of different types of images but there may be cases where it's not as accurate. However, it uses
            advanced algorithms to handle complex images with multiple objects and intricate details."
        />

        <FaqsBox
          heading="3. Will the background remover affect the quality of my image?"
          text="No, it won't! You can expect a professional finish with clean edges and no loss of detail. Just ensure that the resolution
            of your original image is high enough."
        />

        <FaqsBox
          heading="4. Can I undo or redo my edits in the background remover?"
          text="Yes, you can easily undo or redo your edits until you achieve the desired result. You can also manually add or remove
            portions of the image, giving you full control over the editing process."
        />

        <FaqsBox
          heading="5. Do I need any special skills or software to use the background remover?"
          text="No, you don't need any special skills or software. It's a web-based tool that's accessible from any device with an internet
            connection. It's designed to be user-friendly for everyone, whether you're a professional designer, student or marketer."
        />
      </Box>
    </div>
  );
}
