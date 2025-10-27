import { BASE_URL, API_ENDPOINTS, IMAGE_BASE_URL } from './constants';

export const fetchTrending = async () => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINTS.trending}`);
  const data = await response.json();
  return data.results;
};

export const fetchPopular = async () => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINTS.popular}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  if (!query) return [];
  const response = await fetch(`${BASE_URL}${API_ENDPOINTS.search(query)}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINTS.movieDetail(id)}`);
  return await response.json();
};

export const getImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
};