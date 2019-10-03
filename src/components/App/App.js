import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.news = {
      local,
      entertainment,
      health,
      science,
      technology
    }
    this.state = {
      news: this.news.local
    }
      // console.log(this.state)
  }

  changeNewsType = (newsType) => {
    this.setState({ news: this.news[newsType] });
  }

  searchNews = (input) => {
    console.log(input)
    const matches = this.state.news.filter(article => {
      return (article.headline.includes(input) || article.descrition.includes(input))
    })
    this.setState({ news: matches });
  }

  render () {
    return (
      <div className="app">
        <Menu topics={Object.keys(this.news)}changeNewsType={this.changeNewsType}/>
        <main>
          <SearchForm searchNews={this.searchNews}/>
          <NewsContainer news={this.state.news}/>
        </main>  
      </div>
    );
  }
}

export default App;
