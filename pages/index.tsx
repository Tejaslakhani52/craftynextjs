import { tokenGet } from "@/redux/action/AuthToken";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CustomHead = dynamic(() => import("@/components/common/CustomHead"));
const Dashboard = dynamic(
  () => import("@/components/Home/dashboard/Dashboard")
);
const LandingPage = dynamic(
  () => import("@/components/Home/landingPage/LandingPage")
);

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

export default function Home({ sessionId }: any) {
  const router = useRouter();
  const urlNavigate = tokenGet("navigate");

  useEffect(() => {
    if (urlNavigate !== null) {
      router.push(urlNavigate);
    }
  }, [urlNavigate]);

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
