/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=ef472b7ade9c300265343704a8187280&language=en-US',
  );
  console.log(JSON.stringify(resp.data.results[0], null, 2));
};

const App = () => {
  getPopularMovies();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Try editing Ali! 🎉</Text>
    </View>
  );
};

export default App;
