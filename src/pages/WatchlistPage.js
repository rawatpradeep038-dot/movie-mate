import React from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from '../router/Router';


const WatchlistPage = ({ watchlist, dispatch }) => {
  const handleToggleWatchlist = (movie) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.id });
  };

  return (
    <div className="fade-in">
      <h2 className="page-title">
        <span>📚</span>
        My Watchlist
      </h2>
      {watchlist.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">❤️</div>
          <h3>Your watchlist is empty</h3>
          <p>Add movies to your watchlist to see them here</p>
          <Link to="/" className="btn btn-primary">
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="movies-grid">
          {watchlist.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              inWatchlist={true}
              onToggleWatchlist={handleToggleWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;