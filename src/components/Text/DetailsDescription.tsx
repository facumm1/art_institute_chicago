import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {AnimatedFadeView} from '../../wrapper';
import RenderHTML, {defaultSystemFonts} from 'react-native-render-html';
import {checkText} from '../../util';
import {colors} from '../../theme/colors';

const baseStyle = {
  fontFamily: 'JosefinSans-Light',
  color: colors.white,
  fontSize: 16,
};

const systemFonts = [...defaultSystemFonts, 'JosefinSans-Light'];

export const DetailsDescription: React.FC<{description: string}> = ({
  description,
}) => {
  const {width} = useWindowDimensions();

  return (
    <AnimatedFadeView viewStyle={styles.descriptionBox} duration={4000}>
      <RenderHTML
        baseStyle={baseStyle}
        contentWidth={width}
        source={{html: checkText(description, 'Not Available')}}
        systemFonts={systemFonts}
      />
    </AnimatedFadeView>
  );
};

const styles = StyleSheet.create({
  descriptionBox: {marginVertical: 20},
});
