import {useNavigation} from '@react-navigation/native';
import {ArtworkTypes} from '../types';

type UseNavigateHook = {
  navigateTo: (screenName: string, data?: ArtworkTypes) => void;
  goBackNav: () => void;
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

  return {navigateTo, goBackNav};
};

export default useNavigate;
