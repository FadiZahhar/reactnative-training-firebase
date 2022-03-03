import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
} from '../services/services';

const Home = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Title: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release date: {movie.release_date}</Text>
      {error && <Text style={{color: 'red'}}>error in the server</Text>}
    </View>
  );
};

export default Home;
