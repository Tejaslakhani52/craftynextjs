import React from "react";
import { useSelector } from "react-redux";

export default function MainLoaderBox() {
  const mainLoading = useSelector((state: any) => state.actions.mainLoader);

  return (
    <div>
      {mainLoading && (
        <main className="main bg-white">
          <main className="main">
            <span className="loader_span"></span>
          </main>
        </main>
      )}
    </div>
  );
}
