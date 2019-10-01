import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css';

const NewsContainer = (props) => {
  return (
      props.news.map(article => {
        return <NewsArticle 
          key={article.id}
          image={article.img}
          headline={article.headline}
          description={article.description}
          url={article.url}
        />
    })
  )
}

export default NewsContainer;