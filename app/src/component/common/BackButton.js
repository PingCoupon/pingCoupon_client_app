import React, {useCallback} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {LeftArrow} from '../../assets';

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
    zIndex: 10,
  },
  arraw: {
    width: 20,
    height: 20,
    margin: 10,
  },
  buttons: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BackButton = ({navigation}) => {
  const goBack = useCallback(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 400);
  }, [navigation]);

  return (
    <View style={style.wrapper}>
      <View style={style.buttons}>
        <Ripple
          onPress={goBack}
          rippleCentered={true}
          rippleContainerBorderRadius={30}>
          <Image style={style.arraw} source={LeftArrow} />
        </Ripple>
      </View>
    </View>
  );
};

export default BackButton;
