import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default Card;
