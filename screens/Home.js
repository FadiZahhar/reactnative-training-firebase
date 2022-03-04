import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyMovies,
  getDocumentaries,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import react from 'react';
import List from '../components/List';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    /////////
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
    ///////////
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
    ///////////
    getPopularTV()
      .then(tv => {
        setPopularTv(tv);
      })
      .catch(err => {
        setError(err);
      });
    ///////////
    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
    ///////////
    getDocumentaries()
      .then(movies => {
        setDocumentaries(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <react.Fragment>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={moviesImages}
            sliderBoxHeight={(windowHeight * 2) / 3}
            dotStyle={styles.sliderStyle}
            autoplay={true}
            circleLoop={true}
          />
        </View>
        {/* <View style={styles.carousel}>
        <FlatList
          data={popularMovies}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View> */}
        <View style={styles.carousel}>
          <List title="Popular Movies" content={popularMovies} />
        </View>

        <View style={styles.carousel}>
          <List title="Popular TV Shows" content={popularTv} />
        </View>

        <View style={styles.carousel}>
          <List title="Family Movies" content={familyMovies} />
        </View>

        <View style={styles.carousel}>
          <List title="Documentaries" content={documentaries} />
        </View>
      </ScrollView>
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
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
