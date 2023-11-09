// import {Text, View} from 'react-native';
// import React, {PropsWithChildren} from 'react';
// import {IconsProps} from '../types';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

// type Props = PropsWithChildren<{
//   name: string;
//   color: string;
//   size: number;
// }>;

// const Icons = ({name, size = 24, color}: Props) => {
//   return <>{name && <Icon name={name} size={size} color={color} />}</>;
// };

// export default Icons;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Icons = () => {
  return (
    <View>
      <Text>Icons</Text>
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({});
