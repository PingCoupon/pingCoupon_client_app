import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../../utils/size';

export const Background = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'relative',
  },
  imgCover: {
    width: '100%',
    alignItems: 'flex-end',
  },
  img: {
    width: 130,
    height: 130,
  },
  viewPort: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'flex-end',
  },
  titleHeader: {
    width: '85%',
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: normalize(28),
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: normalize(16),
    fontWeight: '100',
  },
  textArea: {
    width: '100%',
    marginBottom: 20,
  },
  warningText: {
    color: 'red',
    fontSize: normalize(10),
  },
  button: {
    width: wp('30%'),
    height: 45,
    borderRadius: 40,
    marginTop: 30,
  },
  buttonFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupPosition: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  touchText: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signupText: {
    fontSize: normalize(12),
    fontWeight: '100',
  },
  colorText: {
    color: '#e92e8c',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
