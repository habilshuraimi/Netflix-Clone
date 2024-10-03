import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search for titles..." />
      <button className="search-btn" type="button">
        <i ></i> {/* Ensure you have Font Awesome imported */}
      </button>
    </div>
  );
}

export default SearchBar;
