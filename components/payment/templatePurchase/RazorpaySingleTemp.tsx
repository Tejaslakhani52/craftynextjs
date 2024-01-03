import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { setPurchaseItems } from "@/redux/reducer/dataReducer";
import {
  getSessionVal,
  removeUnusedSessions,
  setSessionVal,
} from "@/redux/action/AuthToken";
import axios from "axios";
import { decryptData } from "@/aes-crypto";
import { setPurchaseItems } from "@/redux/reducer/templateDataReducer";
import { mainLoad } from "@/redux/reducer/actionDataReducer";

const url: string = "https://checkout.razorpay.com/v1/checkout.js";

const loadScript = (src: string) => {
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

export function RazorpaySingleTemp({ setOpen }: any) {
  const dispatch = useDispatch();
  const [scriptUpdate, setScriptUpdate] = useState<number>(0);

  useEffect(() => {
    if (!scriptExists(url)) {
      loadScript(url)
        .then(() => {})
        .catch(() => {
          setScriptUpdate(scriptUpdate + 1);
        });
    }
  }, [scriptUpdate]);

  function scriptExists(url: string) {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  }

  const handleSubmit = async (event: React.MouseEvent<any> | any) => {
    event.preventDefault();
    setOpen(false);
    dispatch(mainLoad(true));

    axios
      .post("/api/templatePayment/razorpay")
      .then((data: any) => {
        const res: any = JSON.parse(decryptData(data?.data));

        const options = {
          ...res,
          handler: (response: any) => {
            const datas = {
              id: response.razorpay_payment_id,
              m: "Razorpay",
            };
            setSessionVal("_pdf", JSON.stringify(datas));
            axios
              .post("/api/templatePayment/webhook")
              .then((data: any) => {
                const res: any = JSON.parse(decryptData(data));
                if (res.success) {
                  const val: any = JSON.parse(
                    getSessionVal("_paf", "[]") || "[]"
                  );
                  const purDatas: any = [];
                  val.forEach((_: any) => {
                    purDatas.push({ id: _.id, type: _.type });
                  });
                  dispatch(setPurchaseItems(purDatas));
                  removeUnusedSessions();
                  toast.success(res.msg);
                } else {
                  toast.error(res.msg);
                }
              })
              .catch(() => {
                dispatch(mainLoad(false));
                toast.error("Payment failed");
              });
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
        if (rzp) {
          dispatch(mainLoad(false));
        }
      })
      .catch(() => {
        dispatch(mainLoad(false));
        toast.error("Payment failed");
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
    </Box>
  );
}
