import React, {useState, useCallback} from 'react';
import {Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';

import ViewModal from '../../common/ViewModal';
import {EasyIcon, NormalIcon, HardIcon, ExellentIcon} from '../../../assets';
import {modalStyle} from './style';

const DetailModal = ({isModalVisible, toggleModal, item, useCoupon}) => {
  const imageNum =
    Math.floor(item.possession / Math.floor(item.required / 4)) + 1;
  const [isCheckModal, setCheckModal] = useState(false);

  const toggleCheckModal = useCallback(() => {
    setCheckModal(!isCheckModal);
  }, [isCheckModal]);

  return (
    <Modal
      style={modalStyle.modal}
      onBackdropPress={toggleModal}
      isVisible={isModalVisible}
      onSwipeComplete={toggleModal}>
      <ViewModal
        isModalVisible={isCheckModal}
        toggleModal={toggleCheckModal}
        handleAccept={useCoupon}
        title="정말로 쿠폰을 사용하시겠습니까?"
      />
      <View style={modalStyle.wrapper}>
        {imageNum === 1 && (
          <Image
            source={EasyIcon}
            resizeMode="contain"
            style={modalStyle.pingcouponIcon}
          />
        )}
        {imageNum === 2 && (
          <Image
            source={NormalIcon}
            resizeMode="contain"
            style={modalStyle.pingcouponIcon}
          />
        )}
        {imageNum === 3 && (
          <Image
            source={HardIcon}
            resizeMode="contain"
            style={modalStyle.pingcouponIcon}
          />
        )}
        {imageNum === 4 && (
          <Image
            source={ExellentIcon}
            resizeMode="contain"
            style={modalStyle.pingcouponIcon}
          />
        )}
        <View style={modalStyle.Header}>
          <Text style={modalStyle.Title}>
            {item.name || '데이터가 존재하지 않습니다.'}
          </Text>
          <View style={modalStyle.Description}>
            <Text style={modalStyle.smallText}>{item.provider}</Text>
            <Text style={modalStyle.smallText}>{item.created_at}</Text>
          </View>
        </View>
        <View style={modalStyle.Contents}>
          <View style={modalStyle.SubTitle}>
            <Text style={modalStyle.subTitleText}>쿠폰 상태</Text>
            <Text style={modalStyle.smallText}>
              {item.possession} / {item.required}
            </Text>
          </View>
          <Text style={modalStyle.coupon}>
            {Array(item.possession || 0)
              .fill(null)
              .map(_ => '💌')}
            {Array((item.required || 0) - (item.possession || 0))
              .fill(null)
              .map(_ => '✉️')}
          </Text>
        </View>
        <View style={modalStyle.Contents}>
          <View style={modalStyle.SubTitle}>
            <Text style={modalStyle.subTitleText}>쿠폰 확인하기</Text>
          </View>
          {item.possession !== item.required ? (
            <Text style={modalStyle.checkCouponText}>쿠폰이 부족합니다.</Text>
          ) : (
            <Ripple
              onPress={toggleCheckModal}
              rippleContainerBorderRadius={5}
              style={modalStyle.ripple}>
              <Text style={modalStyle.rippleText}>사용하기</Text>
            </Ripple>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DetailModal;
