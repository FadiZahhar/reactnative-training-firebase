import React from 'react';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Search from '../screens/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNavbar from './Navbar/DetailNavbar';
import HomeNavbar from './Navbar/HomeNavbar';

const Stack = createNativeStackNavigator();
const MainNavigation = ({navigation}) => {
  return (
    <Stack.Navigator headerMode={'screen'}>
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
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTransparent: true,
          header: ({navigation}) => <DetailNavbar navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
