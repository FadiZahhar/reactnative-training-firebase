import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {getMovie} from '../services/services';
import Error from '../components/Error';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const placeHolderImage = require('../assets/images/placeholderImage.png');

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;
  //const {movieDetail} = route.params;
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [movieDetail, setMovieDetail] = useState();

  const fetchData = () => {
    return Promise.all([getMovie(movieId)]);
  };
  useEffect(() => {
    fetchData()
      .then(([detailData]) => {
        setMovieDetail(detailData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);
  return (
    <React.Fragment>
      {!error && loaded && (
        <ScrollView>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeHolderImage
            }
          />
        </ScrollView>
      )}
      {!loaded && !error && <ActivityIndicator size="large" />}
      {error && <Error />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 0,
    height: 0,
  },
  image: {
    height: (windowHeight * 2) / 5,
  },
});

export default Detail;
