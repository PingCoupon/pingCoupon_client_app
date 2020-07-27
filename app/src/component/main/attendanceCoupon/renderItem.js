import React, {memo} from 'react';
import {Text, View, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

import {EasyIcon, NormalIcon, HardIcon, ExellentIcon} from '../../../assets';
import {renderItemStyle} from './style';

const RenderItem = memo(({item, showDetail}) => {
  const imageNum =
    Math.floor(item.possession / Math.floor(item.required / 4)) + 1;

  return (
    <View style={renderItemStyle.wrapper}>
      <Ripple
        onPress={() => showDetail(item)}
        style={renderItemStyle.ripple}
        rippleContainerBorderRadius={16}
        rippleColor="#E73757"
        rippleOpacity={1}>
        <View style={renderItemStyle.count}>
          <Text style={renderItemStyle.countingText}>
            {item.possession || 0} / {item.required || 0}
          </Text>
        </View>
        <View style={renderItemStyle.info}>
          <Text
            style={renderItemStyle.title}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {item.name || '데이터가 존재하지 않습니다.'}
          </Text>
          <Text style={renderItemStyle.description}>
            {item.provider || '한국'} | {item.created_at || '2002.01.26'}
          </Text>
        </View>
        <View>
          {imageNum === 1 && (
            <Image source={EasyIcon} style={renderItemStyle.icon} />
          )}
          {imageNum === 2 && (
            <Image source={NormalIcon} style={renderItemStyle.icon} />
          )}
          {imageNum === 3 && (
            <Image source={HardIcon} style={renderItemStyle.icon} />
          )}
          {imageNum === 4 && (
            <Image source={ExellentIcon} style={renderItemStyle.icon} />
          )}
        </View>
      </Ripple>
    </View>
  );
});

export default RenderItem;
