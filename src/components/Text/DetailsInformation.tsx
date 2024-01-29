import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AnimatedFadeView} from '../../wrapper';
import {checkText} from '../../util';
import {colors} from '../../theme/colors';

type Props = {
  artist_title: string;
  date_display: string;
  place_of_origin: string;
};

export const DetailsInformation: React.FC<Props> = ({
  artist_title,
  date_display,
  place_of_origin,
}) => {
  return (
    <AnimatedFadeView viewStyle={styles.infoContainer} duration={2500}>
      <View style={styles.infoBox}>
        <Text style={styles.section}>Artist:</Text>
        <Text style={styles.sectionValue} numberOfLines={8}>
          {checkText(artist_title)}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.section}>Year:</Text>
        <Text style={styles.sectionValue} numberOfLines={8}>
          {checkText(date_display)}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.section}>Origin:</Text>
        <Text style={styles.sectionValue} numberOfLines={8}>
          {checkText(place_of_origin)}
        </Text>
      </View>
    </AnimatedFadeView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoBox: {
    paddingHorizontal: 10,
    width: '33%',
  },
  section: {fontFamily: 'JosefinSans-Medium', color: colors.gray},
  sectionValue: {fontFamily: 'JosefinSans-Medium', color: colors.white},
});
