import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';

const AIC: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AIC;
