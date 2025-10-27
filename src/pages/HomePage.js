import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchTrending, fetchPopular, searchMovies } from '../utils/api';


const HomePage = ({ 
  movies, 
  trending, 
  watchlist, 
  searchQuery,
  dispatch 
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const [trendingData, popularData] = await Promise.all([
          fetchTrending(),
          fetchPopular()
        ]);
        dispatch({ type: 'SET_TRENDING', payload: trendingData.slice(0, 4) });
        dispatch({ type: 'SET_MOVIES', payload: popularData });
      } catch (error) {
        console.error('Error loading movies:', error);
      }
      setLoading(false);
    };

    loadMovies();
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      const search = async () => {
        setLoading(true);
        try {
          const results = await searchMovies(searchQuery);
          dispatch({ type: 'SET_MOVIES', payload: results });
        } catch (error) {
          console.error('Error searching movies:', error);
        }
        setLoading(false);
      };
      search();
    }
  }, [searchQuery, dispatch]);

  const handleToggleWatchlist = (movie) => {
    const inWatchlist = watchlist.some(m => m.id === movie.id);
    if (inWatchlist) {
      dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Trending Section */}
      {!searchQuery && trending.length > 0 && (
        <section className="trending-section">
          <h2 className="trending-title">
            <span>🔥</span>
            Trending Now
          </h2>
          <div className="movies-grid">
            {trending.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                inWatchlist={watchlist.some(m => m.id === movie.id)}
                onToggleWatchlist={handleToggleWatchlist}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Movies */}
      <section>
        <h2 className="page-title">
          <span>🎬</span>
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies'}
        </h2>
        {movies.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3>No movies found</h3>
            <p>Try searching for something else</p>
          </div>
        ) : (
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                inWatchlist={watchlist.some(m => m.id === movie.id)}
                onToggleWatchlist={handleToggleWatchlist}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;