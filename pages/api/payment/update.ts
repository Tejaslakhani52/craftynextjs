import { decryptData, encryptData } from "@/aes-crypto";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(
  "sk_test_51M92RVSF3l7nabbsDgFTVqr4W1avdBPPyvH1EaCQvKzp1i0P0wVdd35UjQccFczNWcID0uzmY4Yqj9ju4FaPaZGW00DVfnflUM"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const allowedDomain = "http://localhost:3000/";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;

    const form = new FormData();
    form.append("key", "qwfsegxdhbxfjhncf");
    form.append("pm", req.body.pm);
    form.append("u", decryptData(cookieValue._sdf));
    form.append("billing_details", JSON.stringify(req.body.billing_details));
    form.append("month", req.body.month);
    form.append("year", req.body.year);
    form.append("testMode", "1");

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/updatepm",
      form
    );

    if (response.status == 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
