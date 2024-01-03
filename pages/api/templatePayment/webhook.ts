import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const allowedDomain = [
      "localhost:3000",
      "www.craftyartapp.com",
      "editor.craftyartapp.com",
      "betaeditor.craftyartapp.com",
    ];
    const referer = req.headers.referer || "";
    const domainMatch = referer.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    const domain = domainMatch ? domainMatch[1] : "";

    if (!allowedDomain.includes(domain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;

    const pay_details = JSON.parse(decryptData(cookieValue._pdf, ""));

    let transaction_id = pay_details.id;

    if (pay_details.m === "Stripe") {
      const form = new FormData();
      form.append("key", "qwfsegxdhbxfjhncf");
      form.append("u", decryptData(cookieValue._sdf));
      form.append("id", transaction_id);
      const response = await axios.post(
        "https://panel.craftyartapp.com/templates/api/verifyPayId",
        form
      );

      if (response.status === 200) {
        const datas = JSON.parse(response.data);
        if (!datas.success) {
          res.status(500).json({ error: "Internal Server Error" });
        }
        transaction_id = datas.message;
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }

    const form = new FormData();
    form.append("transaction_id", transaction_id);
    form.append("method", pay_details.m);
    form.append("user_id", decryptData(cookieValue._sdf));
    form.append("plan_id", decryptData(cookieValue._paf, "[]"));
    form.append("currency_code", decryptData(cookieValue.cc, "USD"));
    form.append("fromWhere", "Web");

    const response = await axios.post(
      "https://panel.craftyartapp.com/templates/api/webhook",
      form
    );

    if (response.status === 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
