import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  useColorScheme,
  Pressable,
} from 'react-native';
import {COLORS, FONTS, SIZES, assets} from '../constants';

const UserProfileScreen = () => {
  const colorScheme = useColorScheme();
  const [name, setName] = React.useState('Amarnath');
  const [dob, setDob] = React.useState('');
  const [placeOfBirth, setPlaceOfBirth] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: 'column',
          width: Dimensions.get('screen').width,
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            marginVertical: 30,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: Dimensions.get('screen').height * 0.16,
              height: Dimensions.get('screen').height * 0.16,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: COLORS.greenShade,
            }}
            resizeMode="contain"
            source={assets.AppLogo}
          />
          <Pressable style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: SIZES.small,
                color: 'blue',
                textDecorationColor: 'blue',
                textDecorationLine: 'underline',
              }}>
              Upload Picture
            </Text>
          </Pressable>
        </View>

        <KeyboardAvoidingView
          style={{marginBottom: 10}}
          enabled
          behavior="padding">
          {/*  */}
          <Text style={styles.label}>Full Name :</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImg}
              source={assets.userTabIcon}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Enter your full name"
              value={name}
              onChangeText={text => setName(text)}
              placeholderTextColor={COLORS.secondary}
              style={{flex: 1, color: COLORS.primary}}
            />
          </View>
          {/*  */}
          <Text style={styles.label}>Date of Birth :</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImg}
              source={assets.dob}
              resizeMode="contain"
            />
            <TextInput
              placeholder="dd/mm/yyyy"
              value={dob}
              onChangeText={text => setDob(text)}
              placeholderTextColor={COLORS.secondary}
              style={{flex: 1, color: COLORS.primary}}
            />
          </View>
          {/*  */}
          <Text style={styles.label}>Place of Birth :</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImg}
              source={assets.address}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Enter place of birth"
              value={placeOfBirth}
              onChangeText={text => setPlaceOfBirth(text)}
              placeholderTextColor={COLORS.secondary}
              style={{flex: 1, color: COLORS.primary}}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              colorScheme === 'dark' ? COLORS.greenShade : COLORS.primary,
          },
        ]}>
        <Text style={{color: COLORS.white, fontFamily: FONTS.semiBold}}>
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.base,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    marginTop: 20,
    marginBottom: 5,
  },
  inputContainer: {
    width: '100%',
    borderRadius: SIZES.font,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  inputImg: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  button: {
    width: Dimensions.get('screen').width - 20,
    padding: 10,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
    marginTop: 50,
    marginBottom: 20,
    borderColor: COLORS.greenShade,
    backgroundColor: COLORS.greenShade,
    justifyContent: 'center',
  },
});
