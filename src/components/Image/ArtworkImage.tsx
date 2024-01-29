import React from 'react';
import {Image, ImageResizeMode, ImageStyle, StyleProp} from 'react-native';

import {imageNotAvailable} from '../../util';
import useToggle from '../../hooks/useToggle';

type Props = {
  imageUrl: string;
  imageStyles: StyleProp<ImageStyle>;
  sizeMode: ImageResizeMode;
};

export const ArtworkImage: React.FC<Props> = ({
  imageUrl,
  imageStyles,
  sizeMode,
}) => {
  const {on: imageError, setToggle: handleImageError} = useToggle();

  return (
    <Image
      onError={handleImageError}
      resizeMode={sizeMode}
      source={{uri: imageError ? imageNotAvailable : imageUrl}}
      style={imageStyles}
    />
  );
};
