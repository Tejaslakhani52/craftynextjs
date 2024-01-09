import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData } from "@/aes-crypto";

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

    const cookieValue = req.cookies;

    const form = new FormData();
    form.append("key", "qwfsegxdhbxfjhncf");
    form.append("u", decryptData(cookieValue._sdf));
    form.append("testMode", "1");

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/listPm",
      form
    );

    if (response.status == 200) {
      res.status(200).json(response.data);
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
