import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import toast from "react-hot-toast";
import { authCookiesSet, tokenSet } from "./AuthToken";
import { decryptData } from "@/aes-crypto";
import { openSidebar } from "../reducer/actionDataReducer";

type TemplatesAction = {
  type: string;
  payload?: any;
};

export const createUserApi =
  (props: any, router: any): any =>
  async (dispatch: Dispatch<any>) => {
    axios
      .post("/api/user/create", {
        name: props?.name,
        email: props?.email,
        photo_uri: props?.photo_uri,
        user_id: props?.user_id,
      })
      .then(({ data }) => {
        const res: any = JSON.parse(decryptData(data));
        toast.success("Success Login");
        dispatch(openSidebar(true));
        authCookiesSet(res?.user?.uid);
        router.push(`${"/"}`);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);
      })
      .catch((err) => {
        // console.log("err: ", err);
      });
  };
