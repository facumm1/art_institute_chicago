import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import {chicagoApi, artworksSlice, favsSlice} from './';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favsData'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [chicagoApi.reducerPath]: chicagoApi.reducer,
    artworksData: artworksSlice.reducer,
    favsData: favsSlice.reducer,
  }),
);

//TODO fix serializable
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      chicagoApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
