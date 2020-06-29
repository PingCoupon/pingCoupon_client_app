import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

import {Search} from '../../../assets';
import {Style} from './style';

const HeaderRight = () => {
  const goBack = () => {
    setTimeout(() => {
      console.log('액션!');
    }, 400);
  };

  return (
    <Ripple
      onPress={goBack}
      rippleCentered={true}
      rippleContainerBorderRadius={30}>
      <Image source={Search} style={Style.img} />
    </Ripple>
  );
};

export default HeaderRight;
