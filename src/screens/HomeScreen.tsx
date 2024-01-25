import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ArtThumbnails} from '../components/Flatlist/ArtThumbnails';
import {colors} from '../theme/colors';
import {useFetch} from '../hooks/useFetch';

const HomeScreen: React.FC = () => {
  const {artworks} = useFetch();

  //TODO check all texts, what if endpoint is not working or no internet available.
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Browse</Text>

      <ArtThumbnails artworks={artworks} />
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

export default HomeScreen;
