import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

import BackButton from '../../common/BackButton';
import {style} from './style';

const Search = ({isModalVisible, setModalVisible}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onSwipeComplete={() => setModalVisible(false)}>
      <View>
        <Text>asdf</Text>
      </View>
    </Modal>
  );
};

export default Search;
