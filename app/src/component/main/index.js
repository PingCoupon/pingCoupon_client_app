import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import * as Images from '../../assets';

import AttendanceTab from './attendanceTab';

const AttendanceTabStack = createStackNavigator({
  AttendanceTab: {
    screen: AttendanceTab,
    navigationOptions: {
      header: null,
    },
  },
});

const DefaultTabStack = createStackNavigator({
  DefaultTab: {
    screen: AttendanceTab,
    navigationOptions: {
      header: null,
    },
  },
});

const AppTabNavigator = createBottomTabNavigator(
  {
    AttendanceTab: {
      screen: AttendanceTabStack,
      navigationOptions: {
        title: '출석쿠폰',
        initialRouteName: 'AttendanceTab',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              style={{width: 20, height: 20, alignItems: 'center'}}
              source={Images.AttendanceActive}
            />
          ) : (
            <Image
              style={{width: 20, height: 20, alignItems: 'center'}}
              source={Images.Attendance}
            />
          ),
      },
    },
    DefaultTab: {
      screen: DefaultTabStack,
      navigationOptions: {
        title: '일반쿠폰',
        initialRouteName: 'DefaultTab',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              style={{width: 20, height: 20, alignItems: 'center'}}
              source={Images.CouponActive}
            />
          ) : (
            <Image
              style={{width: 20, height: 20, alignItems: 'center'}}
              source={Images.Coupon}
            />
          ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#f6f6f6',
      },
      showLabel: true,
      showIcon: true,
      resetOnBlur: true,
    },
  },
);

export default AppTabNavigator;
