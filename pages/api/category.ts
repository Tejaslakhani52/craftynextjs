import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // Check if the request method is POST
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Check if the Referer header exists and if it matches the allowed domain
    const allowedDomain = "localhost:3000";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Make the API call
    const response = await axios.post<any>(
      `https://story.craftyartapp.com/get/datas`,
      {
        debug_key: "debug",
        limit: 48,
        cat_id: req.body.cat_id,
        page: req.body.page,
      }
    );

    // Log and send the response
    console.log("response: ", response);
    res.status(200).json(response.data);
  } catch (error) {
    // Log and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
