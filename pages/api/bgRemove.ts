import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

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

    if (!referer || referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    if (req.body.user_id && req.body.file) {
      const formData = new FormData();
      formData.append("user_id", req.body.user_id);
      formData.append("file", req.body.file);

      const response = await axios.post<any>(
        `https://bgremover.craftyartapp.com/api/removebg`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
