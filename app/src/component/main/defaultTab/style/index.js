import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header} from 'react-navigation-stack';

import {normalize} from '../../../../utils/size';

export const style = StyleSheet.create({
  wrapper: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#E73757',
  },
  head: {
    width: '100%',
    height: hp('12%'),
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  searchIcon: {
    margin: 6,
    width: 17,
    height: 17,
  },
  swiper: {
    width: '100%',
    height: hp('88%') - Header.HEIGHT - 24,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: normalize(17),
    color: '#fff',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: normalize(12),
    color: '#fff',
    fontWeight: '300',
  },
});
