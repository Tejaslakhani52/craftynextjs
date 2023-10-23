export const tokenSet = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const tokenGet = (key: string) => {
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem(key);
  }

  return value;
};
