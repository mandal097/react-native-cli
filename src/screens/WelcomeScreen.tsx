import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, SIZES, assets} from '../constants';
import FocusedStatusBar from '../components/FocusedStatusBar';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={assets.greenGradientBackground}
      style={styles.backgroundImage}>
      <ScrollView>
      <FocusedStatusBar backgroundcolor={COLORS.greenShade} />
        <View style={styles.container}>
          <View
            style={{
              height: 'auto',
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <Image
              style={{
                width: Dimensions.get('screen').height * 0.36,
                height: Dimensions.get('screen').height * 0.36,
              }}
              resizeMode="contain"
              source={assets.AppLogo}
            />
          </View>

          <View
            style={{
              height:'auto',
              padding: 10,
              paddingBottom: 20,
              flexDirection: 'column',
              gap: 15,
            }}>
            <Text
              style={{
                fontSize: 40,
                color: COLORS.white,
                fontFamily: FONTS.medium,
              }}>
              Let's Get Started 🤞
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium,
                color: COLORS.white,
              }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex autem
              totam laboriosam, facere cupiditate laborum ullam alias veniam
              debitis consequuntur!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Text style={{color: COLORS.primary}}>Join Now</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.bottomTxt}>Already have an account?</Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={[
                  styles.bottomTxt,
                  {
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.small,
                  },
                ]}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can adjust this to 'contain' or other values
  },
  container: {
    // flex: 1,
    padding: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  bottomTxt: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
    fontFamily: FONTS.medium,
    marginLeft: 5,
    fontWeight: '600',
  },
});
