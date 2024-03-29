import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  submitSearch = (e) => {
    e.preventDefault();
    const search = this.state.searchInput;
    this.props.searchNews(search);
    this.resetInput();
  }

  resetInput = () => {
    this.setState({ 
      searchInput: ''
    })
  }

  render() {
    return (
      <form>
        <input
          className="search-input" 
          type="text"
          placeholder="Search for news article here."
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
        <button 
          className="search-btn"
          onClick={this.submitSearch}
          >Search Now</button>
      </form>
      )
    }
  }

export default SearchForm;