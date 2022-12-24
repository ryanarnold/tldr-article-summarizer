import Head from 'next/head';
import { Inter } from '@next/font/google';
import sites from '../data/sites-supported';
import { useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [url, setUrl] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summaryTitle, setSummaryTitle] = useState('');
  const [summaryContent, setsummaryContent] = useState('');

  const summarizeArticle = async () => {
    setIsSummarizing(true);

    try {
      const articleResponse = await axios.post('/api/article', { url });
      const content = articleResponse.data.content;
      const title = articleResponse.data.title;

      const summaryResponse = await axios.post('/api/summarize', { content });

      setsummaryContent(summaryResponse.data.summary);
      setSummaryTitle(title);
    } catch {
      alert('Invalid URL!');
    }

    setIsSummarizing(false);
  };

  const handleUrlChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };

  return (
    <>
      <Head>
        <title>TL;DR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-[1fr_2fr_1fr]">
          <div></div>
          <div>
            <h1 className="text-6xl font-bold text-center mt-10 mb-5">TL;DR</h1>
            <p className="text-center mb-10">
              Enter the URL of an article to get a short summary courtesy of{' '}
              <a
                href="https://openai.com/api/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                GPT-3
              </a>
            </p>
            <div className="grid grid-cols-[5fr_1fr] mb-2 gap-5">
              <input
                type="text"
                name="inputUrl"
                id="inputUrl"
                className="border-solid border-slate-300 border rounded-md p-2 w-full height-full"
                onChange={handleUrlChange}
              />
              {isSummarizing ? (
                <button
                  className="bg-indigo-200 text-white rounded-md"
                  onClick={summarizeArticle}
                  disabled
                >
                  Summarizing...
                </button>
              ) : (
                <button className="bg-indigo-500 text-white rounded-md" onClick={summarizeArticle}>
                  Summarize
                </button>
              )}
            </div>
            <p className="text-slate-500 text-sm float-left">
              Supported sites:{' '}
              {sites.map((site) => {
                return (
                  <>
                    <a
                      href={site.fullurl}
                      key={site.hostname}
                      className="underline text-indigo-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.name}
                    </a>
                    {sites.findIndex((s) => s.name === site.name) !== sites.length - 1 ? ', ' : ''}
                  </>
                );
              })}
            </p>
            <p className="text-slate-500 text-sm text-right hover:underline hover:cursor-pointer">
              generate random
            </p>

            {summaryContent && summaryTitle ? (
              <div className="mt-10 border border-slate-300 rounded-lg p-5">
                <h1 className="text-3xl font-bold mb-5">
                  <a
                    href={url}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {summaryTitle}
                  </a>
                </h1>
                <p className="text-slate-700">{summaryContent}</p>
              </div>
            ) : null}
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
