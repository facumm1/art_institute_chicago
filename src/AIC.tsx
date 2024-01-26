import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from './redux';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const AIC: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default AIC;
