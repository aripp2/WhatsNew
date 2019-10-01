import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = (state) => {
  return (
    <div>
      {state.map(news => (
        <NewsArticle
          image={news.img} 
          headline={news.headline}
          description={news.description}
          url={news.url}
        ))}
      />
      
    </div>
  )
}

export default NewsContainer;