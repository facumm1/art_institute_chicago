import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../navigation/HomeStackNavigator';

export type ArtworkTypes = {
  id: string;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
  place_of_origin: string;
  description: string;
  thumbnail: {
    alt_text: string;
  };
  imageUrl: string;
  isFavourite: boolean;
};

export type ArtworkRouteType = RouteProp<StackParamList, 'ArtDetailsScreen'>;
