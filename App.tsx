import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import AIC from './src/AIC';
import {colors} from './src/theme/colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={'light-content'} />
      <AIC />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {flex: 1, backgroundColor: colors.darkBlue},
});

export default App;
