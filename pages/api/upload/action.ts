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

    const allowedDomain = "https://craftynextjs-al84.vercel.app/";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;

    const response = await axios.post<any>(
      `https://panel.craftyartapp.com/templates/api/mupload`,
      {
        key: "qwfsegxdhbxfjhncf",
        user_id: decryptData(cookieValue._sdf),
        type: req.body.type,
        id: req.body.id,
      }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
