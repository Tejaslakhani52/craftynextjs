import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const allowedDomain = "https://craftynextjs-al84.vercel.app/";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;
    const userId = decryptData(cookieValue._sdf);

    const response = await axios.post<any>(
      `https://story.craftyartapp.com/get/user`,
      {
        key: "qwfsegxdhbxfjhncf",
        device_id: "",
        email: userId,
      }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
