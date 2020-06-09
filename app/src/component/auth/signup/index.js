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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {normalize} from '../../../utils/size';

const LoginScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('App')}>
        <Text>asdf</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
