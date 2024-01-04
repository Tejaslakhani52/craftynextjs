import Account from "@/components/userAccount/Account";
import { openSidebar } from "@/redux/reducer/actionDataReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar(false));
  }, []);

  return (
    <div>
      <Account defaultTab={"Personal Info"} />
    </div>
  );
}
