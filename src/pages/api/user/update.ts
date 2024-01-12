import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { decryptData, encryptData } from "@/src/aes-crypto";
import multer from "multer";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

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
    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const multerUpload = multer();
    await runMiddleware(req, res, multerUpload.single("file"));

    const cookieValue = req.cookies;
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_2;
    const accessKey = process.env.KEY;

    const userId = decryptData(cookieValue._sdf);

    const formData = new FormData();
    formData.append("key", `${accessKey}`);
    formData.append("user_id", userId);
    formData.append("name", req.body.name);
    formData.append("updateDp", req.body.updateDp);
    if (req.file) {
      const fileBlob = new Blob([req.file.buffer], {
        type: req.file.mimetype,
      });
      formData.append("photo_uri", fileBlob, req.file.originalname);
    }

    const response = await axios.post<any>(
      `${apiUrl}/templates/api/V3/updateUser`,
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
