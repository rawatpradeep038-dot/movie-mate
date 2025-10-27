import React from 'react';
import { Link } from '../router/Router';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import '../styles/header.css';

const Header = ({ searchQuery, onSearchChange, onSearchClear, currentRoute }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <Link to="/" className="logo">
            <span className="logo-icon">🎬</span>
            <span className="logo-text">MovieMate</span>
          </Link>
          <SearchBar 
            value={searchQuery}
            onChange={onSearchChange}
            onClear={onSearchClear}
          />
        </div>
        <Navigation currentRoute={currentRoute} />
      </div>
    </header>
  );
};

export default Header;