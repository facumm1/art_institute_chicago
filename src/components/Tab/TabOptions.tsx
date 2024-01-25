import React from 'react';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';

type OptionsParams = {
  focused: boolean;
};

export const HomeStackOptions = {
  tabBarLabel: ({focused}: OptionsParams) => (
    <Text
      style={{
        color: focused ? colors.white : colors.gray,
        fontFamily: 'JosefinSans-Medium',
      }}>
      Artworks
    </Text>
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
    <Text
      style={{
        color: focused ? colors.white : colors.gray,
        fontFamily: 'JosefinSans-Medium',
      }}>
      Favourites
    </Text>
  ),
  tabBarIcon: ({focused}: OptionsParams) => (
    <AntDesign
      name="heart"
      color={focused ? colors.white : colors.gray}
      size={25}
    />
  ),
};
