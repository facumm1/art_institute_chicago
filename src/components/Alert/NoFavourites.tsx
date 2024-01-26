import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../theme/colors';

export const NoFavourites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have favourite artworks yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'center', width: '90%'},
  text: {
    fontFamily: 'JosefinSans-Medium',
    color: colors.white,
    fontSize: 16,
  },
});
