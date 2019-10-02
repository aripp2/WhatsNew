import React, { Component } from 'react';
import local from '../../data/local';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <main>
          <Menu />
          <NewsContainer news={this.state.local}/>
        </main>  
      </div>
    );
  }
}

export default App;
