import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};
const defaultProps = {
  errorText1: 'Semething went wrong !!!',
  errorText2: 'Make sure that you are connected to internet and try again ...',
};
const Error = ({errorText1, errorText2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorText1}</Text>
      <Text style={styles.text}>{errorText2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
