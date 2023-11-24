import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/Home/landingPage/LandingPage";
import Dashboard from "@/components/Home/dashboard/Dashboard";
import { tokenGet } from "@/redux/action/AuthToken";
import { useEffect, useState } from "react";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { useDispatch, useSelector } from "react-redux";
import { tokenValue } from "@/redux/reducer/AuthDataReducer";
import DashBoardSkelton from "@/components/Home/dashboard/dasahboardComponents/DashBoardSkelton";
import TemplateModal from "@/components/singleTemplate/TemplateModal";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLoaderBox from "@/components/common/MainLoaderBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = tokenGet("userProfile");
  const tokenRedux = useSelector((state: any) => state.auth.tokenValue);
  const mainLoading = useSelector((state: any) => state.actions.mainLoader);
  console.log("mainLoading: ", mainLoading);
  const [isLoading, setIsLoading] = useState<any>(true);

  const urlNavigate = tokenGet("navigate");
  console.log("urlNavigate: ", urlNavigate);

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
        mainLoading ? (
          <MainLoaderBox />
        ) : (
          <DashBoardSkelton />
        )
      ) : tokenRedux ? (
        <Dashboard />
      ) : (
        <LandingPage />
      )}
    </main>
  );
}

{
  /* <DashBoardSkelton /> */
}
