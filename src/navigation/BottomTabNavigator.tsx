import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FavStackOptions, HomeStackOptions} from '../components/Tab/TabOptions';
import {HomeStackNavigator, FavStackNavigator} from './';
import {colors} from '../theme/colors';

export type TabParamList = {
  HomeStackNavigator: undefined;
  FavStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.darkBlue,
          paddingTop: 5,
          paddingBottom: 7.5,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={HomeStackOptions}
      />
      <Tab.Screen
        name="FavStackNavigator"
        component={FavStackNavigator}
        options={FavStackOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
