import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ArtworkTypes} from '../types';
import {StackParamList} from '../navigation/HomeStackNavigator';

type UseNavigateHook = {
  navigateTo: (screenName: ScreenName, data: ArtworkTypes | any) => void;
  goBackNav: () => void;
  updateFavIcon: (artwork: ArtworkTypes) => void;
};

type ScreenName = keyof StackParamList;

export type NavigateProp = NavigationProp<StackParamList, ScreenName>;

const useNavigate = (): UseNavigateHook => {
  const navigation = useNavigation<NavigateProp>();

  const navigateTo = (screenName: ScreenName, data: ArtworkTypes | any) => {
    navigation.navigate(screenName, data);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  const updateFavIcon = (artwork: ArtworkTypes) => {
    navigation.setParams({...artwork, isFavourite: !artwork.isFavourite});
  };

  return {navigateTo, goBackNav, updateFavIcon};
};

export default useNavigate;
