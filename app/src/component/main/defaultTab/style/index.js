import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../../utils/size';

export const style = StyleSheet.create({
  wrapper: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#E73757',
  },
});
