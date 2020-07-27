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
import {loginApi} from '../../../data/middleware/api';
import {errorHandle} from '../../../utils/alertText';

const LoginScreen = ({navigation}) => {
  const toastRef = useRef(null);
  const [loginError, setLoginError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback(email => {
    setEmail(email);
  }, []);
  const handlePassword = useCallback(password => {
    setPassword(password);
  }, []);

  const goToSignup = useCallback(() => {
    navigation.navigate('SignupScreen');
  }, [navigation]);

  const signin = useCallback(async () => {
    const errorText = errorHandle({email, password});
    if (errorText) {
      toastRef.current.show(errorText);
      return;
    }

    const [data, status] = await loginApi({email, password});

    if (status === 200) {
      AsyncStorage.setItem('token', data.accessToken);
      toastRef.current.show('로그인에 성공하였습니다!', 100, () => {
        navigation.navigate('App');
      });
    } else {
      setLoginError('비밀번호가 옳바르지않습니다.');
    }
  }, [email, navigation, password]);

  return (
    <SafeAreaView style={Background.container}>
      <View style={Background.imgCover}>
        <Image style={Background.img} source={PingCouponLoginBg} />
      </View>

      <View style={Background.viewPort}>
        <View style={Background.titleHeader}>
          <Text style={Background.title}>Login</Text>
          <Text style={Background.description}>
            Please Sign in to continue.
          </Text>
        </View>
        <View style={Background.content}>
          <TextArea
            style={Background.textArea}
            label="Email"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
            value={email}
            onChange={handleEmail}
          />
          <TextArea
            isPassword={true}
            style={Background.textArea}
            label="PW"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
            value={password}
            onChange={handlePassword}
          />
          <Text style={Background.warningText}>{loginError ?? '♥︎'}</Text>

          <LinearGradient
            colors={['#ec9ac1', '#e92e8c']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={Background.button}>
            <Ripple
              onPress={signin}
              rippleContainerBorderRadius={40}
              style={Background.buttonFlex}>
              <Text style={Background.buttonText}>LOGIN</Text>
            </Ripple>
          </LinearGradient>
        </View>
      </View>
      <View style={Background.signupPosition}>
        <TouchableOpacity onPress={goToSignup} style={Background.touchText}>
          <Text style={Background.signupText}>Don't have an account?</Text>
          <Text style={Background.colorText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toastRef} />
    </SafeAreaView>
  );
};

export default LoginScreen;
