import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div>
      <img src={props.image}/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url}>See full article</a>
    </div>
  )
}

export default NewsArticle;