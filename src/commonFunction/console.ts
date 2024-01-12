export const consoleShow = (name: any, value: any) => {
  if (process.env.NODE_ENV === "development") {
  } else {
    return;
  }
};
