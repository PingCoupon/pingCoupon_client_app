/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';

import {style} from './style';

const ViewModal = ({
  isModalVisible,
  toggleModal,
  handleAccept,
  title,
  description,
}) => {
  return (
    <Modal
      style={style.modal}
      onBackdropPress={toggleModal}
      isVisible={isModalVisible}
      onSwipeComplete={toggleModal}>
      <View style={style.wrapper}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
        <View style={style.ripperView}>
          <Ripple
            onPress={handleAccept}
            rippleContainerBorderRadius={4}
            style={{...style.ripple, backgroundColor: '#E73757'}}>
            <Text style={style.rippleText}>확인</Text>
          </Ripple>
          <Ripple
            onPress={toggleModal}
            rippleContainerBorderRadius={4}
            style={{...style.ripple, backgroundColor: '#000'}}>
            <Text style={style.rippleText}>취소</Text>
          </Ripple>
        </View>
      </View>
    </Modal>
  );
};

export default ViewModal;
