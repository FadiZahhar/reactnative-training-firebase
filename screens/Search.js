import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';
import Card from '../components/Card';

const Search = ({navigation}) => {
  const [moviesTv, setMoviesTv] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [text, onChangeText] = useState('');

  const handleSubmit = query => {
    searchMovieTv(query, 'movie')
      .then(data => {
        setMoviesTv(data);
        console.log(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Search Movie or Tv Show"
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TouchableOpacity
            style={styles.search}
            onPress={() => {
              handleSubmit(text);
            }}>
            <Icon name="search-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItem}>
          {moviesTv && moviesTv.length > 0 && (
            <FlatList
              data={moviesTv}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Card item={item} navigation={navigation} />
              )}
            />
          )}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    padding: 10,
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 50,
  },
  form: {
    flexBasis: 'auto',
    paddingRight: 8,
    flexGrow: 1,
  },
  searchItem: {
    padding: 5,
  },
});

export default Search;
