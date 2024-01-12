import React, { useEffect } from "react";

export default function NotFound() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-[1001]">
      <div className="text-center">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[150px] mx-auto"
          onClick={() => {
            window.location.href = "https://craftyartapp.com/";
          }}
        />

        <h2 style={{ fontWeight: "600", marginTop: "30px", fontSize: "22px" }}>
          Not found (404)
        </h2>

        <p style={{ marginTop: "10px" }}>
          Sorry, the page you are looking for does not exist.
        </p>

        <p
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "https://craftyartapp.com/";
          }}
        >
          Go back to the Crafty Art homepage
        </p>
      </div>
    </div>
  );
}
