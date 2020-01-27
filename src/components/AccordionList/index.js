import React, {useState, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import get from 'lodash.get';
import Collapse from '../Collapse';
import CollapseBody from '../CollapseBody';
import CollapseHeader from '../CollapseHeader';

const AccordionList = ({
  data,
  list = [],
  header = () => undefined,
  body = () => undefined,
  onToggle = () => undefined,
  keyExtractor,
  expandedKey,
  expandedIndex,
  extraData,
  ...restProps
}) => {
  // internal keyExtractor
  const _keyExtractor = useMemo(
    () => keyExtractor || ((item, index) => index),
    [keyExtractor],
  );
  // merged list
  const mergeList = useMemo(() => data || list, [data, list]);
  // expanded key extracted from expandedKey or expandedIndex (priority expandedKey if defined)
  const _expandedKey = useMemo(() => {
    const selectedItem = get(mergeList, expandedIndex);
    return (
      expandedKey ||
      (selectedItem && _keyExtractor(selectedItem, expandedIndex)) ||
      undefined
    );
  }, [mergeList, expandedKey, expandedIndex, _keyExtractor]);

  // key of the expanded element
  const [selected, setSelected] = useState(_expandedKey);

  // expand element if changed
  useEffect(() => {
    setSelected(_expandedKey);
  }, [_expandedKey]);

  return (
    <FlatList
      data={mergeList}
      renderItem={({item, index}) => {
        return (
          <Collapse
            isCollapsed={_keyExtractor(item, index) === selected}
            onToggle={() => {
              onToggle(_keyExtractor(item, index), index);
              setSelected(_keyExtractor(item, index));
            }}>
            <CollapseHeader>{header(item)}</CollapseHeader>
            <CollapseBody>{body(item)}</CollapseBody>
          </Collapse>
        );
      }}
      // Do not provide the internal keyExtractor to keep the default warning of react native FlatList
      keyExtractor={keyExtractor}
      {...restProps}
    />
  );
};

export default AccordionList;
