import {useDispatch} from 'react-redux';

import {toggleArtwork} from '../redux/artworksSlice';
import {addFav, deleteFav} from '../redux/favsSlice';
import {ArtworkTypes} from '../types';

type UseFavouriteHook = {
  addToFavourites: (artwork: ArtworkTypes) => void;
  removeFromFavourites: (id: string) => void;
};

export const useFavourite = (): UseFavouriteHook => {
  const dispatch = useDispatch();

  const updateFavArtwork = (id: string) => {
    dispatch(toggleArtwork(id));
  };

  const addToFavourites = (artwork: ArtworkTypes) => {
    dispatch(addFav(artwork));
    updateFavArtwork(artwork.id);
  };

  const removeFromFavourites = (id: string) => {
    dispatch(deleteFav(id));
    updateFavArtwork(id);
  };

  return {addToFavourites, removeFromFavourites};
};
