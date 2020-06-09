import React, {useEffect, useCallback, useRef} from 'react';
import {Text, View, Image} from 'react-native';

import * as Images from '../../../assets';
import {StartScreenStyle} from './style';

const StartScreen = ({navigation}) => {
  const didMountRef = useRef(false);

  const bootstrapAsync = useCallback(async () => {
    navigation.navigate('Auth');
  }, [navigation]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      setTimeout(() => {
        bootstrapAsync();
      }, 1400);
    }
  });

  return (
    <View style={StartScreenStyle.container}>
      <Image source={Images.Logo} style={StartScreenStyle.logo} />
      <Text style={StartScreenStyle.text}>© Ping Coupon - 쿠폰모아</Text>
    </View>
  );
};

export default StartScreen;
