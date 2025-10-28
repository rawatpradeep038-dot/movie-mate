// TVMaze API - No API key required!
export const BASE_URL = 'https://api.tvmaze.com';

export const API_ENDPOINTS = {
  search: (query) => `/search/shows?q=${query}`,
  showDetail: (id) => `/shows/${id}`,
};

console.log('🌐 API Base URL:', BASE_URL);