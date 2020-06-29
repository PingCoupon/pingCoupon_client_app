import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';

import {style} from './style';

const RenderItem = ({item}) => {
  return (
    <View style={{width: '100%', backgroundColor: '#f2f2f2', marginBottom: 20}}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default RenderItem;
