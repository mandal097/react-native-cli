import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, assets} from '../constants';

const BuddyProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        width: '100%',
      }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.greenShade,
          width: 100,
          height: 100,
          borderRadius: 100,
        }}>
        <Image
          source={assets.person04}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            marginRight: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: SIZES.large,
          fontFamily: FONTS.medium,
          color: COLORS.primary,
          textAlign: 'center',
          marginTop: 10,
        }}>
        Amarnath kumar mandal
      </Text>
      <Text
        style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.light,
          color: COLORS.secondary,
          textAlign: 'center',
        }}>
        Small description of single line here...
      </Text>
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          marginTop: 30,
          padding: 15,
          marginBottom: 20,
        }}>
        <View>
          <View style={[styles.commonView]}>
            <Image
              source={assets.textFieldPhoneIcon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.small,color:COLORS.primary}}>
              Attends 188 calls
            </Text>
          </View>

          <View style={[styles.commonView]}>
            <Image
              source={assets.joined}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.small,color:COLORS.primary}}>
              Joined 2 yrs back
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: SIZES.font, fontFamily: FONTS.semiBold,color:COLORS.primary}}>
              Ratings & Reviews
            </Text>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.greenShade,
              }}>
              View all
            </Text>
          </View>
          <View
            style={{
              height: 200,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginTop: 10,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Charts here</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          style={{marginTop: 20, marginBottom: 20}}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              height: 100,
              width: Dimensions.get('screen').width - 200,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 10,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color:COLORS.primary}}>2-3 high rated Reviews here</Text>
          </View>

          <View
            style={{
              height: 100,
              width: Dimensions.get('screen').width - 200,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 10,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color:COLORS.primary}}>2-3 high rated Reviews here</Text>
          </View>
          <View
            style={{
              height: 100,
              width: Dimensions.get('screen').width - 200,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 10,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>2-3 high rated Reviews here</Text>
          </View>
        </ScrollView>
      </ScrollView>
      {/* calling actions  */}
      <View
        style={{
          height: 100,
          width: Dimensions.get('screen').width,
          backgroundColor:COLORS.white,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.medium,
              color: COLORS.primary,
            }}>
           Take an instant session
          </Text>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}>
            ₹20/min
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={[
              styles.commonView,
              {
                width: Dimensions.get('screen').width / 2 - 15,
                backgroundColor: COLORS.primary,
              },
            ]}>
            <Image
              source={assets.call}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.small,color:COLORS.white}}>
           Make a call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.commonView,
              {width: Dimensions.get('screen').width / 2 - 15,backgroundColor:COLORS.primary},
            ]}>
            <Image
              source={assets.message}
              style={{
                width: 25,
                height: 20,
                resizeMode: 'contain',
              }}
            />
             <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.small,color:COLORS.white}}>
             Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuddyProfileScreen;

const styles = StyleSheet.create({
  commonView: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    flexDirection: 'row',
    padding:8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 20,
    borderRadius: 5,
  },
});
