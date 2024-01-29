import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {ArtThumbnails} from '../components/Flatlist/ArtThumbnails';
import {colors} from '../theme/colors';
import {RootState} from '../redux';

const FavouritesScreen: React.FC = () => {
  const {favsData} = useSelector((state: RootState) => state.favsData);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Favourite artworks</Text>

      <ArtThumbnails artworks={favsData} screen={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkBlue, flex: 1},
  appTitle: {
    alignSelf: 'center',
    color: colors.cream,
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    paddingTop: 20,
    paddingBottom: 10,
    width: '90%',
  },
});
export default FavouritesScreen;
