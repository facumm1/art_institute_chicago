import React from 'react';
import {FlatList} from 'react-native';

import {Loader} from '../Loader/Loader';
import {NoFavourites} from '../Alert/NoFavourites';

import Thumbnail from '../Thumbnails/Thumbnail';
import {ArtworkTypes} from '../../types';

type Props = {
  artworks: ArtworkTypes[];
  screen?: boolean;
};

export const ArtThumbnails: React.FC<Props> = ({artworks, screen = true}) => {
  return (
    <FlatList
      data={artworks}
      renderItem={({item}) => <Thumbnail item={item} />}
      keyExtractor={({id}) => id}
      ListEmptyComponent={screen ? Loader : NoFavourites}
    />
  );
};
