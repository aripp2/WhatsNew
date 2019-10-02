import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css';

const NewsContainer = (props) => {
  const articles = props.news.map(article => {
        return <NewsArticle 
          key={article.id}
          image={article.img}
          headline={article.headline}
          description={article.description}
          url={article.url}
        />
      })
  return ( 
    <section>
      {articles}
    </section>
  )
}

export default NewsContainer;