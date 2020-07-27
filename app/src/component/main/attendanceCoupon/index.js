import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Ripple from 'react-native-material-ripple';
import AsyncStorage from '@react-native-community/async-storage';

import {RightBoldArrow, UpWhiteBoldArrow} from '../../../assets';
import {style} from './style';
import RenderItem from './renderItem';
import LoadingFooter from './loadingFooter';
import DetailModal from './DetailModal';
import {
  getAttendanceCouponsApi,
  useCouponApi,
} from '../../../data/middleware/api';

const AttendanceCoupon = ({moveToNext, navigation}) => {
  const flatListRef = useRef(null);
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getData = useCallback(async () => {
    if (isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);

    const [response, status] = await getAttendanceCouponsApi({
      navigation,
      accessToken: await AsyncStorage.getItem('token'),
      size: 10,
      page,
    });

    setData(page === 1 ? response.coupons : data.concat(response.coupons));
    setPage(page + 1);
    setIsLoadingMore(false);
  }, [data, isLoadingMore, navigation, page]);

  const handleLoadMore = useCallback(() => {
    getData();
  }, [getData]);

  const scrollToTop = useCallback(() => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  }, [flatListRef]);

  const toggleModal = useCallback(
    item => {
      setModalVisible(!isModalVisible);
      setItem(item);
    },
    [isModalVisible],
  );

  const useCoupon = useCallback(async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [_, status] = await useCouponApi({
      accessToken: await AsyncStorage.getItem('token'),
      coupon_id: item?.coupon_id ?? '',
      navigation,
    });

    if (status === 200) {
      setData([]);
      setPage(1);
      toggleModal();
    }
  }, [item, navigation, toggleModal]);

  useEffect(() => {
    if (page === 1) {
      getData();
    }
  }, [getData, page]);

  return (
    <View style={style.wrapper}>
      <View style={style.changeSlideButton}>
        <Ripple onPress={moveToNext} style={style.ripple}>
          <Image source={RightBoldArrow} style={style.arrow} />
          <Text style={style.text}>Next</Text>
        </Ripple>
      </View>
      <View style={style.scrollToTopButton}>
        <Ripple
          rippleContainerBorderRadius={15}
          onPress={scrollToTop}
          style={style.ripple}>
          <Image source={UpWhiteBoldArrow} style={style.arrow} />
          <Text style={style.whiteText}>맨 위로</Text>
        </Ripple>
      </View>
      {item && (
        <DetailModal
          useCoupon={useCoupon}
          item={item}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      )}
      <FlatList
        style={style.flatlist}
        ref={flatListRef}
        data={data}
        ListHeaderComponent={
          data.length === 0 && <Text>데이터가 존재하지 않습니다.</Text>
        }
        renderItem={({item}) => (
          <RenderItem item={item} showDetail={toggleModal} />
        )}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<LoadingFooter loadingMore={isLoadingMore} />}
      />
    </View>
  );
};

export default AttendanceCoupon;
