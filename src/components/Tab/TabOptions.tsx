import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';
import {AnimatedBounceText} from '../../wrapper';

type OptionsParams = {
  focused: boolean;
};

export const HomeStackOptions = {
  tabBarLabel: ({focused}: OptionsParams) => (
    <AnimatedBounceText focused={focused}>Artworks</AnimatedBounceText>
  ),
  tabBarIcon: ({focused}: OptionsParams) => (
    <AntDesign
      name="picture"
      color={focused ? colors.white : colors.gray}
      size={25}
    />
  ),
};

export const FavStackOptions = {
  tabBarLabel: ({focused}: OptionsParams) => (
    <AnimatedBounceText focused={focused}>Favourites</AnimatedBounceText>
  ),
  tabBarIcon: ({focused}: OptionsParams) => (
    <AntDesign
      name="heart"
      color={focused ? colors.white : colors.gray}
      size={25}
    />
  ),
};
