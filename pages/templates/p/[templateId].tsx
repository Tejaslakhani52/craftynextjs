import { calculateHeight } from "@/commonFunction/calculateHeight";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import TemplateModal, {
  IconsText,
} from "@/components/singleTemplate/TemplateModal";
import {
  modalClosePath,
  openTempModal,
  tempId,
} from "@/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

export default function templateId() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentPathname = router.query;
  const screenWidth = useScreenWidth();
  const [anotherData, setAnotherData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);
  const [template, setTemplate] = React.useState<any>({});
  console.log("template: ", template);
  const openModal = useSelector((state: any) => state.actions.openTempModal);
  const tempIdValue = useSelector((state: any) => state.actions.tempId);
  const [description, setDescription] = React.useState<string>("");

  var templateIds: any;
  if (typeof window !== "undefined" && !openModal) {
    const pathSegments = window.location.pathname.split("/");
    templateIds = pathSegments[pathSegments.length - 1];
  }

  const fetchPosterData = (templateIds: any) => {
    axios
      .post(
        "/api1/my-posterPage",
        {
          key: "qwfsegxdhbxfjhncf",
          id_name: templateIds,
        },
        { withCredentials: false }
      )
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setTemplate(getData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const fetchSearchData = () => {
    axios
      .post("/api1/search-template", {
        key: "qwfsegxdhbxfjhncf",
        app_id: "1",
        cat_id: "-1",
        keywords: template?.tags?.[0] as any,
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
        setAnotherData(getData);
      })
      .catch((error: any) => {
        console.log("error: ", error);
      });
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetchPosterData(templateIds);
    }, 100);
  }, [templateIds]);

  React.useEffect(() => {
    // setIsLoading(true);
    fetchSearchData();
  }, [template]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.5;
      case screenWidth > 1200:
        return 5.5;
      case screenWidth > 1023:
        return 4.5;
      case screenWidth > 700:
        return 3.5;
      case screenWidth > 600:
      case screenWidth > 550:
        return 4;
      default:
        return 3;
    }
  }, [screenWidth]);

  React.useEffect(() => {
    const element: any = document.getElementById(tempIdValue);
    element?.scrollIntoView();
  }, [anotherData]);

  React.useEffect(() => {
    const formattedText = template?.description
      ?.replace(/\r\n\r\n/g, "\n\n")
      ?.replace(/\r\n/g, "\n");
    // const description = formattedText || "";
    // const words = description.split(" ");
    // const truncatedDescription = words.slice(0, 10).join(" ");
    setDescription(formattedText);
  }, [template]);

  return (
    <Box className="px-[40px] py-2">
      <Head>
        <title>{template?.template_name}</title>
        <meta
          content="description"
          name={`Design with ${template?.template_name}: Ignite Your Imagination, Create Unique Art, and Inspire Awe. Start Design Crafting Today with Crafty Art!`}
        />
      </Head>
      <Box className="flex h-[450px]  my-[20px] gap-[50px]">
        {isLoading ? (
          <>
            <Skeleton
              variant="rectangular"
              width={"66%"}
              height={`100%`}
              style={{
                borderRadius: `5px`,
              }}
            />
          </>
        ) : (
          <Box className="w-[66%] rounded-[4px] bg-[#F4F7FE] flex justify-center items-center">
            <img
              src={template?.url + template?.template_thumb}
              alt=""
              className="h-[430px] w-auto rounded-[4px]"
              style={{ border: "1px solid #80808059" }}
            />
          </Box>
        )}
        <Box className="w-[33%]">
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={`20px`}
              style={{
                borderRadius: `30px`,
              }}
            />
          ) : (
            <h1 className="text-[#1C3048] text-[24px] font-[500] mb-3">
              {template?.template_name}
            </h1>
          )}

          <Typography className="text-[#ABB2C7] text-[15px] mb-4">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={"35%"}
                height={`20px`}
                style={{
                  borderRadius: `30px`,
                  margin: "10px 0",
                }}
              />
            ) : (
              template?.category_size
            )}
          </Typography>

          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={`40px`}
              style={{
                borderRadius: `4px`,
                margin: "10px 0",
              }}
            />
          ) : (
            <a
              href={`https://editor.craftyartapp.com/${template?.id_name}`}
              target="_blank"
              className="text-white w-full py-[10px] rounded-[6px] flex items-center justify-center gap-3"
              style={{
                background:
                  "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
              }}
            >
              <img
                src="/icons/pricing.svg"
                alt=""
                className="w-[22px] ml-[8px]"
                style={{ display: template?.is_premium ? "block" : "none" }}
              />
              Customize this template
            </a>
          )}

          <div className="py-4">
            <IconsText
              image="/icons/TmodalCustomize.svg"
              text="100% Customize with online editing tools"
              isLoading={isLoading}
            />
            <IconsText
              image="/icons/TmodalSmartphone.svg"
              text="Edit and download on the go"
              isLoading={isLoading}
            />
            <IconsText
              image="/icons/TmodalPublish.svg"
              text="Share and publish anywhere"
              isLoading={isLoading}
            />
            <IconsText
              image="/icons/TmodalBacked.svg"
              text="Backed by our happiness Guarantee"
              isLoading={isLoading}
            />

            <IconsText
              image="/icons/TmodalAccess.svg"
              text="Access 10,000+ all inclusive templates"
              isLoading={isLoading}
            />
          </div>
        </Box>
      </Box>

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={"40%"}
          height={`20px`}
          style={{
            borderRadius: `30px`,
            margin: "40px 0 30px",
          }}
        />
      ) : (
        <h2 className="text-[#1C3048] text-[23px] font-[500] pt-4 my-3">
          Templates with the same style and concept
        </h2>
      )}

      <Box>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={`500px`}
            style={{
              borderRadius: `4px`,
              margin: "10px 0",
            }}
          />
        ) : (
          <Box sx={{ minHeight: "500px" }}>
            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
              {anotherData?.datas
                ?.filter((t: any) => t.template_id !== template?.template_id)
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
                    onClick={() => {
                      // const newPath = `/templates/p/${templates.id_name}`;
                      // window.history.pushState({}, "", newPath);
                      // dispatch(openTempModal(true));

                      dispatch(tempId(`content${index}`));
                      dispatch(modalClosePath(`templates/p/${templateIds}`));
                    }}
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
                      </div>
                    </Link>
                  </div>
                ))}
            </StackGrid>
            <Box className="my-[50px] w-[90%] mx-auto">
              <h2 className="text-[23px] text-[#1C3048] font-medium mb-3">
                {template?.h2_tag}
              </h2>

              <Typography className="text-[15px] whitespace-pre-line		">
                {" "}
                {description}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <TemplateModal
        open={openModal}
        currentPathname={`/templates/p/${currentPathname?.templateId}`}
      />
    </Box>
  );
}
