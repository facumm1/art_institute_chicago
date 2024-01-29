import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {Loader} from '../Loader/Loader';
import {NoFavourites} from '../Alert/NoFavourites';

import Thumbnail from '../Thumbnails/Thumbnail';
import {ArtworkTypes} from '../../types';
import {colors} from '../../theme/colors';

type Props = {
  artworks: ArtworkTypes[];
  screen?: boolean;
  handlePagination?: () => void;
};

export const ArtThumbnails: React.FC<Props> = ({
  artworks,
  screen = true,
  handlePagination,
}) => {
  const renderFooter = () => {
    if (screen && artworks.length > 0) {
      return <ActivityIndicator size="large" color={colors.cream} />;
    }
    return <></>;
  };

  return (
    <FlatList
      data={artworks}
      renderItem={({item}) => <Thumbnail item={item} />}
      keyExtractor={({id}) => id}
      ListEmptyComponent={screen ? Loader : NoFavourites}
      onEndReached={screen ? handlePagination : () => {}}
      ListFooterComponent={renderFooter}
    />
  );
};
