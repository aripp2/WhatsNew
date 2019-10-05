import React from 'react';
import './NewsArticle.scss';
import { FaArrowRight } from 'react-icons/fa';

const NewsArticle = (props) => {
  return (
    <article>
      <img src={props.image} alt=""/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <footer>
        <a href={props.url}>

        See full article
        <FaArrowRight />
        </a>
      </footer>
    </article>
  )
}

export default NewsArticle;