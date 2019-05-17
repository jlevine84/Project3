import React from 'react';
import './scrape.css';

function Scrape (props) {

  return(
    <div className="scrape">
      <h5>Mental Health News</h5>
      <br></br>
      <div className="article">
        {props.scrape.map((article, i) => {
          <div key={i}>
            <h6>{article.title}</h6>
            <p className="center"><a href={`https://www.sciencedaily.com${article.link}`} target="_blank">Read More</a></p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Scrape;