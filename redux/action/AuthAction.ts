import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import toast from "react-hot-toast";
import { tokenSet } from "./AuthToken";

type TemplatesAction = {
  type: string;
  payload?: any;
};

export const createUserApi =
  (props: any, router: any): any =>
  async (dispatch: Dispatch<any>) => {
    axios
      .post("https://story.craftyartapp.com/create/user", props)
      .then(({ data }) => {
        toast.success("Success Login");
        tokenSet("userProfile", data?.user?.uid);

        // navigate(`${currentPathname !== "/login" ? currentPathname : "/"}`);
        router.push(`${"/"}`);
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
