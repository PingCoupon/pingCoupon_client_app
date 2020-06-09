import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
