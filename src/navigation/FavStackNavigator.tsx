import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavScreen from '../screens/FavScreen';
import ArtDetailsScreen from '../screens/ArtDetailsScreen';

export type StackParamList = {
  HomeScreen: undefined;
  ArtDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const FavStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={FavScreen} />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavStackNavigator;
