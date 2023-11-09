import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, assets} from '../constants';

type Props = {
  isChecked: boolean;
  onPress: () => void;
  title: string;
};

const CheckBox = ({isChecked, onPress, title}: Props) => {
  const iconImg = isChecked ? assets.heart : assets.badge;

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Image
          style={{width: 15, height: 15}}
          resizeMode="contain"
          source={iconImg}
        />
      </Pressable>
      <Text style={styles.title}>I agree with</Text>
      <Text style={[styles.title, {color: COLORS.greenShade}]}>{title}{'.'}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 25,
    marginHorizontal: 5,
  },
  pressable: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    marginLeft: 5,
    fontWeight: '600',
  },
});
