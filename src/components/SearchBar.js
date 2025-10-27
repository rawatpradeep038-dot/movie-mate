import React from 'react';
import '../styles/header.css';

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={value}
          onChange={onChange}
        />
        {value && (
          <button className="clear-search" onClick={onClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;