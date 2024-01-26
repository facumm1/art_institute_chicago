import {useNavigation} from '@react-navigation/native';
import {ArtworkTypes} from '../types';

type UseNavigateHook = {
  navigateTo: (screenName: string, data?: ArtworkTypes) => void;
  goBackNav: () => void;
  updateFavIcon: (artwork: any) => void;
};

const useNavigate = (): UseNavigateHook => {
  //TODO add types
  const navigation = useNavigation<any>();

  const navigateTo = (screenName: string, data?: ArtworkTypes) => {
    navigation.navigate(screenName, data);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  const updateFavIcon = (artwork: any) => {
    navigation.setParams({...artwork, isFavourite: !artwork.isFavourite});
  };

  return {navigateTo, goBackNav, updateFavIcon};
};

export default useNavigate;
