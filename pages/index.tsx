import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/Home/landingPage/LandingPage";
import Dashboard from "@/components/Home/dashboard/Dashboard";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { useEffect, useState, useMemo } from "react";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { useDispatch, useSelector } from "react-redux";
import { tokenValue } from "@/redux/reducer/AuthDataReducer";
import DashBoardSkelton from "@/components/Home/dashboard/dashboardComponents/DashBoardSkelton";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLoaderBox from "@/components/common/MainLoaderBox";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // if (typeof document !== "undefined") {
  //   document.cookie = `${"token"}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  // }
  const dispatch = useDispatch();
  const router = useRouter();
  const token = authCookiesGet();
  const tokenRedux = useSelector((state: any) => state.auth.tokenValue);
  const mainLoading = useSelector((state: any) => state.actions.mainLoader);
  console.log("mainLoading: ", mainLoading);
  const [isLoading, setIsLoading] = useState<any>(true);
  const urlNavigate = tokenGet("navigate");
  console.log("urlNavigate: ", urlNavigate);

  const screenWidth = useScreenWidth();

  const height = useMemo(() => {
    let val;

    if (screenWidth > 600) {
      val = 250;
    } else val = 100;

    return val;
  }, [screenWidth]);

  useEffect(() => {
    if (urlNavigate !== null) {
      router.push(urlNavigate);
    }
  }, [urlNavigate]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [tokenRedux]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     var bazStorage = createGuest("http://sub.localhost:3000");
  //     console.log("bazStorage: ", bazStorage);
  //     bazStorage.get("localStorageKey", function (error: any, value: any) {
  //       console.log("value: ", value);
  //       if (error) {
  //         console.log("value:", error);
  //       } else {
  //         console.log("value: ", value);
  //       }
  //     });
  //   }
  // }, []);

  // "dev2": "next dev --hostname sub.localhost",

  return (
    <main>
      <Head>
        <title>
          Unlock Your Creative Potential with Our All-in-One Graphic Design Tool
        </title>
        <meta
          name="description"
          content="Discover a powerful all-in-one graphic design tool that streamlines your creative process. Create stunning designs like invitation, logos, social media posts and many more.. with ease."
        />
      </Head>
      {mainLoading || isLoading ? (
        <MainLoaderBox />
      ) : token ? (
        <Dashboard />
      ) : (
        <LandingPage />
      )}
    </main>
  );
}

// {
//   mainLoading || isLoading ? (
//     mainLoading ? (
//       <MainLoaderBox />
//     ) : (
//       <DashBoardSkelton height={height} />
//     )
//   ) : tokenRedux ? (
//     <Dashboard />
//   ) : (
//     <LandingPage />
//   );
// }
