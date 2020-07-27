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
import {errorHandle} from '../../../utils/alertText';
import {Background} from './style';
import TextArea from '../TextArea';
import BackButton from '../../common/BackButton';
import {signupApi} from '../../../data/middleware/api';

const SignScreen = ({navigation}) => {
  const toastRef = useRef(null);
  const [signUpError, setSignUpError] = useState(null);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNickname = useCallback(nickname => {
    setNickname(nickname);
  }, []);
  const handleEmail = useCallback(email => {
    setEmail(email);
  }, []);
  const handlePassword = useCallback(password => {
    setPassword(password);
  }, []);

  const signup = useCallback(async () => {
    const errorText = errorHandle({nickname, email, password});
    if (errorText) {
      toastRef.current.show(errorText);
      return;
    }

    const [_, status] = await signupApi({nickname, email, password});

    if (status === 200) {
      toastRef.current.show('회원가입에 성공하였습니다!', 100, () => {
        navigation.navigate('LoginScreen');
      });
    } else {
      setSignUpError('해당 사용자의 정보가 이미 등록되어있습니다.');
    }
  }, [nickname, email, password, navigation]);

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
            value={email}
            onChange={handleEmail}
          />
          <TextArea
            isPassword={true}
            style={Background.textArea}
            label="password"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
            value={password}
            onChange={handlePassword}
          />
          <TextArea
            textContentType="nickname"
            style={Background.textArea}
            label="nickname"
            borderColor="#e6366d"
            borderHeight={3}
            inputPadding={16}
            backgroundColor="#ffffff"
            value={nickname}
            onChange={handleNickname}
          />
          <Text style={Background.warningText}>{signUpError ?? '♥︎'}</Text>

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
      <Toast ref={toastRef} />
    </SafeAreaView>
  );
};

export default SignScreen;
