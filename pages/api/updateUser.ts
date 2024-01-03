import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/aes-crypto";
import multer from "multer";

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== "POST") {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const allowedDomain = "http://localhost:3000/";
    const referer = req.headers.referer || req.headers.referrer;

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const multerUpload = multer();
    await runMiddleware(req, res, multerUpload.single("file"));

    const cookieValue = req.cookies;
    const userId = decryptData(cookieValue._sdf);

    const formData = new FormData();
    formData.append("key", "qwfsegxdhbxfjhncf");
    formData.append("user_id", userId);
    formData.append("name", req.body.name);
    formData.append("updateDp", req.body.updateDp);
    if (req.file) {
      const fileBlob = new Blob([req.file.buffer], {
        type: req.file.mimetype,
      });
      formData.append("photo_uri", fileBlob, req.file.originalname);
    }

    console.log("formData: ", formData);
    const response = await axios.post<any>(
      `https://panel.craftyartapp.com/templates/api/V3/updateUser`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
