import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { encryptData } from "@/aes-crypto";

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

    const response = await axios.post<any>(
      `https://story.craftyartapp.com/search-template`,
      {
        key: "qwfsegxdhbxfjhncf",
        app_id: "1",
        cat_id: "-1",
        keywords: req.body.keywords,
        device: "0",
        refWidth: "1080",
        refHeight: "1080",
        page: req.body.page,
        debug: "debug",
      }
    );

    console.log("response: ", response);
    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
