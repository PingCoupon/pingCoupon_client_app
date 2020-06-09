import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../../utils/size';

export const StartScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: hp('6.3%'),
    paddingTop: hp('32.8%'),
  },
  logo: {
    width: wp('25%'),
    height: wp('25%'),
    marginLeft: wp('3.9%'),
    marginRight: wp('4.2%'),
  },
  text: {
    fontSize: normalize(11),
    marginTop: hp('30%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    letterSpacing: 0.1,
  },
});
