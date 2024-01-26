import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {chicagoApi, artworksSlice, favsSlice} from './';

export const store = configureStore({
  reducer: {
    [chicagoApi.reducerPath]: chicagoApi.reducer,
    artworksData: artworksSlice.reducer,
    favsData: favsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(chicagoApi.middleware),
});

setupListeners(store.dispatch);
