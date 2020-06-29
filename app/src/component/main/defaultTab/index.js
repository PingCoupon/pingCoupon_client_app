import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Swiper from 'react-native-web-swiper';

import AttendanceCoupon from '../attendanceCoupon';
import CheckCoupon from '../checkCoupon';
import {style} from './style';

const DefaultTab = ({navigation}) => {
  const swiperRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [titleInfo, setTitleInfo] = useState({
    title: '',
    subTitle: '',
  });

  const handleSlideNumber = useCallback(slide => {
    setSlideNumber(slide);
  }, []);

  const moveToNext = useCallback(() => {
    setTimeout(() => {
      swiperRef.current.goToNext();
    }, 300);
  }, []);

  const moveToPrev = useCallback(() => {
    setTimeout(() => {
      swiperRef.current.goToPrev();
    }, 300);
  }, []);

  useEffect(() => {
    if (slideNumber === 0) {
      setTitleInfo({
        title: '출석쿠폰',
        subTitle: '출석체크 형식의 쿠폰을 관리합니다.',
      });
    }

    if (slideNumber === 1) {
      setTitleInfo({
        title: '단순쿠폰',
        subTitle: '일반적인 쿠폰을 관리합니다.',
      });
    }
  }, [slideNumber]);

  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.head}>
        <Text style={style.title}>{titleInfo.title}</Text>
        <Text style={style.subTitle}>{titleInfo.subTitle}</Text>
      </View>
      <View style={style.swiper}>
        <Swiper
          ref={swiperRef}
          minDistanceForAction={0.5}
          onIndexChanged={handleSlideNumber}
          controlsEnabled={false}>
          <AttendanceCoupon moveToNext={moveToNext} />
          <CheckCoupon moveToPrev={moveToPrev} />
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default DefaultTab;
