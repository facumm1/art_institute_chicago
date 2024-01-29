import {chicagoApi, useFetchArtworksQuery} from './chicagoApi';
import {store, RootState} from './store';
import {artworksSlice} from './artworksSlice';
import {favsSlice} from './favsSlice';
import {setArtworks} from './artworksSlice';

export {chicagoApi, store, useFetchArtworksQuery};

export {artworksSlice, favsSlice, RootState};

export {setArtworks};
