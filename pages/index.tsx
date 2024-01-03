import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/Home/landingPage/LandingPage";
import Dashboard from "@/components/Home/dashboard/Dashboard";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { useEffect, useState, useMemo } from "react";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { useDispatch, useSelector } from "react-redux";
import { templatesData, tokenValue } from "@/redux/reducer/AuthDataReducer";
import DashBoardSkelton from "@/components/Home/dashboard/dashboardComponents/DashBoardSkelton";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLoaderBox from "@/components/common/MainLoaderBox";
import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import Cookies from "js-cookie";
import CustomHead from "@/components/common/CustomHead";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: any) {
  const cookiesString = context.req.headers.cookie || "";

  const sessionId = extractCookieValue(cookiesString, "_sdf");

  return {
    props: {
      sessionId: sessionId || null,
    },
  };
}

const extractCookieValue = (cookiesString: any, cookieName: any) => {
  const cookieRegex = new RegExp(
    `(?:(?:^|.*;\\s*)${cookieName}\\s*\\=\\s*([^;]*).*$)|^.*$`
  );

  const match = cookiesString.match(cookieRegex);
  return match ? match[1] || null : null;
};

export default function Home({ sessionId, responseData }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = authCookiesGet();
  const tokenRedux = useSelector((state: any) => state.auth.tokenValue);
  const mainLoading = useSelector((state: any) => state.actions.mainLoader);
  const [isLoading, setIsLoading] = useState<any>(true);
  const urlNavigate = tokenGet("navigate");

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

  return (
    <main>
      <CustomHead
        image="https://assets.craftyart.in/w_assets/images/landingPageMainVideo.png"
        heading={
          "Unlock Your Creative Potential with Our All-in-One Graphic Design Tool"
        }
        text={
          "Our powerful all-in-one graphic design tool that streamlines your creative process. Create stunning designs like invitation, logos, social media posts and more."
        }
      />
      {sessionId ? <Dashboard /> : <LandingPage />}
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
