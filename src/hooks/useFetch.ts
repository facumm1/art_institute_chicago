import {useEffect, useState} from 'react';
import axios from 'axios';

import {ArtworkTypes} from '../types';

const endpoint = 'https://api.artic.edu/api/v1/artworks?limit=8';

export const useFetch = () => {
  const [artworks, setArtworks] = useState<ArtworkTypes[]>([]);

  const handleArtworks = (artData: ArtworkTypes[]) => setArtworks(artData);

  //TODO Create custom hooks for fetching data
  const fetchArtworks = async () => {
    try {
      const response = await axios.get(endpoint);
      const items = response.data.data;

      const updatedItems = items.map((artworkData: ArtworkTypes) => {
        const {image_id} = artworkData;
        const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

        return {...artworkData, imageUrl};
      });

      handleArtworks(updatedItems);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  useEffect(() => {
    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {artworks};
};
