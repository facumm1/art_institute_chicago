import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from '../../theme/colors';

export const Loading = () => {
  //TODO add skeleton while loading
  return (
    <ActivityIndicator
      style={styles.indicator}
      color={colors.white}
      size="large"
    />
  );
};

const styles = StyleSheet.create({
  indicator: {marginTop: 20},
});
