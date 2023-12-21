import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const tokenSet = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const tokenGet = (key: string) => {
  const [tokenValue, setTokenValue] = useState<any>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(key);
      setTokenValue(token);
    }
  }, []);

  return tokenValue;
};

export const authCookiesSet = (value: any) => {
  Cookies.set("sessionId", value, {
    domain: ".craftyartapp.com",
  });

  Cookies.set("sessionId", value);
};

export const authCookiesGet = () => {
  const value = Cookies.get("sessionId");
  return value;
};

export const userPremium = (value: any) => {
  Cookies.set("premium", String(value), {
    domain: ".craftyartapp.com",
  });
};
