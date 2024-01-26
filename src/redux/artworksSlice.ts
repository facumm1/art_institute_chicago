import {createSlice} from '@reduxjs/toolkit';
import {ArtworkTypes} from '../types';

export const artworksSlice = createSlice({
  name: 'artworksData',
  initialState: {
    artworksData: [] as ArtworkTypes[],
    isLoading: true as boolean,
  },
  reducers: {
    setArtworks: (state, action) => {
      state.artworksData = action.payload;
      state.isLoading = false;
    },
    toggleArtwork: (state, action) => {
      const id = action.payload;

      const updatedData = state.artworksData.map(artwork => {
        if (artwork.id === id) {
          return {...artwork, isFavourite: !artwork.isFavourite};
        }
        return artwork;
      });

      state.artworksData = updatedData;
    },
  },
});

export const {setArtworks, toggleArtwork} = artworksSlice.actions;
