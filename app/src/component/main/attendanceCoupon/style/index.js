import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../../utils/size';

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderRightWidth: 0.5,
    borderRightColor: '#E73757',
    marginLeft: -0.5,
  },
  changeSlideButton: {
    position: 'absolute',
    zIndex: 1000,
    right: 0.5,
    top: hp('5%'),
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 50,
    height: 100,
    overflow: 'hidden',
  },
  scrollToTopButton: {
    position: 'absolute',
    zIndex: 1000,
    right: 20,
    bottom: 20,
    backgroundColor: '#E73757',
    borderRadius: 15,
    width: 60,
    height: 60,
  },
  ripple: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: normalize(10),
    fontWeight: '100',
  },
  whiteText: {
    fontSize: normalize(10),
    fontWeight: '300',
    color: '#fff',
    marginTop: 5,
  },
  flatlist: {
    width: '100%',
    height: '100%',
    padding: 30,
  },
  loading: {
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
  },
  indicator: {
    color: '#E73757',
  },
});

export const renderItemStyle = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 80,
    borderColor: '#E73757',
    borderWidth: 0.5,
    borderRadius: 16,
    marginBottom: 20,
  },
  ripple: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  count: {
    backgroundColor: '#E73757',
    borderRadius: 12,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  countingText: {
    fontSize: normalize(10),
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: normalize(11),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: normalize(9),
    fontWeight: '100',
  },
  info: {
    width: '60%',
    paddingRight: 10,
    marginRight: 10,
    borderRightColor: '#e9e9e9',
    borderRightWidth: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export const modalStyle = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: wp('80%'),
    height: hp('70%'),
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: '5%',
    alignItems: 'center',
  },
  pingcouponIcon: {
    width: '80%',
    borderWidth: 0.5,
    borderColor: '#E73757',
    borderRadius: 12,
  },
  Title: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginVertical: 10,
  },
  Header: {
    marginBottom: 20,
  },
  Hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#E73757',
    marginVertical: 10,
  },
  Description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: normalize(9),
    fontWeight: '100',
  },
  Contents: {
    width: '80%',
    alignItems: 'flex-start',
  },
  SubTitle: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subTitleText: {
    fontSize: normalize(13),
  },
  coupon: {
    fontSize: normalize(13),
    lineHeight: 24,
  },
  checkCouponText: {
    fontSize: normalize(10),
    color: '#9f9f9f',
  },
  rippleText: {
    fontSize: normalize(10),
    color: '#ffffff',
  },
  ripple: {
    padding: 10,
    backgroundColor: '#E73757',
    borderRadius: 5,
  },
});
