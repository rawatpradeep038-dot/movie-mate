export const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
export const BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;

console.log('🔑 API Key loaded:', API_KEY ? 'YES ✅' : 'NO ❌');

export const API_ENDPOINTS = {
  search: (query) => `/?apikey=${API_KEY}&s=${query}&type=movie`,
  movieDetail: (id) => `/?apikey=${API_KEY}&i=${id}&plot=full`,
};