import MainLoaderBox from "@/components/common/MainLoaderBox";
import Account from "@/components/userAccount/Account";
import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import { enterAccount, openSidebar } from "@/redux/reducer/actionDataReducer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLoginStatus = authCookiesGet();

  useEffect(() => {
    dispatch(openSidebar(false));
  }, []);

  return (
    <div>
      <Account defaultTab={"Personal Info"} />
    </div>
  );
}
