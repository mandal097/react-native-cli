import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, assets} from '../constants';
import {useNavigation} from '@react-navigation/native';

type Props = {
  imgSrc: ImageSourcePropType;
  title: string;
  onpress: () => void;
};

const Card = ({imgSrc, title, onpress}: Props) => {
  return (
    <Pressable style={styles.cardContainer} onPress={onpress}>
      <Image
        source={imgSrc}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const SupportScreen = ({navigation}: any) => {
  const handleNavigate = (route: string) => {
    console.log(route);
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Card
        imgSrc={assets.heart}
        title="Contact Us"
        onpress={() => handleNavigate('Contact')}
      />
      <Card
        imgSrc={assets.badge}
        title="FAQs"
        onpress={() => handleNavigate('FAQs')}
      />
      <Card
        imgSrc={assets.person01}
        title="Privacy Policy"
        onpress={() => handleNavigate('PrivacyPolicy')}
      />
      <Card
        imgSrc={assets.person04}
        title="Help Center"
        onpress={() => handleNavigate('Help')}
      />
    </SafeAreaView>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  //   card styling
  cardContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    paddingVertical: 1,
    alignItems: 'center',
  },
});
