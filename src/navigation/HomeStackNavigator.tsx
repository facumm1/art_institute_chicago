import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ArtDetailsScreen from '../screens/ArtDetailsScreen';

export type StackParamList = {
  HomeScreen: undefined;
  ArtDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator: React.FC = () => {
  //TODO add types for route.params
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
