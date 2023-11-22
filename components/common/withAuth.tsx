// withAuth.js
import { tokenGet } from "@/redux/action/AuthToken";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = tokenGet("userProfile");

      if (!isAuthenticated) {
        router.push("/login");
      } else router.push("/");
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
