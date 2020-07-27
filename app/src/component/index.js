import React, {useRef, useEffect, useCallback} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {request, PERMISSIONS} from 'react-native-permissions';

import StartScreen from './auth/startScreen';
import LoginScreen from './auth/login';
import SignupScreen from './auth/signup';
import DefaultTab from './main/defaultTab';
import Search from './main/search';
import Header from './main/header';
import HeaderLeft from './main/header/HeaderLeft';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {position, layout, scene} = sceneProps;
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      });

      const slideFromRight = {transform: [{translateX}]};

      return slideFromRight;
    },
  };
};

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    SignupScreen,
  },
  {headerMode: 'none'},
);

const AppStack = createStackNavigator(
  {
    DefaultTab,
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    transitionConfig,
    defaultNavigationOptions: {
      headerTitle: Header,
      headerLeft: HeaderLeft,
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
      headerStyle: {
        backgroundColor: '#E73757',
        elevation: 0,
        borderBottomWidth: 0,
      },
    },
    headerMode: 'screen',
    headerLayoutPreset: 'center',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: StartScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

async function requestAndroidPermission() {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: '위치 정보 서비스 활성화',
        message:
          '앱을 사용하기 위해서는 위치 정보 서비스에 동의하셔야 합니다.\n동의하시겠습니까?',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: '위치 정보 서비스 활성화',
        message:
          '앱을 사용하기 위해서는 위치 정보 서비스에 동의하셔야 합니다.\n동의하시겠습니까?',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
}
async function requestIosPermission() {
  try {
    await request(PERMISSIONS.IOS.LOCATION_ALWAYS, {
      title: '위치 정보 서비스 활성화',
      message:
        '앱을 사용하기 위해서는 위치 정보 서비스에 동의하셔야 합니다.\n동의하시겠습니까?',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, {
      title: '위치 정보 서비스 활성화',
      message:
        '앱을 사용하기 위해서는 위치 정보 서비스에 동의하셔야 합니다.\n동의하시겠습니까?',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
  } catch (err) {
    console.warn(err);
  }
}

const App = () => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (Platform.OS === 'android') {
        requestAndroidPermission();
      } else {
        requestIosPermission();
      }
    }
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </>
  );
};

export default App;
