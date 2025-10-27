import { BASE_URL, API_ENDPOINTS, API_KEY } from './constants';

// Popular movie IDs for demo
const POPULAR_MOVIE_IDS = [
  'tt0111161', // Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0108052', // Schindler's List
  'tt0167260', // LOTR: Return of the King
  'tt0110912', // Pulp Fiction
  'tt0120737', // LOTR: Fellowship
  'tt0109830', // Forrest Gump
  'tt1375666', // Inception
  'tt0137523', // Fight Club
  'tt0167261', // LOTR: Two Towers
  'tt0080684', // Star Wars V
];

// Convert OMDb format to our app format
const convertMovie = (movie) => ({
  id: movie.imdbID,
  title: movie.Title,
  poster_path: movie.Poster !== 'N/A' ? movie.Poster : null,
  release_date: movie.Year,
  vote_average: movie.imdbRating ? parseFloat(movie.imdbRating) : 0,
  overview: movie.Plot || 'No description available.',
  runtime: movie.Runtime,
  genres: movie.Genre ? movie.Genre.split(', ').map((name, id) => ({ id, name })) : [],
});

export const fetchTrending = async () => {
  try {
    const promises = POPULAR_MOVIE_IDS.slice(0, 4).map(id =>
      fetch(`${BASE_URL}${API_ENDPOINTS.movieDetail(id)}`).then(r => r.json())
    );
    const results = await Promise.all(promises);
    console.log('✅ Trending data loaded');
    return results.filter(m => m.Response === 'True').map(convertMovie);
  } catch (error) {
    console.error('❌ Error fetching trending:', error);
    return [];
  }
};

export const fetchPopular = async () => {
  try {
    const promises = POPULAR_MOVIE_IDS.slice(0, 12).map(id =>
      fetch(`${BASE_URL}${API_ENDPOINTS.movieDetail(id)}`).then(r => r.json())
    );
    const results = await Promise.all(promises);
    console.log('✅ Popular data loaded');
    return results.filter(m => m.Response === 'True').map(convertMovie);
  } catch (error) {
    console.error('❌ Error fetching popular:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  if (!query) return [];
  
  try {
    const url = `${BASE_URL}${API_ENDPOINTS.search(query)}`;
    console.log('📡 Searching:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === 'True' && data.Search) {
      console.log('✅ Search results:', data.Search.length);
      return data.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster_path: movie.Poster !== 'N/A' ? movie.Poster : null,
        release_date: movie.Year,
        vote_average: 0,
      }));
    }
    
    return [];
  } catch (error) {
    console.error('❌ Error searching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const url = `${BASE_URL}${API_ENDPOINTS.movieDetail(id)}`;
    console.log('📡 Fetching movie:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === 'True') {
      console.log('✅ Movie details loaded');
      return convertMovie(data);
    }
    
    return null;
  } catch (error) {
    console.error('❌ Error fetching movie details:', error);
    return null;
  }
};

export const getImageUrl = (path) => {
  return path;
};