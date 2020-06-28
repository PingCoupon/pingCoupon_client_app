import React from 'react';
import {Text, View, Image} from 'react-native';

import {Search} from '../../../assets';
import {Style} from './style';

const Header = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>쿠폰을 편리하게 관리하세요!</Text>
    </View>
  );
};

export default Header;
