import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'ef472b7ade9c300265343704a8187280';

// get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US`,
  );
  return resp.data.results;
};

// get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US`,
  );
  return resp.data.results;
};

// get popular tv
export const getPopularTV = async () => {
  const resp = await axios.get(
    `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US`,
  );
  return resp.data.results;
};
