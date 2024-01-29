import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArtDetailsScreen from '../screens/ArtDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import {ArtworkTypes} from '../types';

export type StackParamList = {
  FavouritesScreen: undefined;
  ArtDetailsScreen: ArtworkTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const FavStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavStackNavigator;
