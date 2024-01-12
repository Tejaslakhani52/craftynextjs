import api from "@/src/clientApi/api";
import { consoleShow } from "@/src/commonFunction/console";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import TemplateModal from "@/src/components/singleTemplate/TemplateModal";
import { DashboardDataType } from "@/src/interface/dashboard";
import { AuthStateType } from "@/src/interface/stateType";
import { templatesData } from "@/src/redux/reducer/AuthDataReducer";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplatesSkelton from "../TemplatesSkelton";
import TemplatesBoxes from "./components/TemplatesBoxes";

export default function TemplatesBox() {
  const screenWidth = useScreenWidth();
  const [openModal, setOpenModal] = React.useState(false);
  const [idName, setIdName] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state: AuthStateType) => state.auth.templatesData);

  useEffect(() => {
    api
      .getDashboardData()
      .then((res: DashboardDataType) => {
        dispatch(templatesData(res));
      })
      .catch((err: any) => consoleShow("err", err));
  }, []);

  const height = useMemo(() => {
    let val;

    if (screenWidth) {
      if (screenWidth < 600) {
        val = 100;
      } else val = 200;
    }

    return val;
  }, [screenWidth]);

  return (
    <Box className="px-[20px] max-sm:px-[10px] pb-10">
      {data?.length > 0
        ? data?.map((item: DashboardDataType, index: number) => (
            <Box key={index}>
              <TemplatesBoxes
                item={item}
                setOpenModal={setOpenModal}
                setIdName={setIdName}
                height={height}
              />
            </Box>
          ))
        : true && <TemplatesSkelton />}

      <TemplateModal
        open={openModal}
        id={idName}
        setOpen={setOpenModal}
        setId={setIdName}
        currentPathname={router?.asPath}
      />
    </Box>
  );
}
