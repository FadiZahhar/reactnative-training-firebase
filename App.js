/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=ef472b7ade9c300265343704a8187280&language=en-US',
  );
  return resp.data.results;
};

const App = () => {
  const [movie, setMovie] = useState('');
  getPopularMovies().then(movies => {
    setMovie(movies[0]);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Title: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release date: {movie.release_date}</Text>
    </View>
  );
};

export default App;
