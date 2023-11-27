import MainLoaderBox from "@/components/common/MainLoaderBox";
import Account from "@/components/userAccount/Account";
import { tokenGet } from "@/redux/action/AuthToken";
import { enterAccount, openSidebar } from "@/redux/reducer/actionDataReducer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLoginStatus = tokenGet("userProfile");

  useEffect(() => {
    dispatch(openSidebar(false));
  }, []);

  // const [loading, setLoading] = useState<any>(true);

  // useEffect(() => {
  //   if (!userLoginStatus) {
  //     router.push("/");
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, [userLoginStatus]);

  return (
    <div>
      <Account defaultTab={"Personal Info"} />
      <MainLoaderBox />
      {/* {loading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )} */}
    </div>
  );
}
