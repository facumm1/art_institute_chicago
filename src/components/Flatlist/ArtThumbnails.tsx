import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Thumbnail} from '../Thumbnails/Thumbnail';
import {Loading} from '../Loading/Loading';
import {ArtworkTypes} from '../../types';

type Props = {
  artworks: ArtworkTypes[];
};

export const ArtThumbnails: React.FC<Props> = ({artworks}) => {
  return (
    <FlatList
      data={artworks}
      renderItem={({item}) => <Thumbnail item={item} />}
      keyExtractor={({id}) => id}
      ListEmptyComponent={Loading}
      style={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {borderWidth: 0, marginBottom: 50},
});
