import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';

export const ViewPicButton: React.FC<{imageUrl: string}> = ({imageUrl}) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(imageUrl)}
      style={styles.container}>
      <Text style={styles.text}>VIEW IMAGE</Text>
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
