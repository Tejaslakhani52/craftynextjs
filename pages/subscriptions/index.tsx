import MainLoaderBox from "@/components/common/MainLoaderBox";
import Account from "@/components/userAccount/Account";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar(false));
  }, []);

  return (
    <div>
      <Account defaultTab={"Subscription"} />
    </div>
  );
}
