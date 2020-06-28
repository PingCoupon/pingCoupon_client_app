import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-easy-toast';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

import {PingCouponLoginBg} from '../../../assets';
import {Background} from './style';
import TextArea from '../TextArea';
import BackButton from '../../common/BackButton';

const SignScreen = ({navigation}) => {
  const signup = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  return (
    <SafeAreaView style={Background.container}>
      <BackButton navigation={navigation} />
      <View style={Background.imgCover}>
        <Image style={Background.img} source={PingCouponLoginBg} />
      </View>

      <View style={Background.viewPort}>
        <View style={Background.titleHeader}>
          <Text style={Background.title}>Create Account</Text>
        </View>
        <View style={Background.content}>
          <TextArea
            style={Background.textArea}
            label="email"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
          />
          <TextArea
            isPassword={true}
            textContentType="password"
            style={Background.textArea}
            label="password"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
          />
          <TextArea
            textContentType="nickname"
            style={Background.textArea}
            label="nickname"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
          />
          <Text style={Background.warningText}>♥︎</Text>
          {/* 위에꺼 이런 문구 적는 곳(하트는 default값) -> 비밀번호가 틀렸습니다. */}

          <LinearGradient
            colors={['#ec9ac1', '#e92e8c']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={Background.button}>
            <Ripple
              onPress={signup}
              rippleContainerBorderRadius={40}
              style={Background.buttonFlex}>
              <Text style={Background.buttonText}>SIGN UP</Text>
            </Ripple>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignScreen;
