import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {checkText} from '../../util';
import {FavButton, ViewPicButton} from '../Button';
import {ArtworkTypes} from '../../types';
import {AnimatedFadeView} from '../../wrapper';
import {DetailsDescription, DetailsInformation} from './';
import {colors} from '../../theme/colors';

type Props = {
  artwork: ArtworkTypes;
  handleFavourite: () => void;
};

const MemoizedDetailsInformation = React.memo(DetailsInformation);
const MemoizedDetailsDescription = React.memo(DetailsDescription);
const MemoizedViewPicButton = React.memo(ViewPicButton);

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

      <MemoizedDetailsInformation
        artist_title={artist_title}
        date_display={date_display}
        place_of_origin={place_of_origin}
      />

      <MemoizedDetailsDescription description={description} />

      <MemoizedViewPicButton imageUrl={imageUrl} />
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
});
