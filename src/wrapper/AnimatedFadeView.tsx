import React, {useEffect} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type WrapperProps = {
  children: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  duration?: number;
};

export const AnimatedFadeView: React.FC<WrapperProps> = ({
  children,
  viewStyle = {},
  duration = 500,
}) => {
  const translateY = useSharedValue(-50);
  const fadeIn = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      opacity: fadeIn.value,
    };
  });

  useEffect(() => {
    translateY.value = withSpring(0, {damping: 100, stiffness: 80});
    fadeIn.value = withTiming(1, {duration});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[viewStyle, animatedStyle]}>{children}</Animated.View>
  );
};
