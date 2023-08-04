import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/Home/landingPage/LandingPage";
import Dashboard from "@/components/Home/dashboard/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <LandingPage /> */}
      <Dashboard />
    </main>
  );
}
