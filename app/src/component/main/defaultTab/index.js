import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Swiper from 'react-native-web-swiper';

import {style} from './style';

const DefaultTab = ({navigation}) => {
  return (
    <View style={style.wrapper}>
      <SafeAreaView style={{flex: 1}}>
        <Swiper
          minDistanceForAction={0.2}
          onIndexChanged={v => console.log('vv', v)}
          controlsEnabled={false}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,200,0.3)',
            }}>
            <Text>Slide 1</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,200,20,0.3)',
            }}>
            <Text>Slide 2</Text>
          </View>
        </Swiper>
      </SafeAreaView>
    </View>
  );
};

export default DefaultTab;
