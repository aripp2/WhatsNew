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
    // this.news = {
    //   local,
    //   entertainment,
    //   health,
    //   science,
    //   technology
    // }
    this.state = {
      news: {
        local,
        entertainment,
        health,
        science,
        technology
      },
      currentNews: local
    }
      // console.log(this.state)
  }

  // componentDidMount() {
  //   fetch("https://whats-new-api.herokuapp.com/api/v1/news")
  //     .then(response => response.json())
  //     .then(data => this.setState({ 
  //       news: data,
  //       currentNews: data.local
  //     }))
  //     .catch(err => console.log(err))
  // }

  changeNewsType = (newsType) => {
    // this.setState({ news: this.news[newsType] });
    this.setState({ currentNews: this.state.news[newsType]})
  }

  searchNews = (input) => {
    const fixedInput = input.search.toUpperCase();
    const matches = this.state.currentNews.filter(article => {
      const fixedHeadline = article.headline.toUpperCase();
      const fixedDescription = article.description.toUpperCase();
      return fixedHeadline.includes(fixedInput) || fixedDescription.includes(fixedInput)
    })

    this.setState({ currentNews: matches });
  }

  render () {
    return (
      <div className="app">
        <Menu changeNewsType={this.changeNewsType}/>
        <main>
          <SearchForm searchNews={this.searchNews}/>
          <NewsContainer news={this.state.currentNews}/>
        </main>  
      </div>
    );
  }
}

export default App;
