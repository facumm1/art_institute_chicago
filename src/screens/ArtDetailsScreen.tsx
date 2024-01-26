import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {GoBackButton} from '../components/Button';
import {ArtworkImage} from '../components/Image/ArtworkImage';
import {ArtworkDetails} from '../components/Text/ArtworkDetails';
import {useFavourite, useNavigate} from '../hooks';

import {colors} from '../theme/colors';
import {ArtworkTypes} from '../types';

type Props = {route: {params: ArtworkTypes}};

const ArtDetailsScreen: React.FC<Props> = ({route}) => {
  const {id, isFavourite, imageUrl} = route.params;

  const isFocused = useIsFocused();
  const {goBackNav, updateFavIcon} = useNavigate();
  const {addToFavourites, removeFromFavourites} = useFavourite();

  const handleFavourite = () => {
    updateFavIcon(route.params); //Updates isFavourite from route.params

    if (isFavourite) {
      removeFromFavourites(id); //Remove artwork from favsData
    } else {
      addToFavourites(route.params); //Add artwork to favsData
    }
  };

  useEffect(() => {
    if (!isFocused) {
      goBackNav();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <ScrollView style={{backgroundColor: colors.darkBlue}}>
      <View>
        <GoBackButton />

        <ArtworkImage
          imageUrl={imageUrl}
          imageStyles={styles.img}
          sizeMode={'contain'}
        />

        <ArtworkDetails
          artwork={route.params}
          handleFavourite={handleFavourite}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {width: '100%', height: 250, borderWidth: 1},
});

export default ArtDetailsScreen;
