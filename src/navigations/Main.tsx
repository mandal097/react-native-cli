import {StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabGroup from './Tabs';
import BuddyProfileScreen from '../screens/BuddyProfileScreen';
import ContactScreen from '../screens/ContactScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import HelpScreen from '../screens/HelpScreen';
import {COLORS, FONTS, SIZES, SHADOWS, assets} from '../constants';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: any;
};

const Main = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontFamily: FONTS.medium,
          fontSize: SIZES.large,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        // headerLeft: () => (
        //   <Pressable onPress={() => props.navigation.navigate('Support')}>
        //     <Image
        //       source={assets.left}
        //       style={{
        //         width: 20,
        //         height: 20,
        //         resizeMode: 'contain',
        //         marginRight: 10,
        //       }}
        //     />
        //   </Pressable>
        // ),
      }}>
      <Stack.Screen name="Home" component={TabGroup} />
      <Stack.Screen
        name="Buddyprofile"
        component={BuddyProfileScreen}
        options={{headerShown: true, headerTitle: 'Profile'}}
      />

      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: true, headerTitle: 'Contact'}}
      />
      <Stack.Screen
        name="Privacypolicy"
        component={PrivacyPolicyScreen}
        options={{
          headerShown: true,
          headerTitle: 'Privacy Policy',
        }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{headerShown: true, headerTitle: 'Help Center'}}
      />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
