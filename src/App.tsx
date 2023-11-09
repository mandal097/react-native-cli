import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigations/Auth';
import Main from './navigations/Main';
import TabGroup from './navigations/Tabs';

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <>
      {isLogin ? (
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
