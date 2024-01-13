import store from "@/src/redux/store";
import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <main className={inter.className}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily} !important;
        }

        body {
          font-family: ${inter.style.fontFamily} !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        input,
        div,
        button,
        ul,
        li {
          font-family: ${inter.style.fontFamily} !important;
          color: "#1C3048";
        }
      `}</style>
      <Provider store={store}>
        <LayoutImport>
          <Component {...pageProps} />
          {pageProps.paragraphContent && <p>{pageProps.paragraphContent}</p>}
        </LayoutImport>
      </Provider>
    </main>
  );
}
