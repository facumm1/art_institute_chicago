import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import useNavigate from '../../hooks/useNavigate';
import {ArtworkImage} from '../Image/ArtworkImage';
import {ArtworkTypes} from '../../types';
import {checkText} from '../../util';
import {colors} from '../../theme/colors';

const Thumbnail: React.FC<{item: ArtworkTypes}> = ({item}) => {
  const {title, artist_title, date_display, thumbnail, imageUrl} = item;
  const {navigateTo} = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => navigateTo('ArtDetailsScreen', item)}
      style={styles.container}>
      <View>
        <ArtworkImage
          imageUrl={imageUrl}
          imageStyles={styles.img}
          sizeMode={'cover'}
        />

        <Text style={styles.artistTitle} numberOfLines={2}>
          {checkText(artist_title)}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.date} numberOfLines={1}>
          {checkText(date_display)}
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {checkText(title)}
        </Text>
        <Text style={styles.shortDescription} numberOfLines={5}>
          {checkText(thumbnail?.alt_text, 'Not Available')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Thumbnail);

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
