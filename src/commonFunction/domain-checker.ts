import { NextApiRequest } from "next";

export function isFakeDomain(req: NextApiRequest) {
  if (req.method !== "POST") {
    return true;
  }
  const allowedDomain = [
    "www.craftyartapp.com",
    "editor.craftyartapp.com",
    "betaeditor.craftyartapp.com",
    "payment.craftyartapp.com",
    "localhost:3000",
    "localhost:3895",
    "192.168.29.92:3000",
    "craftynextjs-al84sub.vercel.app",
    "craftynextjs-al84.vercel.app",
  ];
  const referer = req.headers.referer || "";
  const domainMatch = referer.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  const domain = domainMatch ? domainMatch[1] : "";

  return !allowedDomain.includes(domain);
}
