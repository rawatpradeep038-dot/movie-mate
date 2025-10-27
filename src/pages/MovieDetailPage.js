import React, { useEffect, useState, useRef } from 'react';
import { Link } from '../router/Router';
import { fetchMovieDetails, getImageUrl } from '../utils/api';
import '../styles/pages.css';

const MovieDetailPage = ({ params, watchlist, dispatch }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const detailRef = useRef(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (!params?.id) return;
      
      setLoading(true);
      try {
        const data = await fetchMovieDetails(params.id);
        setMovie(data);
      } catch (error) {
        console.error('Error loading movie details:', error);
      }
      setLoading(false);
    };

    loadMovie();
  }, [params]);

  useEffect(() => {
    // DOM Manipulation - Fade in animation
    if (detailRef.current && movie) {
      detailRef.current.style.opacity = '0';
      detailRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (detailRef.current) {
          detailRef.current.style.transition = 'all 0.5s ease-out';
          detailRef.current.style.opacity = '1';
          detailRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, [movie]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading movie details...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">❌</div>
        <h3>Movie not found</h3>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  const inWatchlist = watchlist.some(m => m.id === movie.id);
  const posterUrl = getImageUrl(movie.poster_path);
  const year = movie.release_date || 'N/A';

  const handleToggleWatchlist = () => {
    if (inWatchlist) {
      dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
    }
  };

  return (
    <div ref={detailRef}>
      <Link to="/" className="back-link">
        <span>←</span>
        Back to Movies
      </Link>
      
      <div className="movie-detail">
        <div className="detail-content">
          <div className="detail-poster">
            {posterUrl ? (
              <img src={posterUrl} alt={movie.title} />
            ) : (
              <div className="detail-poster-placeholder">🎬</div>
            )}
          </div>
          <div className="detail-info">
            <h1 className="detail-title">{movie.title}</h1>
            
            <div className="detail-tags">
              <span className="detail-tag">
                <span>⭐</span>
                {movie.vote_average?.toFixed(1)}/10
              </span>
              <span className="detail-tag">
                <span>📅</span>
                {year}
              </span>
              <span className="detail-tag">
                <span>⏱️</span>
                {movie.runtime} min
              </span>
            </div>

            <p className="detail-overview">{movie.overview || 'No description available.'}</p>

            <div className="detail-actions">
              <button 
                className={`action-btn ${inWatchlist ? 'action-btn-remove' : 'action-btn-primary'}`}
                onClick={handleToggleWatchlist}
              >
                <span>{inWatchlist ? '💔' : '❤️'}</span>
                {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
              </button>
              <button className="action-btn action-btn-secondary">
                <span>▶️</span>
                Watch Trailer
              </button>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: '#666' }}>Genres</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {movie.genres.map(genre => (
                    <span key={genre.id} className="movie-genre">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;