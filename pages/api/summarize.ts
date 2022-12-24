import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

type Data = {
  content: string;
  summary: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | string>) {
  if (req.body.content === undefined) {
    res.status(400).send('Missing input content');
  }

  const content = req.body.content;

  const data = {
    model: 'text-davinci-003',
    prompt: `Summarize this:\n\n${content}`,
    max_tokens: 500,
    temperature: 0,
  };

  const headers = {
    Authorization: `Bearer ${process.env.GPT3_API_KEY}`,
  };

  const gpt3Response = await axios.post('https://api.openai.com/v1/completions', data, { headers });

  const gpt3Choices = gpt3Response.data.choices as Array<any>;

  if (gpt3Choices === undefined || gpt3Choices.length === 0) {
    res.status(500).send('The GPT3 API was unable to generate a summarization :(');
  }

  res.status(200).json({ content, summary: gpt3Choices[0].text });
}
