import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DefaultStyle} from 'react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes';

import {colors} from '../../theme/colors';

type Props = {
  isFavourite: boolean;
  animatedStyle: DefaultStyle;
  handlePress: () => void;
};

export const AnimatedFavButton: React.FC<Props> = ({
  isFavourite,
  animatedStyle,
  handlePress,
}) => {
  const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.btn}>
      <AnimatedIcon
        style={[styles.icon, animatedStyle]}
        name={isFavourite ? 'heart' : 'hearto'}
        color={colors.orange}
        size={25}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
  },
  icon: {padding: 12.5},
});
