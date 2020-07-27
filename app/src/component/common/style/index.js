import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../utils/size';

export const style = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: wp('60%'),
    height: hp('20%'),
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(12),
    fontWeight: '100',
    color: '#000',
  },
  description: {
    fontSize: normalize(9),
    fontWeight: '100',
    color: '#000',
  },
  ripperView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ripper: {
    borderColor: '#E73757',
  },
  ripperButton: {
    width: '20%',
    height: '20%',
  },
  rippleText: {
    fontSize: normalize(12),
    fontWeight: '100',
    color: '#ffffff',
    padding: 10,
  },
});
