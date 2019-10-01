import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article>
      <img src={props.image}/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url}>See full article</a>
    </article>
  )
}

export default NewsArticle;