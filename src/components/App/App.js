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

  render () {
    return (
      <div className="app">
        <Menu changeNewsType={this.changeNewsType}/>
        <main>
          <SearchForm />
          <NewsContainer news={this.state.news}/>
        </main>  
      </div>
    );
  }
}

export default App;
