import React from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {AnimatedFavButton} from './AnimatedFavButton';

type Props = {
  isFavourite: boolean;
  handleFavourite: () => void;
};

export const FavButton: React.FC<Props> = ({isFavourite, handleFavourite}) => {
  const iconScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconScale.value}],
    };
  });

  const handlePress = () => {
    if (!isFavourite) {
      iconScale.value = withSpring(1.75, {
        mass: 2.5,
        stiffness: 200,
        damping: 20,
      });
      setTimeout(() => {
        iconScale.value = withSpring(1, {
          mass: 2.5,
          stiffness: 200,
          damping: 20,
        });
        handleFavourite();
      }, 200);

      return;
    }

    handleFavourite();
  };

  return (
    <AnimatedFavButton
      isFavourite={isFavourite}
      animatedStyle={animatedStyle}
      handlePress={handlePress}
    />
  );
};
