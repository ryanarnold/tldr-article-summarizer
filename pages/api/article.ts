import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  url: string;
  content: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | string>) {
  if (req.body.url === undefined) {
    res.status(400).send('Missing input url');
  }

  const url = req.body.url;

  res.status(200).json({ url, content: '' });
}
