import React from 'react';
import './NewsArticle.css';

const NewsArticle = () => {
  return (
    <article>
      <img src={state.image}>
      <h3>{state.headline}</h3>
      <p>{state.description}</p>
      <a href={state.url}>See full article</a>
    </article>
  )
}

export default NewsArticle;