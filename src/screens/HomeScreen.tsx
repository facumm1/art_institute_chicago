import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {ArtThumbnails} from '../components/Flatlist/ArtThumbnails';
import {colors} from '../theme/colors';
import {RootState} from '../redux';

const HomeScreen: React.FC = () => {
  const {artworksData} = useSelector((state: RootState) => state.artworksData);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Browse</Text>

      <ArtThumbnails artworks={artworksData} />
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
