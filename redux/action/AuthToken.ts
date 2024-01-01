import { decryptData, encryptData } from "@/aes-crypto";
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
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  Cookies.set("_sdf", encryptData(value), {
    domain: ".craftyartapp.com",
    expires: expirationDate,
  });

  console.log("expirationDate: ", expirationDate);
  Cookies.set("_sdf", encryptData(value), { expires: expirationDate });
};

export const authCookiesGet = () => {
  const value = Cookies.get("_sdf");
  return decryptData(value);
};

export const userPremium = (value: any) => {
  Cookies.set("_pmf ", String(value), {
    domain: ".craftyartapp.com",
  });
};
