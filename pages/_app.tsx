import { useScreenHeight } from "@/commonFunction/screenWidthHeight";
import MobileBottomBar from "@/components/common/MobileBottomBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import Index from "@/private/Index";
import { authCookiesGet } from "@/redux/action/AuthToken";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export async function getStaticProps() {
  const router = useRouter();
  const res = await fetch(`http://localhost:3000${router.pathname}`);
  const html = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const paragraphElement = doc.querySelector("p");
  const paragraphContent = paragraphElement?.textContent;

  return {
    props: {
      paragraphContent,
    },
  };
}

export default function App({
  Component,
  pageProps,
}: AppProps & { paragraphContent: string }) {
  const router = useRouter();
  const id = router.query;
  const str = router.pathname.substring(1);
  const screenHeight = useScreenHeight();
  let words = str.split(" ");
  let convertedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let convertedString = convertedWords.join(" ");
  const canonicalUrl = `https://craftyartapp.com${router.asPath}`;
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const token = authCookiesGet();

  return (
    <>
      <Provider store={store}>
        <Box>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Box
            sx={{
              marginLeft: sidebarOpen ? "250px" : "0",
              marginTop: "70px",
              // transition: "0.1s all",
              minHeight: `${screenHeight - 568}px`,
            }}
            className="max-lg:ml-0 max-sm:mb-[80px]"
          >
            <div style={{ zIndex: "5000000000000000", position: "fixed" }}>
              <Toaster />
            </div>
            <Component {...pageProps} />
            {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
          </Box>
          <Box>{!token && <Footer />}</Box>
          {/* <MainLoader /> */}
        </Box>

        <TemplateModal open={id?.templates ? true : false} />

        {/* <MainLoaderBox /> */}

        <MobileBottomBar />
        <Index />
      </Provider>
    </>
  );
}
