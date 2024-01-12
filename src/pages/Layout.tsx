import { authCookiesGet, setCC } from "@/src/redux/action/AuthToken";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import api from "../clientApi/api";

const FooterImport = dynamic(() => import("@/src/components/footer/Footer"));
const HeaderImport = dynamic(() => import("@/src/components/header/Header"));

const IndexImport = dynamic(() => import("@/src/private/Index"));
const MobileBottomBarImport = dynamic(
  () => import("@/src/components/common/MobileBottomBar")
);

export default function Home(Props: any) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(authCookiesGet());
    }

    api.getIp().then((res) => {
      api.getCountryCode({ ip: res?.ip }).then((response: any) => {
        setCC(response?.countryCode);
      });
    });
  }, []);

  return (
    <Box>
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

      <MobileBottomBarImport />
      <IndexImport />
    </Box>
  );
}
