const BASE_URL = 'https://api.tvmaze.com';

const convertShow = (show) => ({
  id: show.id,
  title: show.name,
  year: show.premiered ? new Date(show.premiered).getFullYear() : 'N/A',
  rating: show.rating?.average || 0,
  poster_path: show.image?.medium || show.image?.original,
  overview: show.summary ? show.summary.replace(/<[^>]*>/g, '') : 'No description',
  vote_average: show.rating?.average || 0,
  release_date: show.premiered || '',
  runtime: show.runtime || 0,
});

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/schedule`);
  const data = await res.json();
  const unique = [];
  const seen = new Set();
  for (const item of data) {
    if (item.show && !seen.has(item.show.id)) {
      seen.add(item.show.id);
      unique.push(convertShow(item.show));
      if (unique.length >= 4) break;
    }
  }
  return unique;
};

export const fetchPopular = async () => {
  const res = await fetch(`${BASE_URL}/shows?page=0`);
  const data = await res.json();
  return data.slice(0, 12).map(convertShow);
};

export const searchMovies = async (query) => {
  if (!query) return [];
  const res = await fetch(`${BASE_URL}/search/shows?q=${query}`);
  const data = await res.json();
  return data.filter(i => i.show).map(i => convertShow(i.show));
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  const data = await res.json();
  return convertShow(data);
};

export const getImageUrl = (path) => path || 'https://via.placeholder.com/210x295';