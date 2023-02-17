// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {prompt} = req.body;

  const response = await openai.createImage({
    prompt,
    n: 8,
    size: "1024x1024",
  });
  const {data} = response.data;
  const imageURLs = data.map((image) => image.url);

  return res.status(200).json(imageURLs);
}
