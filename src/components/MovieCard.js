import React, { useRef } from 'react';
import { Link } from '../router/Router';
import { getImageUrl } from '../utils/api';


const MovieCard = ({ movie, inWatchlist, onToggleWatchlist }) => {
  const cardRef = useRef(null);

  const handleWatchlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // DOM Manipulation - Animation
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = '';
        }
      }, 150);
    }

    onToggleWatchlist(movie);
  };

  const posterUrl = getImageUrl(movie.poster_path);
  const year = movie.release_date || 'N/A';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card" ref={cardRef}>
      <div className="movie-poster-wrapper">
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title} className="movie-poster" />
        ) : (
          <div className="movie-poster-placeholder">🎬</div>
        )}
        <div className="movie-badge">
          <span>⭐</span>
          <span>{movie.vote_average?.toFixed(1) || 'N/A'}</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{year}</span>
        </div>
        <div className="movie-footer">
          <span className="movie-genre">Movie</span>
          <button
            className={`watchlist-btn ${inWatchlist ? 'active' : ''}`}
            onClick={handleWatchlistClick}
            aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
          >
            {inWatchlist ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;