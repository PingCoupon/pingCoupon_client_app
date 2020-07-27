import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Ripple from 'react-native-material-ripple';
import AsyncStorage from '@react-native-community/async-storage';

import {LeftBoldArrow, UpWhiteBoldArrow} from '../../../assets';
import {style} from './style';
import RenderItem from './renderItem';
import LoadingFooter from './loadingFooter';
import DetailModal from './DetailModal';
import {getDefaultCouponsApi} from '../../../data/middleware/api';

const CheckCoupon = ({moveToPrev, navigation}) => {
  const flatListRef = useRef(null);
  const didMountRef = useRef(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [page, setPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getData = useCallback(async () => {
    if (isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);

    const [response, _] = await getDefaultCouponsApi({
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

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getData();
    }
  }, [getData, didMountRef]);

  return (
    <View style={style.wrapper}>
      <View style={style.changeSlideButton}>
        <Ripple onPress={moveToPrev} style={style.ripple}>
          <Image source={LeftBoldArrow} style={style.arrow} />
          <Text style={style.text}>Prev</Text>
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
      <DetailModal
        item={item}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
      <FlatList
        style={style.flatlist}
        ref={flatListRef}
        data={data}
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

export default CheckCoupon;
