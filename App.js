/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Home from './screens/Home';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Home />
    </View>
  );
};

export default App;
