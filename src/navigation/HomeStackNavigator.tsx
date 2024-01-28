import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {HomeScreen, ArtDetailsScreen} from '../screens';
import {useFetchArtworksQuery, setArtworks} from '../redux';
import {ArtworkTypes} from '../types';
import {findFavouriteArtworks} from '../util';

export type StackParamList = {
  HomeScreen: undefined;
  ArtDetailsScreen: ArtworkTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator: React.FC = () => {
  //TODO fix types
  const {data, isLoading} = useFetchArtworksQuery({});
  const {favsData} = useSelector((state: any) => state.favsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const checkedArtworks = findFavouriteArtworks(data, favsData);

      dispatch(setArtworks(checkedArtworks));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  //TODO add types for route.params
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
