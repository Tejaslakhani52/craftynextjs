import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/Home/landingPage/LandingPage";
import Dashboard from "@/components/Home/dashboard/Dashboard";
import { tokenGet } from "@/redux/action/AuthToken";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const token = tokenGet("userProfile");

  return (
    <>
      {token ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <div>
          <LandingPage />
        </div>
      )}
    </>
  );
}
