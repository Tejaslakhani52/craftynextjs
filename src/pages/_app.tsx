import store from "@/src/redux/store";
import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const LayoutImport = dynamic(() => import("./Layout"));

export async function getStaticProps() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME;
  const router = useRouter();
  const res = await fetch(`${domain}${router.pathname}`);
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
  return (
    <Box>
      <Provider store={store}>
        <LayoutImport>
          <Component {...pageProps} />
          {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
        </LayoutImport>
      </Provider>
    </Box>
  );
}
