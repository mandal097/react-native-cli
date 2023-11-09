import {StatusBar} from 'react-native';
import React from 'react';

type Props = {
  backgroundcolor: string;
};

const FocusedStatusBar = ({backgroundcolor}: Props) => {
  return <StatusBar backgroundColor={backgroundcolor} />;
};

export default FocusedStatusBar;
