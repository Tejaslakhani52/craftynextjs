import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue: any = req.cookies;
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_2;
    const accessKey = process.env.KEY;

    const _sdf = decryptData(cookieValue._sdf);
    const _paf: any = decryptData(cookieValue._paf);
    const cc: any = decryptData(cookieValue?.CC);

    const form = new FormData();
    form.append("key", `${accessKey}`);
    form.append("u", _sdf);
    form.append("p", _paf);
    form.append("currency", cc === "IN" ? "INR" : "USD");
    form.append("from", "Web");

    const response = await axios.post(`${apiUrl}/templates/api/razorpay`, form);

    if (response.status === 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
