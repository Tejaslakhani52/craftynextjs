import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_1;
    const accessKey = process.env.KEY;

    const response = await axios.post<any>(` ${apiUrl}/create/user`, {
      key: `${accessKey}`,
      user_id: req.body.name,
      name: req.body.name,
      email: req.body.email,
      photo_uri: req.body.photo_uri,
      login_type: "google",
      device_id: "",
      utm_medium: "craftyart",
      utm_source: "craftyart",
    });

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
