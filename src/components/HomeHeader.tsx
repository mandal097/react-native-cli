import React, {ChangeEvent, SetStateAction} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {FONTS, SIZES, COLORS, assets} from '../constants';

const HomeHeader = ({onSearch}: {onSearch: (value: string) => void}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.font,
        paddingVertical: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   borderWidth: 2,
          //   borderColor: 'red',
        }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}>
          FUNtalks
        </Text>
        {/* <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 50,
          }}
        /> */}
        <View style={{width: 35, height: 35}}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{marginVertical: 5}}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello, Amarnath 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginVertical: SIZES.base / 2,
          }}>
          Let's find a buddy
        </Text>
      </View>

      <View>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search your buddy"
            placeholderTextColor={COLORS.primary}
            style={{flex: 1}}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
