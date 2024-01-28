import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {checkText} from '../../util';
import {FavButton, ViewPicButton} from '../Button';
import {ArtworkTypes} from '../../types';
import {colors} from '../../theme/colors';
import {AnimatedFadeView} from '../../wrapper';

type Props = {
  artwork: ArtworkTypes;
  handleFavourite: () => void;
};

export const ArtworkDetails: React.FC<Props> = ({artwork, handleFavourite}) => {
  const {
    isFavourite,
    title,
    artist_title,
    date_display,
    place_of_origin,
    description,
    imageUrl,
  } = artwork;

  return (
    <View style={styles.content}>
      <AnimatedFadeView viewStyle={styles.header}>
        <Text style={styles.title} numberOfLines={5}>
          {checkText(title)}
        </Text>
        <FavButton
          isFavourite={isFavourite}
          handleFavourite={handleFavourite}
        />
      </AnimatedFadeView>

      <AnimatedFadeView viewStyle={styles.infoContainer} duration={2500}>
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
      </AnimatedFadeView>

      <AnimatedFadeView viewStyle={styles.descriptionBox} duration={4000}>
        <Text style={styles.desc}>
          {checkText(description, 'Not Available')}
        </Text>
      </AnimatedFadeView>

      <ViewPicButton imageUrl={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  descriptionBox: {marginVertical: 20},
  desc: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'JosefinSans-Light',
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
