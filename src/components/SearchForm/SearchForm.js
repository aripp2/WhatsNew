import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form>
      <input 
        type="text"
        placeholder="Search for news article here."
      />
      <button className="search-btn">Search Now</button>
    </form>

    )
}

export default SearchForm;