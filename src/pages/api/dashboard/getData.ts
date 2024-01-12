import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_1;
    const apiKey = process.env.KEY;

    const response = await axios.post<any>(`${apiUrl}/get/main/data`, {
      key: `${apiKey}`,
      page: 1,
      count: 0,
    });

    res.status(200).json(encryptData(JSON.stringify(response.data.datas)));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
