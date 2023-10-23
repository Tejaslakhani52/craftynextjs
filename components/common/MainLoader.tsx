import React from "react";
import { useEffect } from "react";

export default function MainLoader() {
  useEffect(() => {
    // Disable the scrollbar when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable the scrollbar when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center  ">
      <img
        className="w-14 h-14 animate-spin"
        src="https://www.svgrepo.com/show/70469/loading.svg"
        alt="Loading icon"
      />
    </div>
  );
}
