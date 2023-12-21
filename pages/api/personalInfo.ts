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

    if (!referer || !referer.includes(allowedDomain)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const formData = new FormData();
    formData.append("key", "qwfsegxdhbxfjhncf");
    formData.append("name", req.body.name);
    formData.append("user_id", req.body.user_id);
    formData.append("updateDp", req.body.updateDp);
    formData.append("photo_uri", req.body.photo_uri);

    const response = await axios.post<any>(
      `https://panel.craftyartapp.com/templates/api/V3/updateUser`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("response: ", response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// headers: {
//     "Content-Type": "multipart/form-data",
//   },
