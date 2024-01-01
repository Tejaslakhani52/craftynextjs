import { authCookiesGet, tokenGet } from "@/redux/action/AuthToken";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { decryptData } from "@/aes-crypto";

const loadScript = (src: any) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function RazorpayPage({ selectPaln, setOpen }: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const uId = authCookiesGet();

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setOpen(false);

    const formData = new FormData();
    formData.append("packageId", selectPaln?.id ?? "");
    formData.append("packageName", selectPaln?.package_name ?? "");
    formData.append("rate", selectPaln?.price ?? "");
    formData.append("currency", selectPaln?.currency ?? "");

    axios
      .post("/api/razorPay", formData)
      .then((response: any) => {
        const res = JSON.parse(decryptData(response?.data));
        const rzp = new (window as any).Razorpay(res);

        if (rzp) {
          setLoading(false);
        }
        rzp.open({
          handler: function (response: any) {
            window.location.reload();
          },
          modal: {
            ondismiss: function () {
              console.log("err", "Payment cancelled");
            },
          },
        });
      })
      .catch((error: any) => {
        // console.log("error: ", error);
      });
  };
  return (
    <Box>
      <Button onClick={handleSubmit} className="w-[200px] mx-auto block">
        <img
          src="https://assets.craftyart.in/w_assets/images/plans/razorpay.png"
          alt="razorpay"
        />
      </Button>
      <Box className="separator">
        <Box className="line" />
        <h2 className="mb-0">or</h2>
        <Box className="line" />
      </Box>
      {loading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </Box>
  );
}
