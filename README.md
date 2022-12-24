# TL:DR - News Article Summarizer

Live demo: https://tldr.up.railway.app/

**TL;DR** is a simple typescript-based web app that takes a URL of a news article, then spits out a summarized veersion using the GPT-3 API with the `text-davinci-003` model.

![image](https://user-images.githubusercontent.com/18186677/209426410-31507871-f029-4e2c-8d1a-636cae7bd62c.png)

## Tech Stack

- **Front-end and Back-end**: [Next.js](https://nextjs.org/) using [TypeScript](https://www.typescriptlang.org/)
- **CSS Framework**: [Tailwind](https://tailwindcss.com/)
- **Cloud Provider**: [Railway](https://railway.app/)
- Other Tools
  - [GPT-3 API](https://openai.com/api/)
  - [cheerio.js](https://cheerio.js.org/)
  - [Axios](https://axios-http.com/docs/intro)

## API

The app exoses 2 backend endpoints:

- `/api/article` - takes an article's URL and returns its text content using cheerio.js

- `/api/summarize` - takes a text content and returns its summary using the GPT-3 API

## Desired Additional Features

- Allow the user to tweak the GPT-3 parameters to customize the summary. Such as making it more condensed or longer.

- Support more/all sites. Currently, due to time constraints, the app only supports a handful of sites for which I comfortably know hot to query the article content (using jquery selector syntax).

## Setup

If you wish to run the web app on your local machine, clone the repository and run the following in the command line

```
npm install
npm run dev
```

The app should now be accesible from http://localhost:3000/
