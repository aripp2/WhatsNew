import React from 'react';
import './NewsArticle.scss';
import { FaArrowRight } from 'react-icons/fa';

const NewsArticle = ({ image, headline, description, url }) => {
  return (
    <article>
      <img src={ image } alt=""/>
      <h3>{ headline }</h3>
      <p>{ description }</p>
      <footer>
        <a href={ url }>
        See full article
        <FaArrowRight />
        </a>
      </footer>
    </article>
  )
}

export default NewsArticle;