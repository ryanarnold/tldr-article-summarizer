const sites = [
  {
    name: 'The Guardian',
    hostname: 'www.theguardian.com',
    fullurl: 'https://www.theguardian.com/international',
    query: '#maincontent p',
    samples: [
      'https://www.theguardian.com/us-news/2022/dec/23/us-weather-bomb-cyclone-us-christmas-latest',
      'https://www.theguardian.com/technology/2022/dec/23/elon-musk-orders-twitter-to-remove-suicide-prevention-feature',
      'https://www.theguardian.com/world/2022/dec/23/andriy-yermak-ukrainian-president-top-adviser-zelenskiy-meeting-with-biden-cemented-their-bond-white-house-visit',
    ],
  },
  {
    name: 'The Verge',
    hostname: 'www.theverge.com',
    fullurl: 'https://www.theverge.com/',
    query: 'article p',
    samples: [
      'https://www.theverge.com/2022/12/23/23516723/after-yang-sci-fi-design-interview-alexandra-schaller',
      'https://www.theverge.com/2022/12/23/23523993/twitter-public-view-count-measurement-without-meaning',
      'https://www.theverge.com/23517751/elgato-stream-deck-plus-review',
    ],
  },
];

export default sites;
