import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, SHADOWS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BuddyCardProps} from '../types';

type Props = {
  item: BuddyCardProps;
  navigation: any;
};

const BuddyCard = ({item, navigation}: Props) => {
  const [favs, setFavs] = React.useState(false);

  const navigateToDetails = () => {
    navigation.navigate('Buddydetail');
  };

  const handleFavHeart = () => {
    setFavs(!favs);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cornerDecoration}>
        <Image
          source={require('../assets/icons/badge.png')}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
          }}
        />
        <Text
          style={{
            color: COLORS.white,
            fontSize: 10,
            fontFamily: FONTS.semiBold,
          }}>
          Top choice
        </Text>
      </View>
      <View style={styles.cardHeader}>
        <TouchableOpacity
          onPress={handleFavHeart}
          style={{
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 100,
            width: 30,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
          }}>
          {!favs ? (
            <Image
              source={require('../assets/icons/heart_hollow.png')}
              resizeMode="contain"
              style={{
                width: '70%',
                height: '70%',
                borderRadius: 100,
              }}
            />
          ) : (
            <Image
              source={require('../assets/icons/heart.png')}
              resizeMode="contain"
              style={{
                width: '70%',
                height: '70%',
                borderRadius: 100,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.left}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={navigateToDetails}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              gap: 3,
              marginTop: 3,
            }}>
            <Image
              source={require('../assets/icons/badge.png')}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Image
              source={require('../assets/icons/badge.png')}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Image
              source={require('../assets/icons/badge.png')}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Image
              source={require('../assets/icons/badge.png')}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
        <View style={styles.right}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              marginBottom: 1,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.secondary,
            }}>
            Tarot life regression
          </Text>
          <View style={{flexDirection: 'row', gap: 5, marginVertical: 7}}>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
                marginBottom: 10,
                color: 'red',
                textDecorationLine: 'line-through',
                textDecorationColor: 'black',
              }}>
              ₹100
            </Text>
            <Text
              style={{
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
                color: COLORS.primary,
                marginBottom: 10,
              }}>
              ₹70/min
            </Text>
            <View style={styles.action}>
              <TouchableOpacity style={styles.actionButton}>
                <Image
                  source={require('../assets/icons/telephone.jpg')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Image
                  source={require('../assets/icons/chat.jpg')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.viewProfileBtn}
            onPress={navigateToDetails}>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}>
              View profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuddyCard;

const styles = StyleSheet.create({
  container: {
    width: '96%',
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: 10,
    paddingBottom: 15,
    overflow: 'hidden',
    position: 'relative',
    ...SHADOWS.medium,
  },
  cardHeader: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cornerDecoration: {
    width: 140,
    height: 35,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 50,
  },
  cardBody: {
    flexDirection: 'row',
    gap: 3,
    paddingVertical: 1,
  },
  left: {
    width: 120,
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
  },
  action: {
    height: 30,
    flexDirection: 'row',
    gap: 15,
    marginLeft: 'auto',
    paddingHorizontal: 10,
  },
  actionButton: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 100,
    width: 35,
    height: 35,
  },
  viewProfileBtn: {
    borderWidth: 1,
    padding: 2,
    borderColor: COLORS.gray,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
