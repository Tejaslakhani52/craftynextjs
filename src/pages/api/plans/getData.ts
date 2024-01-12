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

    const cookieValue = req.cookies;
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_1;

    const response = await axios.post<any>(
      ` ${apiUrl}/my-api`,
      {
        user_id: decryptData(cookieValue._sdf),
        currency: req.body.currency,
      },
      { withCredentials: false }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
