import {createSlice} from '@reduxjs/toolkit';
import {ArtworkTypes} from '../types';

export const favsSlice = createSlice({
  name: 'favsData',
  initialState: {
    favsData: [] as ArtworkTypes[],
  },
  reducers: {
    addFav: (state, action) => {
      const articleToAdd = action.payload;

      state.favsData = [
        ...state.favsData,
        {...articleToAdd, isFavourite: !articleToAdd.isFavourite},
      ];
    },
    deleteFav: (state, action) => {
      const id = action.payload;
      const updatedData = state.favsData.filter(fav => fav.id !== id);
      state.favsData = updatedData;
    },
    toggleFavourite: (state, action) => {
      const id = action.payload;
      const updatedData = state.favsData.map(article => {
        if (article.id === id) {
          return {...article, isFavourite: !article.isFavourite};
        }
        return article;
      });
      state.favsData = updatedData;
    },
  },
});

export const {addFav, deleteFav, toggleFavourite} = favsSlice.actions;
