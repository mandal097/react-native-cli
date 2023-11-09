import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/green_gradient.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* first image */}
        <View
          style={{
            width: 90,
            height: 90,
            position: 'absolute',
            top: 300,
            left: 15,
            transform: [
              {
                rotate: '-20deg',
              },
            ],
          }}>
          <Image
            source={require('../assets/icons/chat.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            resizeMode="cover"
          />
        </View>

        {/* second image */}
        <View
          style={{
            width: 120,
            height: 120,
            position: 'absolute',
            top: 90,
            left: 50,
            transform: [
              {
                rotate: '-10deg',
              },
            ],
          }}>
          <Image
            source={require('../assets/icons/telephone.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            resizeMode="cover"
          />
        </View>
        {/* third image */}
        <View
          style={{
            width: 120,
            height: 120,
            position: 'absolute',
            top: 30,
            right: 30,
            transform: [
              {
                rotate: '-10deg',
              },
            ],
          }}>
          <Image
            source={require('../assets/icons/chat.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        {/* fouth image */}
        <View
          style={{
            width: 180,
            height: 180,
            position: 'absolute',
            top: 220,
            right: 20,
            transform: [
              {
                rotate: '-10deg',
              },
            ],
          }}>
          <Image
            source={require('../assets/icons/telephone.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
            resizeMode="cover"
          />
        </View>

        <View
          style={{
            height: 'auto',
            padding: 10,
            paddingBottom: 20,
            flexDirection: 'column',
            gap: 15,
          }}>
          <Text
            style={{
              fontSize: 50,
              color: COLORS.white,
              fontFamily: FONTS.medium,
            }}>
            Let's Get Started 🤞
          </Text>
          <Text
            style={{
              fontSize: SIZES.large,
              color: COLORS.white,
            }}>
            Connect with our buddies to release your stress!!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{
              backgroundColor: COLORS.white,
              padding: 10,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <Text>Join Now</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              marginTop:10,
            }}>
            <Text style={styles.bottomTxt}>Already have an account?</Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={[
                styles.bottomTxt,
                {
                  color: COLORS.primary,
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                },
              ]}>
              Login
            </Text>
          </View>
        </View>
      </View>
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
    flex: 1,
    position: 'relative',
    padding: 10,
    justifyContent: 'flex-end',
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
