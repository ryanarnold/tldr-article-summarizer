import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';
import sites from '../../data/sites-supported';
const cheerio = require('cheerio');

type Data = {
  url: string;
  content: string;
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | string>) {
  if (req.body.url === undefined) {
    console.log(req.body);
    res.status(400).send('Missing input url');
  }

  const url = req.body.url;
  const articleSite = new URL(url).hostname;

  const hostnamesSupported = sites.map((site) => site.hostname);
  const currentSite = sites.find((site) => site.hostname === articleSite);

  // Return an error is the site isn't supported
  if (!hostnamesSupported.includes(articleSite)) {
    res
      .status(400)
      .send(`Unsupported site. Supported sites include: ${hostnamesSupported.join(',')}`);
  }

  // Retrieve article body/content
  const body = await axios.get(url, {
    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
  });

  const $ = cheerio.load(body.data);
  const articleContent = $(currentSite?.query).text();

  const articleTitle = $('meta[property=og:title]').attr('content');

  res.status(200).json({ url, content: articleContent, title: articleTitle });
}
