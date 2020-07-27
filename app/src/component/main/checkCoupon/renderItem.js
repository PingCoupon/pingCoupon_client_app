import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

import {renderItemStyle} from './style';

const RenderItem = ({item, showDetail}) => {
  return (
    <View style={renderItemStyle.wrapper}>
      <Ripple
        onPress={() => showDetail(item)}
        style={renderItemStyle.ripple}
        rippleContainerBorderRadixus={16}
        rippleColor="#E73757"
        rippleOpacity={1}>
        <View style={renderItemStyle.info}>
          <Text
            style={renderItemStyle.title}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={renderItemStyle.description}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {item.coupon_id}
          </Text>
        </View>
        <View style={renderItemStyle.date}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={renderItemStyle.providerText}>
            {item.provider}
          </Text>
          <Text style={renderItemStyle.dateText}>{item.created_at}</Text>
        </View>
      </Ripple>
    </View>
  );
};

export default RenderItem;
