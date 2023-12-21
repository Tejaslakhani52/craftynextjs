import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useState } from "react";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import store from "@/redux/store";
import { Provider, useSelector } from "react-redux";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { Toaster } from "react-hot-toast";
import MainLoader from "@/components/common/MainLoader";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { useScreenHeight } from "@/commonFunction/screenWidthHeight";
import MainLoaderBox from "@/components/common/MainLoaderBox";
import MobileBottomBar from "@/components/common/MobileBottomBar";

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

  console.log("str: ", str);
  let words = str.split(" ");
  let convertedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let convertedString = convertedWords.join(" ");
  const canonicalUrl = `https://craftyartapp.com${router.asPath}`;
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const token = authCookiesGet();

  // if (token && str === "login") {
  //   router.push("/");
  // }

  // if (typeof window !== "undefined") {
  //   console.log("burl", window?.location?.pathname);
  // }

  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="canonical" href={canonicalUrl} />
          <title>
            {router.pathname === "/"
              ? "CraftyArt"
              : `${convertedString} | CraftyArt`}
          </title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content={"Customize your Design in just few Clicks!"}
          />
          {/* <meta property="og:title" content={router.pathname.substring(1)} /> */}
          <meta property="og:title" content={"craftyArt"} />
          <meta
            property="og:description"
            content={"Customize your Design in just few Clicks!"}
          />
          <meta property="og:image" content={"/images/logo.svg"} />
          <meta property="og:image:width" content={"200"} />
          <meta property="og:image:height" content={"100"} />
          <meta property="og:image:alt" content={"craftyArt Logo"} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
        </Head>

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
          {!token && <Footer />}
          {/* <MainLoader /> */}
        </Box>

        <TemplateModal open={id?.templates ? true : false} />

        <MainLoaderBox />

        <MobileBottomBar />
      </Provider>
    </>
  );
}

// import Footer from "@/components/footer/Footer";
// import Header from "@/components/header/Header";
// import { useEffect, useState } from "react";
// import "@/styles/globals.css";
// import { Box } from "@mui/material";
// import type { AppProps } from "next/app";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import store from "@/redux/store";
// import { Provider, useSelector } from "react-redux";
// import { tokenGet } from "@/redux/action/AuthToken";
// import { Toaster } from "react-hot-toast";
// import MainLoader from "@/components/common/MainLoader";
// import TemplateModal from "@/components/singleTemplate/TemplateModal";

// export async function getStaticProps() {
//   const router = useRouter();
//   const res = await fetch(`http://localhost:3000${router.pathname}`);
//   console.log("resss: ", res);
//   const html = await res.text();

//   const parser = new DOMParser();
//   console.log("parser: ", parser);
//   const doc = parser.parseFromString(html, "text/html");
//   console.log("doc: ", doc);

//   const paragraphElement = doc.querySelector("p");
//   const paragraphContent = paragraphElement?.textContent;

//   return {
//     props: {
//       paragraphContent,
//     },
//   };
// }

// export default function App({
//   Component,
//   pageProps,
// }: AppProps & { paragraphContent: string }) {
//   const router = useRouter();
//   const id = router.query;
//   console.log("idsdcdsc: ", id);
//   console.log("paragraphContent: ", pageProps.paragraphContent);
//   const str = router.pathname.substring(1);
//   let words = str.split(" ");
//   let convertedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );
//   let convertedString = convertedWords.join(" ");
//   const canonicalUrl = `https://craftyartapp.com${router.asPath}`;
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

//   const token = authCookiesGet();

//   const [open, setOpen] = useState<any>(false);

//   useEffect(() => {
//     if (id?.templates) {
//       setOpen(true);
//     }
//   }, [id?.templates]);

//   return (
//     <>
//       <Provider store={store}>
//         <Head>
//           <link rel="canonical" href={canonicalUrl} />
//           <title>
//             {router.pathname === "/"
//               ? "CraftyArt"
//               : `${convertedString} | CraftyArt`}
//           </title>
//           <meta name="robots" content="index, follow" />
//           <meta
//             name="description"
//             content={"Customize your Design in just few Clicks!"}
//           />
//           {/* <meta property="og:title" content={router.pathname.substring(1)} /> */}
//           <meta property="og:title" content={"craftyArt"} />
//           <meta
//             property="og:description"
//             content={"Customize your Design in just few Clicks!"}
//           />
//           <meta property="og:image" content={"/images/logo.svg"} />
//           <meta property="og:image:width" content={"200"} />
//           <meta property="og:image:height" content={"100"} />
//           <meta property="og:image:alt" content={"craftyArt Logo"} />
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content={canonicalUrl} />
//         </Head>
//         <Box>
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           <Box
//             sx={{
//               marginLeft: sidebarOpen ? "250px" : "0",
//               marginTop: "70px",
//               // transition: "0.1s all",
//             }}
//             className="max-lg:ml-0"
//           >
//             <div style={{ zIndex: "5000000000" }}>
//               <Toaster />
//             </div>
//             <Component {...pageProps} />
//             {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
//           </Box>
//           {!token && <Footer />}
//           {/* <MainLoader /> */}
//         </Box>

//         <TemplateModal open={open} setOpen={setOpen} />
//       </Provider>
//     </>
//   );
// }
