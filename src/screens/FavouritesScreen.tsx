import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Thumbnail} from '../components/Thumbnails/Thumbnail';
import {NoFavourites} from '../components/Alert/NoFavourites';
import {colors} from '../theme/colors';

const FavouritesScreen: React.FC = () => {
  //TODO Add types & use ArtThumbnails
  const {favsData} = useSelector((state: any) => state.favsData);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Favourite artworks</Text>

      <FlatList
        data={favsData}
        renderItem={({item}) => <Thumbnail item={item} />}
        keyExtractor={({id}) => id}
        ListEmptyComponent={NoFavourites}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkBlue, flex: 1},
  appTitle: {
    alignSelf: 'center',
    color: colors.cream,
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    paddingTop: 20,
    paddingBottom: 10,
    width: '90%',
  },
});
export default FavouritesScreen;
