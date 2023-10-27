import React from 'react';

function ResourcesList() {
  const links = [
    { name: "Bitcoin.org", url: "https://bitcoin.org/" },
    { name: "Fidelity", url: "https://www.fidelitydigitalassets.com/research-and-insights/bitcoin-first-revisited" },
    { name: "99 obituaries", url: "https://99bitcoins.com/bitcoin-obituaries/" },
    { name: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2023-10-17/spot-bitcoin-etf-what-to-know-about-grayscale-blackrock-ishares-funds" },
    { name: "BLK SEC Filing", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774923017574/bit20230608_s1.htm" },
    // Add more links as needed
  ];

  return (
    <div className="resources-list">
      <h2><b>RESOURCES</b></h2>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcesList;
