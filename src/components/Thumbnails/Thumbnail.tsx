import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {colors} from '../../theme/colors';
import {ArtworkTypes} from '../../types';
import {checkText} from '../../util';

const unknown =
  'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

export const Thumbnail: React.FC<{item: ArtworkTypes}> = ({item}) => {
  const {title, artist_title, image_id, date_display, thumbnail} = item;

  //TODO refactor this
  const imageUrl = image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
    : unknown;

  const [imageLoadError, setImageLoadError] = React.useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image
          onError={handleImageError}
          source={imageLoadError ? {uri: unknown} : {uri: imageUrl}}
          style={styles.img}
          resizeMode="cover"
        />
        <Text style={styles.artistTitle}>{artist_title}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.date}>{date_display}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.shortDescription}>
          {checkText(thumbnail?.alt_text, 120)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    width: '90%',
  },
  img: {width: 150, height: 150},
  infoBox: {
    flexShrink: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  date: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'JosefinSans-SemiBold',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '500',
    paddingTop: 10,
    fontFamily: 'JosefinSans-Medium',
  },
  artistTitle: {
    marginTop: 5,
    color: colors.gray,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'JosefinSans-Bold',
    width: 150,
  },
  shortDescription: {
    color: colors.cream,
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'JosefinSans-Medium',
  },
});
