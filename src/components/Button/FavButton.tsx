import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';

type Props = {
  isFavourite: boolean;
  handleFavourite: () => void;
};

export const FavButton: React.FC<Props> = ({isFavourite, handleFavourite}) => {
  return (
    <TouchableOpacity onPress={handleFavourite} style={styles.btn}>
      <AntDesign
        style={styles.icon}
        name={isFavourite ? 'heart' : 'hearto'}
        color={colors.orange}
        size={22.5}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {padding: 12.5},
});
