import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';

export const SeeMoreButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>SEE MORE</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 25,
  },
  text: {
    color: colors.darkBlue,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'JosefinSans-SemiBold',
    paddingVertical: 15,
  },
});
