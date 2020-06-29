import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {style} from './style';

const LoadingFooter = ({loadingMore}) => {
  return loadingMore ? (
    <View style={style.loading}>
      <ActivityIndicator style={style.indicator} animating size="large" />
    </View>
  ) : null;
};

export default LoadingFooter;
