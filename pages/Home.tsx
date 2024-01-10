import { decryptData } from "@/aes-crypto";
import { authCookiesGet, setCC } from "@/redux/action/AuthToken";
import { Box } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const FooterImport = dynamic(() => import("@/components/footer/Footer"));
const HeaderImport = dynamic(() => import("@/components/header/Header"));
const TemplateModalImport = dynamic(
  () => import("@/components/singleTemplate/TemplateModal")
);

const IndexImport = dynamic(() => import("@/private/Index"));
const MobileBottomBarImport = dynamic(
  () => import("@/components/common/MobileBottomBar")
);

export default function Home(Props: any) {
  const router = useRouter();
  const id = router.query;
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const token = authCookiesGet();

  useEffect(() => {
    axios.get("/api/get/getIp").then((res) => {
      const ip: any = JSON.parse(decryptData(res?.data));

      axios
        .post("/api/get/getCountryCode", { ip: ip?.ip })
        .then((response: any) => {
          const res: any = JSON.parse(decryptData(response?.data));
          setCC(res?.countryCode);
        });
    });
  }, []);
  return (
    <div>
      <Box>
        <HeaderImport
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Box
          sx={{
            marginLeft: sidebarOpen ? "250px" : "0",
            marginTop: "70px",
          }}
          className="max-lg:ml-0 max-sm:mb-[80px]"
        >
          <div style={{ zIndex: "5000000000000000", position: "fixed" }}>
            <Toaster />
          </div>

          {Props?.children}

          <Box>{!token && <FooterImport />}</Box>
        </Box>
      </Box>

      <TemplateModalImport open={id?.templates ? true : false} />

      <MobileBottomBarImport />
      <IndexImport />
    </div>
  );
}
