const initialState = {
  movies: [],
  trending: [],
  watchlist: JSON.parse(localStorage.getItem('watchlist') || '[]'),
  selectedMovie: null,
  searchQuery: '',
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload, loading: false };
    case 'SET_TRENDING':
      return { ...state, trending: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'ADD_TO_WATCHLIST':
      const newWatchlist = [...state.watchlist, action.payload];
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
      return { ...state, watchlist: newWatchlist };
    case 'REMOVE_FROM_WATCHLIST':
      const filtered = state.watchlist.filter(m => m.id !== action.payload);
      localStorage.setItem('watchlist', JSON.stringify(filtered));
      return { ...state, watchlist: filtered };
    case 'SET_SELECTED_MOVIE':
      return { ...state, selectedMovie: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default movieReducer;