import React from 'react';
import {View} from 'react-native';

const CollapseHeader = ({children, ...restProps}) => {
  return <View {...restProps}>{children}</View>;
};

export default CollapseHeader;
