import React from 'react';
import ISite from '../types/ISite';

type Props = {
  site: ISite;
};

const SiteLink = ({ site }: Props) => {
  return (
    <a
      href={site.fullurl}
      key={site.hostname}
      className="underline text-indigo-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.name}
    </a>
  );
};

export default SiteLink;
