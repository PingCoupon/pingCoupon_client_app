import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import {baseURL} from './currentURL';

const authorizationHeader = accessToken => ({
  Authorization: `Bearer ${accessToken}`,
});

const instanceAxios = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json'},
});

const tokenExpired = async navigation => {
  await AsyncStorage.clear();
  Alert.alert('토큰이 만료되었습니다.', null, [
    {text: '확인', onPress: () => navigation.navigate('Auth')},
    ,
  ]);
};

export const loginApi = async ({email, password}) => {
  const response = await instanceAxios.post('/user/login', {
    email,
    password,
  });

  return [response.data, response.status];
};

export const signupApi = async ({nickname, email, password}) => {
  const response = await instanceAxios.post('/user/signup', {
    email,
    password,
    nickname,
  });

  return [response.data, response.status];
};

export const useCouponApi = async ({accessToken, coupon_id, navigation}) => {
  try {
    const response = await instanceAxios.patch(
      '/coupon',
      {
        coupon_id,
      },
      {
        headers: authorizationHeader(accessToken),
      },
    );

    return [response.data, response.status];
  } catch (e) {
    if (e.response.status === 401) {
      tokenExpired(navigation);
    }

    return [null, e.response.status];
  }
};

export const getAttendanceCouponsApi = async ({
  accessToken,
  size,
  page,
  navigation,
}) => {
  try {
    const response = await instanceAxios.get('/coupons/attendance', {
      headers: authorizationHeader(accessToken),
      params: {
        size,
        page,
      },
    });

    return [response.data, response.status];
  } catch (e) {
    if (e.response.status === 401) {
      tokenExpired(navigation);
    }

    return [null, e.response.status];
  }
};

export const getDefaultCouponsApi = async ({
  accessToken,
  size,
  page,
  navigation,
}) => {
  try {
    const response = await instanceAxios.get('/coupons/default', {
      headers: authorizationHeader(accessToken),
      params: {
        size,
        page,
      },
    });

    return [response.data, response.status];
  } catch (e) {
    if (e.response.status === 401) {
      tokenExpired(navigation);
    }

    return [null, e.response.status];
  }
};
