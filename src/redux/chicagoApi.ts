import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ArtworkTypes} from '../types';

const baseUrl = 'https://api.artic.edu/api/v1';

//TODO add types to res & pagination
export const chicagoApi = createApi({
  reducerPath: 'chicagoFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchArtworks: builder.query({
      query: () => '/artworks?limit=8',
      transformResponse: (res: any) => {
        const artworks = res.data.map((artwork: ArtworkTypes) => {
          const {image_id} = artwork;
          const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

          return {
            ...artwork,
            imageUrl,
            isFavourite: false,
          };
        });

        return artworks;
      },
    }),
  }),
});

export const {useFetchArtworksQuery} = chicagoApi;
