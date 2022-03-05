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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';

const Search = () => {
  const [moviesTv, setMoviesTv] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [text, onChangeText] = useState('');

  const handleSubmit = query => {
    console.log(query);
  };

  //   const fetchData = () => {
  //     return Promise.all([searchMovieTv()]);
  //   };
  //   useEffect(() => {
  //     fetchData()
  //       .then(([searchMovieTvData]) => {
  //         setMoviesTv(searchMovieTvData);
  //       })
  //       .catch(() => {
  //         setError(true);
  //       })
  //       .finally(() => {
  //         setLoaded(true);
  //       });
  //   }, []);

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
});

export default Search;
