import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Card from './Card';

const List = ({title, content}) => {
  //   const Item = ({title}) => (
  //     <View>
  //       <Text>{title}</Text>
  //     </View>
  //   );
  const renderItem = ({item}) => <Card item={item} />;

  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default List;
