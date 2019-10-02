import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <header>
      <h1>What's New?</h1>
      <input 
        type="text"
        placeholder="Search for news article here."
      />
      <button className="search-btn">Search Now</button>
    </header>

    )
}

export default SearchForm;