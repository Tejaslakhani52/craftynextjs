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

    const response = await axios.post<any>(
      `https://story.craftyartapp.com/payments/stripe`,
      {
        amount: req.body.amount,
        id: req.body.id,
        currency: req.body.currency,
        userId: req.body.userId,
        packageId: req.body.packageId,
        pay_mode: "subs",
        packageName: req.body.packageName,
        returnUrl: req.body.returnUrl,
      }
    );

    console.log("response: ", response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}