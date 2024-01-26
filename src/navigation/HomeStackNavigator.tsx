import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import ArtDetailsScreen from '../screens/ArtDetailsScreen';
import {useFetchArtworksQuery} from '../redux/chicagoApi';
import {setArtworks} from '../redux/artworksSlice';
import {ArtworkTypes} from '../types';

export type StackParamList = {
  HomeScreen: undefined;
  ArtDetailsScreen: ArtworkTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator: React.FC = () => {
  //TODO fix types
  const {data, isLoading} = useFetchArtworksQuery({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isLoading) {
      dispatch(setArtworks(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
