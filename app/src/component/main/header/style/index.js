import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize} from '../../../../utils/size';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  img: {
    margin: 6,
    width: 17,
    height: 17,
  },
  logo: {
    width: 22,
    height: 22,
  },
});
