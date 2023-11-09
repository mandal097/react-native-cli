import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabGroup from './Tabs';
import BuddyDetailScreen from '../screens/BuddyDetailScreen';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabGroup} />
      <Stack.Screen name="Buddydetail" component={BuddyDetailScreen} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
