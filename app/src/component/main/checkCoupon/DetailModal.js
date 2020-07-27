import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

import {modalStyle} from './style';

const DetailModal = ({isModalVisible, toggleModal, item}) => {
  return (
    <Modal
      style={modalStyle.modal}
      onBackdropPress={toggleModal}
      isVisible={isModalVisible}
      onSwipeComplete={toggleModal}>
      <View style={modalStyle.wrapper}>
        <View style={modalStyle.Header}>
          <Text style={modalStyle.Title}>{item.name}</Text>
          <View style={modalStyle.Description}>
            <Text style={modalStyle.smallText}>{item.provider}</Text>
            <Text style={modalStyle.smallText}>{item.created_at}</Text>
          </View>
        </View>
        <View style={modalStyle.Contents}>
          <View style={modalStyle.SubTitle}>
            <Text style={modalStyle.subTitleText}>쿠폰 확인하기</Text>
            <Text style={modalStyle.checkCouponText}>{item.coupon_id}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DetailModal;
