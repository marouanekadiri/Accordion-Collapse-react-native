import React from 'react';
import {View} from 'react-native';

const CollapseBody = ({children, ...restProps}) => {
  return <View {...restProps}>{children}</View>;
};

export default CollapseBody;
