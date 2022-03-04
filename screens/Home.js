import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {ActivityIndicator, View, StyleSheet, ScrollView} from 'react-native';
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
import Error from '../components/Error';

const Home = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaries, setDocumentaries] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetchData = () => {
    return Promise.all([
      getPopularMovies(),
      getUpcomingMovies(),
      getPopularTV(),
      getFamilyMovies(),
      getDocumentaries(),
    ]);
  };
  useEffect(() => {
    fetchData()
      .then(
        ([
          popularMoviesData,
          upcomingMoviesData,
          popularTvData,
          familyMoviesData,
          documentariesData,
        ]) => {
          /////
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          /////
          setPopularMovies(popularMoviesData);
          /////
          setPopularTv(popularTvData);
          /////
          setFamilyMovies(familyMoviesData);
          /////
          setDocumentaries(documentariesData);
          /////
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
    /////////
    // getUpcomingMovies()
    //   .then(movies => {
    //     const moviesImagesArray = [];
    //     movies.forEach(movie => {
    //       moviesImagesArray.push(
    //         'https://image.tmdb.org/t/p/w500' + movie.poster_path,
    //       );
    //     });
    //     setMoviesImages(moviesImagesArray);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // ///////////
    // getPopularMovies()
    //   .then(movies => {
    //     setPopularMovies(movies);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // ///////////
    // getPopularTV()
    //   .then(tv => {
    //     setPopularTv(tv);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // ///////////
    // getFamilyMovies()
    //   .then(movies => {
    //     setFamilyMovies(movies);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
    // ///////////
    // getDocumentaries()
    //   .then(movies => {
    //     setDocumentaries(movies);
    //   })
    //   .catch(err => {
    //     setError(err);
    //   });
  }, []);

  return (
    <react.Fragment>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                sliderBoxHeight={(windowHeight * 2) / 3}
                dotStyle={styles.sliderStyle}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}

          {/* <View style={styles.carousel}>
        <FlatList
          data={popularMovies}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View> */}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}

          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular TV Shows"
                content={popularTv}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}

          {documentaries && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentaries"
                content={documentaries}
              />
            </View>
          )}
        </ScrollView>
      )}

      {!loaded && !error && <ActivityIndicator size="large" />}
      {error && <Error />}
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
