import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Ripple from 'react-native-material-ripple';

import {RightBoldArrow, UpWhiteBoldArrow} from '../../../assets';
import {style} from './style';
import renderItem from './renderItem';
import LoadingFooter from './loadingFooter';

const AttendanceCoupon = ({moveToNext}) => {
  const flatListRef = useRef(null);
  const didMountRef = useRef(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getData = useCallback(async () => {
    setIsLoadingMore(true);

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + page)
      .then(res => res.json())
      .then(json => {
        setData(page === 1 ? json : data.concat(json));
        setPage(page + 1);
        setIsLoadingMore(false);
      });
  }, [data, page]);

  const handleLoadMore = useCallback(() => {
    getData();
  }, [getData]);

  const scrollToTop = useCallback(() => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  }, [flatListRef]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getData();
    }
  }, [getData, didMountRef]);

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
      <View style={{flex: 1}}>
        <FlatList
          style={style.flatlist}
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<LoadingFooter loadingMore={isLoadingMore} />}
        />
      </View>
    </View>
  );
};

export default AttendanceCoupon;
