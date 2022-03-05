import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PlayButton = ({handlePress}) => {
  return (
    <Pressable style={styles.button} onPress={() => handlePress()}>
      <Icon name="caret-forward-outline" size={30} color={'#ffffff'} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: '#4481FC',
  },
});

export default PlayButton;
