import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {HomeScreen, ArtDetailsScreen} from '../screens';
import {useFetchArtworksQuery, setArtworks, RootState} from '../redux';
import {ArtworkTypes} from '../types';
import {findFavouriteArtworks} from '../util';
import {usePagination} from '../hooks/usePagination';

export type StackParamList = {
  HomeScreen: undefined;
  ArtDetailsScreen: ArtworkTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator: React.FC = () => {
  const {pagination, handlePagination} = usePagination();
  const {data, isLoading} = useFetchArtworksQuery({limit: pagination});
  const {favsData} = useSelector((state: RootState) => state.favsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const checkedArtworks = findFavouriteArtworks(
        data as ArtworkTypes[],
        favsData,
      );

      dispatch(setArtworks(checkedArtworks));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="HomeScreen"
        children={() => <HomeScreen handlePagination={handlePagination} />}
      />
      <Stack.Screen name="ArtDetailsScreen" component={ArtDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
