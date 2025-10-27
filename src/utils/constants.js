export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
export const IMAGE_BASE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

export const API_ENDPOINTS = {
  trending: `/trending/movie/week?api_key=${API_KEY}`,
  popular: `/movie/popular?api_key=${API_KEY}`,
  search: (query) => `/search/movie?api_key=${API_KEY}&query=${query}`,
  movieDetail: (id) => `/movie/${id}?api_key=${API_KEY}`,
};