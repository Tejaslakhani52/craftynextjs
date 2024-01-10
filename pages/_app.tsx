import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";

const HomeImport = dynamic(() => import("./Home"));

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
  return (
    <>
      <Provider store={store}>
        <HomeImport>
          <Component {...pageProps} />
          {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
        </HomeImport>
      </Provider>
    </>
  );
}
