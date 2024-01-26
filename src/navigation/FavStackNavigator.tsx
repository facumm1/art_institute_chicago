import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArtDetailsScreen from '../screens/ArtDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

export type StackParamList = {
  FavouritesScreen: undefined;
  ArtDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const FavStackNavigator: React.FC = () => {
  //TODO fix types
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavStackNavigator;
