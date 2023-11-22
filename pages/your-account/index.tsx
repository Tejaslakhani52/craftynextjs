import Account from "@/components/userAccount/Account";
import { tokenValue } from "@/redux/reducer/AuthDataReducer";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar(false));
    dispatch(tokenValue(false));
  }, []);
  return (
    <div>
      <Account />
    </div>
  );
}
