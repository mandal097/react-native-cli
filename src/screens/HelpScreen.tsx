import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, assets} from '../constants';

const HelpScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
      }}>
      <Image
        source={assets.helpScreenBg}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          marginRight: 10,
        }}
      />
      <Text style={{
        fontSize:30,
        color:COLORS.primary,
      }}>Coming Soon</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({});
