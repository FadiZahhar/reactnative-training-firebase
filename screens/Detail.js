import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';

const Detail = ({route, navigation}) => {
  const {movieDetail} = route.params;

  return (
    <React.Fragment>
      <Text>{movieDetail.title}</Text>
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
