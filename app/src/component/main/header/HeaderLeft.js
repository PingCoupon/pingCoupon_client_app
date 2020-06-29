import React, {useCallback} from 'react';
import {Image} from 'react-native';

import {Logo} from '../../../assets';
import {Style} from './style';

const HeaderLeft = () => {
  return <Image source={Logo} style={Style.logo} />;
};

export default HeaderLeft;
