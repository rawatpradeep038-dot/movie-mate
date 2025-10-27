import React from 'react';
import { Link } from '../router/Router';


const Navigation = ({ currentRoute }) => {
  return (
    <nav className="nav">
      <Link 
        to="/" 
        className={`nav-link ${(currentRoute === '/' || currentRoute === '') ? 'active' : ''}`}
      >
        <span>🏠</span>
        Home
      </Link>
      <Link 
        to="/watchlist" 
        className={`nav-link ${currentRoute === '/watchlist' ? 'active' : ''}`}
      >
        <span>📚</span>
        Watchlist
      </Link>
    </nav>
  );
};

export default Navigation;