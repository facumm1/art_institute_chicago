import {ArtworkTypes} from '../types';

//Check if new articles are already added to favourites
export const findFavouriteArtworks = (
  artworksData: ArtworkTypes[],
  favsData: ArtworkTypes[],
) => {
  return artworksData.map((artwork: any) => {
    const matchingFav = favsData.find(
      (favArtwork: any) => favArtwork.id === artwork.id,
    );

    return matchingFav ? {...artwork, isFavourite: true} : artwork;
  });
};
