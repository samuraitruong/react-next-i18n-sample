// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sample: string;
};

const sampleContent: any = {
  en: {
    sample: "This is sample content load from server side with i18n",
  },
  vn: {
    sample: "Đây là nội dung mẫu được tải từ phía máy chủ với i18n",
  },
  fr: {
    sample:
      "Ceci est un contenu d'échantillon chargé du côté serveur avec i18n",
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const locate = req.headers["x-locale"] as string;
  console.log(req.headers);
  res.status(200).json(sampleContent[locate]);
}
