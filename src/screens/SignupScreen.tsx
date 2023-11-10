import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, SIZES, assets} from '../constants';
import CheckBox from '../components/CheckBox';

const SignupScreen = ({navigation}: any) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);

  const handleSignup = () => {
  navigation.navigate('Tour')
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/green_gradient.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* top content */}
          <View
            style={{
              height: 200,
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                width: 30,
                height: 30,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: COLORS.primary,
                backgroundColor: COLORS.white,
              }}>
              <Image
                style={{width: 15, height: 15}}
                resizeMode="contain"
                source={assets.left}
              />
            </TouchableOpacity>
            <Image
                style={{width: 200, height: 200}}
                resizeMode="contain"
                source={assets.AppLogo}
              />
          </View>
          {/* // content */}
          <ScrollView
            style={{
              // flex: 1,
              padding: 20,
              paddingBottom: 40,
              flexDirection: 'column',
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            {/*  */}

            <Text style={{fontSize: SIZES.small, color: COLORS.greenShade}}>
              Welcome to TalkaBuddy
            </Text>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.primary,
                marginBottom: 30,
              }}>
              Create your Account
            </Text>
            <KeyboardAvoidingView
              style={{marginBottom: 10}}
              enabled
              behavior="padding">
              <Text style={styles.label}>Name :</Text>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputImg}
                  source={assets.userIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder="Enter your name"
                  value={name}
                  placeholderTextColor={COLORS.secondary}
                  onChangeText={text => setName(text)}
                  style={{flex: 1}}
                />
              </View>

              {/*  */}
              <Text style={styles.label}>Phone Number :</Text>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputImg}
                  source={assets.textFieldPhoneIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder="Enter your phone number"
                  value={phone}
                  onChangeText={text => setPhone(text)}
                  keyboardType="phone-pad"
                  placeholderTextColor={COLORS.secondary}
                  style={{flex: 1}}
                />
              </View>
              {/*  */}
              <Text style={styles.label}>Password :</Text>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputImg}
                  source={assets.passwordIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder="Enter your password for login"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholderTextColor={COLORS.secondary}
                  style={{flex: 1}}
                />
              </View>

              {/*  */}
              <CheckBox
                title="Terms and Conditions"
                onPress={handleCheckBox}
                isChecked={isChecked}
              />

              <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={{color: COLORS.white, fontFamily: FONTS.semiBold}}>
                  Sigup
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>

            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                alignSelf: 'center',
                marginTop: 30,
              }}>
              <Text style={styles.bottomTxt}>Already have an account?</Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={[
                  styles.bottomTxt,
                  {
                    color: COLORS.greenShade,
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                  },
                ]}>
                Login
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  label: {
    fontSize: SIZES.small,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
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
    width: '100%',
    padding: 10,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
    marginTop: 50,
    borderColor: COLORS.greenShade,
    backgroundColor: COLORS.greenShade,
    justifyContent: 'center',
  },
  bottomTxt: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    marginLeft: 5,
    fontWeight: '600',
  },
});
