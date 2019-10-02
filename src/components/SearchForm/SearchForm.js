import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

render() {
  return (
    <form>
      <input
        className="search-input" 
        type="text"
        placeholder="Search for news article here."
        name="searchInput"
        
      />
      <button className="search-btn">Search Now</button>
    </form>

      )
  }
}

export default SearchForm;