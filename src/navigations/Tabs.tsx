/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONTS, SIZES, assets} from '../constants';
import {Image} from 'react-native';

// Tab stack
const Tab = createBottomTabNavigator();

type Props = {};

const TabGroup = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused ? assets.heart : assets.badge;
          } else if (route.name === 'Account') {
            iconName = focused ? assets.person03 : assets.person02;
          } else if (route.name === 'Accounta') {
            iconName = focused ? assets.person03 : assets.person02;
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
          // return <Icon name="home" size={22} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          alignItems: 'center',
          backgroundColor: COLORS.primary,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: SIZES.small,
          fontFamily: FONTS.medium,
        },
      })}>
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen name="Account" component={UserAccountScreen} />
      <Tab.Screen name="Accounta" component={UserAccountScreen} />
    </Tab.Navigator>
  );
};

export default TabGroup;
