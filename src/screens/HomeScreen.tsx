import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS, NFTData} from '../constants';
import BuddyCard from '../components/BuddyCard';
import HomeHeader from '../components/HomeHeader';
import {BuddyCardProps} from '../types';

const ItemSeprator = () => (
  <View
    style={{
      height: 20,
      width: '100%',
      backgroundColor: 'transparent',
    }}
  />
);

type Props = {
  navigation: any;
};

const HomeScreen = (props: Props) => {
  const [nftData, setNftData] = React.useState<BuddyCardProps[]>(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) {
      setNftData(NFTData);
    }
    const filteredData = NFTData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <HomeHeader onSearch={handleSearch} />
      <View style={{flex: 1, paddingBottom: 5}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            renderItem={({item}) => (
              <BuddyCard item={item} navigation={props.navigation} />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeprator}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
          }}>
          <View
            style={{
              height: 300,
              backgroundColor: COLORS.gray,
            }}
          />
          <View style={{flex: 1, backgroundColor:'gray'}} />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
