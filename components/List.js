import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Card from './Card';

import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

const List = ({title, content, navigation}) => {
  //   const Item = ({title}) => (
  //     <View>
  //       <Text>{title}</Text>
  //     </View>
  //   );

  const renderItem = ({item}) => <Card item={item} navigation={navigation} />;

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
    color: 'black',
  },
});

List.propTypes = propTypes;

export default List;
