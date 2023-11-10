import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, assets} from '../constants';

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
          width: 25,
          height: 25,
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontSize: SIZES.large,
          color: COLORS.primary,
          fontFamily:FONTS.regular,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const SupportScreen = ({navigation}: any) => {
  const handleNavigate = (route: string) => {
    navigation.navigate(route);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Card
        imgSrc={assets.whatsAppIcon}
        title="Contact Us"
        onpress={() => handleNavigate('Contact')}
      />
      <Card
        imgSrc={assets.passwordIcon}
        title="Privacy Policy"
        onpress={() => handleNavigate('Privacypolicy')}
      />
      <Card
        imgSrc={assets.helpIcon}
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
