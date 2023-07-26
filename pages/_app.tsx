import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useState } from "react";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const router = useRouter();
  const res = await fetch(`http://localhost:3000${router.pathname}`);
  console.log("resss: ", res);
  const html = await res.text();

  const parser = new DOMParser();
  console.log("parser: ", parser);
  const doc = parser.parseFromString(html, "text/html");
  console.log("doc: ", doc);

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
  console.log("paragraphContent: ", pageProps.paragraphContent);
  const str = router.pathname.substring(1);
  let words = str.split(" ");
  let convertedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let convertedString = convertedWords.join(" ");
  const canonicalUrl = `https://craftyartapp.com${router.asPath}`;
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
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
        <meta property="og:image" content={"./images/logo.svg"} />
        <meta property="og:image:width" content={"200"} />
        <meta property="og:image:height" content={"100"} />
        <meta property="og:image:alt" content={"craftyArt Logo"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
      </Head>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Box
        sx={{
          marginLeft: sidebarOpen ? "250px" : "0",
          marginTop: "70px",
          transition: "0.1s all",
        }}
        className="max-lg:ml-0"
      >
        <Component {...pageProps} />
        {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
      </Box>
      <Footer />
    </>
  );
}
