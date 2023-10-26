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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const token = tokenGet("userProfile");
  const tokenRedux = useSelector((state: any) => state.auth.tokenValue);
  console.log("token: ", token);
  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [tokenRedux]);

  useEffect(() => {
    if (token) {
      dispatch(openSidebar(true));
      dispatch(tokenValue(true));
    }
  }, [token]);

  return (
    <main>
      {isLoading ? (
        <DashBoardSkelton />
      ) : tokenRedux ? (
        <Dashboard />
      ) : (
        <LandingPage />
      )}
    </main>
  );
}
