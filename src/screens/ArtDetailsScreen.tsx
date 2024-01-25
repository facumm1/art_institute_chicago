import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import {SeeMoreButton, FavButton, GoBackButton} from '../components/Button';
import {colors} from '../theme/colors';
import {ArtworkTypes} from '../types';
import {checkText, imageNotAvailable} from '../util';

const ArtDetailsScreen: React.FC<{route: {params: ArtworkTypes}}> = ({
  route,
}) => {
  //TODO add HOC? factorize components, check all texts, add url to image in useFetch
  //TODO this should be a presentational, do checkText before this.
  const {
    title,
    artist_title,
    date_display,
    place_of_origin,
    description,
    imageUrl,
  } = route.params;

  //TODO refactor this, check if HOC or factorize into comp is better
  const [imageLoadError, setImageLoadError] = React.useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <ScrollView style={{backgroundColor: colors.darkBlue}}>
      <View>
        <GoBackButton />

        <Image
          onError={handleImageError}
          resizeMode={'contain'}
          source={imageLoadError ? {uri: imageNotAvailable} : {uri: imageUrl}}
          style={styles.img}
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={5}>
              {checkText(title)}
            </Text>
            <FavButton />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.section}>Artist:</Text>
              <Text style={styles.sectionValue} numberOfLines={8}>
                {checkText(artist_title)}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.section}>Year:</Text>
              <Text style={styles.sectionValue} numberOfLines={8}>
                {checkText(date_display)}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.section}>Origin:</Text>
              <Text style={styles.sectionValue} numberOfLines={8}>
                {checkText(place_of_origin)}
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            {checkText(description, 'Not Available')}
          </Text>

          <SeeMoreButton />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {width: '100%', height: 250, borderWidth: 1},
  content: {width: '90%', alignSelf: 'center'},
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  title: {
    flex: 0.8,
    color: colors.cream,
    fontSize: 22,
    fontFamily: 'JosefinSans-SemiBold',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'JosefinSans-Light',
    marginVertical: 20,
  },
  infoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoBox: {
    paddingHorizontal: 10,
    width: '33%',
  },
  section: {fontFamily: 'JosefinSans-Medium', color: colors.gray},
  sectionValue: {fontFamily: 'JosefinSans-Medium', color: colors.white},
});

export default ArtDetailsScreen;
