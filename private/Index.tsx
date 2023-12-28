import { useScreenWidth } from "@/commonFunction/screenWidthHeight";
import {
  EditorTools,
  Product,
  Templates,
} from "@/components/header/headerComponents/Menu";
import { authCookiesGet } from "@/redux/action/AuthToken";
import { tokenValue } from "@/redux/reducer/AuthDataReducer";
import {
  enterAccount,
  mainLoader,
  openSidebar,
} from "@/redux/reducer/actionDataReducer";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const screenWidth = useScreenWidth();
  console.log("screenWidth: ", screenWidth);
  const dispatch = useDispatch();
  const router = useRouter();

  const token = authCookiesGet();

  const hasEffectRun = useRef(false);

  const productPaths = Product.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );

  const editorToolsPaths = EditorTools.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );

  const templatesPaths = Templates.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );
  console.log("productPaths: ", productPaths);

  useEffect(() => {
    dispatch(mainLoader(true));
    const timeoutId = setTimeout(() => {
      if (!hasEffectRun.current) {
        if (token) {
          if (
            screenWidth > 991 &&
            router?.pathname !== "/your-account" &&
            router?.pathname !== "/subscriptions" &&
            router?.pathname !== "/plans" &&
            !productPaths.includes(router?.pathname) &&
            !editorToolsPaths.includes(router?.pathname) &&
            !templatesPaths.includes(router?.pathname)
          ) {
            console.log(
              "productPaths.every((path) => !router?.pathname.includes(path)): "
            );

            dispatch(openSidebar(true));
          }
          dispatch(tokenValue(true));
        } else if (
          router?.pathname === "/your-account" ||
          router?.pathname === "/subscriptions" ||
          router?.pathname === "/draft" ||
          router?.pathname === "/trash" ||
          router?.pathname === "/upload"
        ) {
          router.push("/");
        }
        hasEffectRun.current = true;
        if (
          !token ||
          router?.pathname === "/plans" ||
          productPaths.includes(router?.pathname) ||
          editorToolsPaths.includes(router?.pathname) ||
          templatesPaths.includes(router?.pathname)
        ) {
          dispatch(openSidebar(false));
        }
        //  else if (screenWidth > 1200) {
        //   dispatch(openSidebar(true));
        // }
        setTimeout(() => {
          dispatch(mainLoader(false));
        }, 100);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [token]);

  useEffect(() => {
    if (
      router?.pathname === "/your-account" ||
      router?.pathname === "/subscriptions" ||
      router?.pathname === "/plans" ||
      productPaths.includes(router?.pathname) ||
      editorToolsPaths.includes(router?.pathname) ||
      templatesPaths.includes(router?.pathname)
    ) {
      dispatch(enterAccount(true));
    } else dispatch(enterAccount(false));
  }, [router]);

  return <div></div>;
}
