import React, {useState, useCallback} from 'react';
import {Text, View} from 'react-native';

import Search from '../search';
import {Style} from './style';

const Header = () => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = useCallback(() => {
  //   setModalVisible(!isModalVisible);
  // }, [isModalVisible]);

  return (
    <View style={Style.container}>
      {/* <Search isModalVisible={isModalVisible} setModalVisible={toggleModal} /> */}
      <Text style={Style.title}>쿠폰을 편리하게 관리하세요!</Text>
    </View>
  );
};

export default Header;
