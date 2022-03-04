import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

const Detail = () => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Text>{'movie details'}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 0,
    height: 0,
  },
});

export default Detail;
