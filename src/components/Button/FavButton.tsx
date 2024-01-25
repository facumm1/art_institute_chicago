import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';

type Props = {};

export const FavButton: React.FC<Props> = () => {
  const [isFav, setIsFav] = React.useState<boolean>(false);

  const handleFav = () => setIsFav(prevFav => !prevFav);

  //TODO create & use useToggle hook instead of this
  return (
    <TouchableOpacity onPress={handleFav} style={styles.btn}>
      <AntDesign
        style={styles.icon}
        name={isFav ? 'heart' : 'hearto'}
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
