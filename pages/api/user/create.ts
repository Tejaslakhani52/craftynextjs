import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const allowedDomain = "https://craftynextjs-al84sub.vercel.app/";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const response = await axios.post<any>(
      `https://story.craftyartapp.com/create/user`,
      {
        key: "qwfsegxdhbxfjhncf",
        user_id: req.body.name,
        name: req.body.name,
        email: req.body.email,
        photo_uri: req.body.photo_uri,
        login_type: "google",
        device_id: "",
        utm_medium: "craftyart",
        utm_source: "craftyart",
      }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
