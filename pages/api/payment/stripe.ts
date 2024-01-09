import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const allowedDomain = "https://craftynextjs-al84.vercel.app/";
    const referer = req.headers.referer || "";
    const domainMatch = referer.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    const domain = domainMatch ? domainMatch[1] : "";

    if (!referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;

    const form = new FormData();
    form.append("key", "qwfsegxdhbxfjhncf");
    form.append("id", req.body.pi);
    form.append("u", decryptData(cookieValue._sdf));
    form.append("p", decryptData(cookieValue._paf));
    form.append(
      "currency",
      decryptData(cookieValue.CC) === "IN" ? "INR" : "USD"
    );
    form.append("from", "Web");
    form.append("testMode", "1");

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/stripe",
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
