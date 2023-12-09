import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("req: ", req);
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

    console.log("response: ", response);

    res.status(200).json(response.data.datas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
