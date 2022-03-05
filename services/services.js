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

// get family movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10751`,
  );
  return resp.data.results;
};

// get documentaries
export const getDocumentaries = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99`,
  );
  return resp.data.results;
};

// get movie
export const getMovie = async movie_id => {
  const resp = await axios.get(
    `${apiUrl}/movie/${movie_id}?api_key=${apiKey}&language=en-US`,
  );
  return resp.data;
};

// search movie and tv
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?api_key=${apiKey}&language=en-US&query=${query}`,
  );
  return resp.data;
};
