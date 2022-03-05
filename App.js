/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './screens/Home';
import Detail from './screens/Detail';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailNavbar from './components/Navbar/DetailNavbar';
import HomeNavbar from './components/Navbar/HomeNavbar';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <HomeNavbar navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <DetailNavbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
