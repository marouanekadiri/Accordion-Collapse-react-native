/**
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CollapseHeader from '../CollapseHeader';
import CollapseBody from '../CollapseBody';

const Collapse = ({
  isCollapsed = false,
  disabled = false,
  onToggle = () => undefined,
  handleLongPress = () => undefined,
  children,
  ...restProps
}) => {
  const [show, setShow] = useState(isCollapsed);
  useEffect(() => {
    setShow(isCollapsed);
  }, [isCollapsed]);
  let header = null;
  let body = null;
  React.Children.forEach(children, child => {
    if (child.type === CollapseHeader) {
      header = child;
    } else if (child.type === CollapseBody) {
      body = child;
    }
  });
  if (header === null) {
    console.warn(
      "header wasn't found to be rendered. Please make sure you have wrapped an CollapseHeader in the Collapse Component.",
    );
    return null;
  } else {
    return (
      <View {...restProps}>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            onToggle(!show);
            setShow(!show);
          }}
          onLongPress={handleLongPress}>
          {header}
        </TouchableOpacity>
        {show && body}
      </View>
    );
  }
};

export default Collapse;
