import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import react from 'react';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <react.Fragment>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          sliderBoxHeight={(windowHeight * 2) / 3}
          dotStyle={styles.sliderStyle}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <FlatList
          data={popularMovies}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View>
    </react.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 0,
    height: 0,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
