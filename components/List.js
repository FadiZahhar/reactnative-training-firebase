import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const List = ({title, content}) => {
  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;

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
