const sites = [
  {
    name: 'The Guardian',
    hostname: 'www.theguardian.com',
    fullurl: 'https://www.theguardian.com/international',
    query: '#maincontent p',
    samples: [
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
      'https://www.theverge.com/2022/12/23/23523993/twitter-public-view-count-measurement-without-meaning',
      'https://www.theverge.com/23517751/elgato-stream-deck-plus-review',
    ],
  },
  {
    name: 'Straits Times',
    hostname: 'www.straitstimes.com',
    fullurl: 'https://www.straitstimes.com/global',
    query: '.field--name-field-paragraph-text p',
    samples: [
      'https://www.straitstimes.com/asia/east-asia/chinese-city-of-qingdao-seeing-half-a-million-covid-19-cases-a-day-official',
    ],
  },
  {
    name: 'Japan Times',
    hostname: 'www.japantimes.co.jp',
    fullurl: 'https://www.japantimes.co.jp/',
    query: '#jtarticle p',
    samples: [
      'https://www.japantimes.co.jp/news/2022/12/23/national/tokyo-plan-disaster-resilience/',
    ],
  },
  {
    name: 'Philippine Star',
    hostname: 'www.philstar.com',
    fullurl: 'https://www.philstar.com/',
    query: '.article__writeup p',
    samples: [
      'https://www.philstar.com/headlines/2022/12/23/2232870/philippines-detects-4-cases-omicron-subvariant-bf7',
    ],
  },
];

export default sites;
