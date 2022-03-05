import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeNavbar = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/movie.png')}
        />
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            navigation.navigate('search');
          }}>
          <Icon name="search-outline" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {},
});
export default HomeNavbar;
