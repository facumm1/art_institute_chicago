import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {colors} from '../theme/colors';

export const AnimatedBounceText = ({
  focused,
  children,
}: {
  focused: boolean;
  children: React.ReactNode;
}) => {
  const sv = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: sv.value,
      transform: [{scale: sv.value}],
    };
  });

  if (focused) {
    sv.value = withSpring(1, {stiffness: 100});
  }

  if (!focused) {
    sv.value = withSpring(0.75, {stiffness: 100});
  }

  return (
    <Animated.Text
      style={[
        {
          color: focused ? colors.white : colors.gray,
          fontFamily: 'JosefinSans-Medium',
        },
        animatedStyle,
      ]}>
      {children}
    </Animated.Text>
  );
};
