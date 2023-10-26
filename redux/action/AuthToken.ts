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
