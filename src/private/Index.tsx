import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import {
  EditorTools,
  Product,
  Templates,
} from "@/src/components/header/headerComponents/Menu";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { tokenValue } from "@/src/redux/reducer/AuthDataReducer";
import {
  enterAccount,
  mainLoader,
  openSidebar,
} from "@/src/redux/reducer/actionDataReducer";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const screenWidth = useScreenWidth();
  const dispatch = useDispatch();
  const router = useRouter();
  const token = authCookiesGet();
  const hasEffectRun = useRef(false);
  const mainLoading = useSelector((state: any) => state.actions.mainLoad);
  const serverToken = useSelector((state: any) => state.auth.serverSideToken);

  const productPaths = Product.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );

  const editorToolsPaths = EditorTools.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );

  const templatesPaths = Templates.subName.flatMap((category: any) =>
    category.allName.map((item: any) => item.path)
  );

  useEffect(() => {
    dispatch(mainLoader(true));

    const timeoutId = setTimeout(() => {
      if (!hasEffectRun.current) {
        if (token) {
          if (
            screenWidth > 991 &&
            router?.pathname !== "/your-account" &&
            router?.pathname !== "/subscriptions" &&
            !productPaths.includes(router?.pathname) &&
            !editorToolsPaths.includes(router?.pathname) &&
            !templatesPaths.includes(router?.pathname)
          ) {
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
          productPaths.includes(router?.pathname) ||
          editorToolsPaths.includes(router?.pathname) ||
          templatesPaths.includes(router?.pathname)
        ) {
          dispatch(openSidebar(false));
        }

        setTimeout(() => {
          dispatch(mainLoader(false));
        }, 100);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [token, screenWidth]);

  useEffect(() => {
    if (
      router?.pathname === "/your-account" ||
      router?.pathname === "/subscriptions" ||
      productPaths.includes(router?.pathname) ||
      editorToolsPaths.includes(router?.pathname) ||
      templatesPaths.includes(router?.pathname)
    ) {
      dispatch(enterAccount(true));
    } else dispatch(enterAccount(false));
  }, [router]);

  return (
    <div>
      {mainLoading && (
        <main className="main" style={{ zIndex: "555555555555555555555555" }}>
          <span className="loader"></span>
        </main>
      )}
    </div>
  );
}
