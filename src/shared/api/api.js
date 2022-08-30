import axios from "axios";

const API_KEY = '55f4870ea098f37a25ead3578c555cbf';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {
      page: 1,
    }
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const searchMovies = async (searchQuery) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: searchQuery,
      page: 1,
    }
  });
  return data;
};