/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import {COLORS, FONTS, SIZES, assets, SHADOWS} from '../constants';
import {Image} from 'react-native';
import SupportScreen from '../screens/SupportScreen';

// Tab stack
const Tab = createBottomTabNavigator();

type Props = {};

const TabGroup = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontFamily: FONTS.regular,
          fontSize: SIZES.large,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused
              ? assets.homeTabIcon
              : assets.homeTabIconInactive;
          } else if (route.name === 'Account') {
            iconName = focused
              ? assets.userTabIcon
              : assets.userTabIconInactive;
          } else if (route.name === 'Support') {
            iconName = focused ? assets.supportTabIcon : assets.helpIcon;
          }

          return (
            <>
              <Image
                source={iconName}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </>
          );
        },
        tabBarActiveTintColor: COLORS.greenShade,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarStyle: {
          alignItems: 'center',
          backgroundColor: COLORS.white,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: SIZES.small,
          fontFamily: FONTS.medium,
        },
      })}>
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen
        name="Account"
        component={UserProfileScreen}
        options={{
          headerTitle: 'My Profile',
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerTitle: 'Help & Support',
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabGroup;
