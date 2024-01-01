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

    const response = await axios.post<any>(
      `https://story.craftyartapp.com/get/main/data`,
      {
        key: `qwfsegxdhbxfjhncf`,
        page: 1,
        count: 0,
      }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data.datas)));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
