import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const allowedDomain = "https://craftynextjs-al84.vercel.app/";
    const referer = req.headers.referer || "";

    if (!referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue: any = req.cookies;

    const _sdf = decryptData(cookieValue._sdf);
    const _paf: any = decryptData(cookieValue._paf);
    const cc: any = decryptData(cookieValue?.CC);

    const form = new FormData();
    form.append("key", "qwfsegxdhbxfjhncf");
    form.append("u", _sdf);
    form.append("p", _paf);
    form.append("currency", cc === "IN" ? "INR" : "USD");
    form.append("from", "Web");

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/razorpay",
      form
    );

    if (response.status === 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
