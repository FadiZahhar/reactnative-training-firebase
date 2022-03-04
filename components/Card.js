import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const placeHolderImage = require('../assets/images/placeholderImage.png');

const propTypes = {
  item: PropTypes.object,
};
const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeHolderImage
        }
      />
      {!item.poster_path && (
        <Text style={styles.moviesTitle}>{item.title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    height: 200,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
    //opacity: 0.7,
  },
  moviesTitle: {
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

Card.propTypes = propTypes;

export default Card;
