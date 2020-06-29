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
    flex: 1,
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
