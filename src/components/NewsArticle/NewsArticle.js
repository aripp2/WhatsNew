import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article>
      <img src={props.image} alt=""/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <footer>
        <a href={props.url}>See full article</a>
      </footer>
    </article>
  )
}

export default NewsArticle;