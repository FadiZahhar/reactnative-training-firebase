import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
import {getMovie} from '../services/services';
import Error from '../components/Error';
import {Dimensions} from 'react-native';
import StarRating from 'react-native-star-rating';

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
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text key={genre.id} style={styles.genresText}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
            <StarRating
              fullStarColor={'gold'}
              starSize={25}
              disabled={false}
              maxStars={5}
              rating={movieDetail.vote_average / 2}
            />
          </View>
        </ScrollView>
      )}
      {!loaded && !error && <ActivityIndicator size="large" />}
      {error && <Error />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: (windowHeight * 2) / 5,
  },
  movieTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genresText: {
    marginRight: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Detail;
