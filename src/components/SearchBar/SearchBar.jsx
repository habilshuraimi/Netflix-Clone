import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search for titles..." />
      <button className="search-btn">
        <i className="fa fa-search"></i>  {/* Font Awesome for search icon */}
      </button>
    </div>
  );
}

export default SearchBar;
