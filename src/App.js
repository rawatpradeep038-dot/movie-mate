import React, { useState, useEffect } from 'react';
import { Router, Route } from './router/Router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import MovieDetailPage from './pages/MovieDetailPage';
import createStore from './redux/store';
import movieReducer from './redux/movieReducer';
import './styles/index.css';
import './styles/header.css';
import './styles/movieCard.css';
import './styles/pages.css';

// Create Redux store
const initialState = {
  movies: [],
  trending: [],
  watchlist: JSON.parse(localStorage.getItem('watchlist') || '[]'),
  selectedMovie: null,
  searchQuery: '',
  loading: false,
};

const store = createStore(movieReducer, initialState);

function App() {
  const [state, setState] = useState(store.getState());
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      unsubscribe();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSearchChange = (e) => {
    store.dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  const handleSearchClear = () => {
    store.dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
  };

  return (
    <div className="app-container">
      <Header
        searchQuery={state.searchQuery}
        onSearchChange={handleSearchChange}
        onSearchClear={handleSearchClear}
        currentRoute={route}
      />
      
      <main>
        <Router>
          <Route path="/">
            <HomePage
              movies={state.movies}
              trending={state.trending}
              watchlist={state.watchlist}
              searchQuery={state.searchQuery}
              dispatch={store.dispatch}
            />
          </Route>
          <Route path="/watchlist">
            <WatchlistPage
              watchlist={state.watchlist}
              dispatch={store.dispatch}
            />
          </Route>
          <Route path="/movie/:id">
            <MovieDetailPage
              watchlist={state.watchlist}
              dispatch={store.dispatch}
            />
          </Route>
        </Router>
      </main>

      <footer className="footer">
        <p className="footer-text">
          Made with <span style={{ color: '#e91e63' }}>❤️</span> using MovieMate
        </p>
        <p className="footer-subtext">
          React Router • Redux • LocalStorage • TMDB API
        </p>
      </footer>
    </div>
  );
}

export default App;