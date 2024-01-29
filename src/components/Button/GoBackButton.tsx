import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';
import useNavigate from '../../hooks/useNavigate';

export const GoBackButton: React.FC = React.memo(() => {
  const {goBackNav} = useNavigate();

  return (
    <TouchableOpacity onPress={goBackNav} style={styles.btn}>
      <AntDesign name="arrowleft" color={colors.orange} size={30} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 5,
    left: 5,
    padding: 10,
    zIndex: 1,
  },
});
