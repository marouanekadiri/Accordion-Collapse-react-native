import React, {useState, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import get from 'lodash.get';
import Collapse from '../Collapse';
import CollapseBody from '../CollapseBody';
import CollapseHeader from '../CollapseHeader';

const isNil = element => element == null;

const AccordionList = React.forwardRef(
  (
    {
      data,
      list = [],
      header = () => undefined,
      body = () => undefined,
      onToggle = () => undefined,
      isDisabled = () => undefined,
      keyExtractor,
      expandedKey,
      expandedIndex,
      extraData,
      ...restProps
    },
    ref,
  ) => {
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
      const expandedKeyViaIndex = selectedItem
        ? _keyExtractor(selectedItem, expandedIndex)
        : undefined;

      return isNil(expandedKey)
        ? isNil(expandedKeyViaIndex)
          ? undefined
          : expandedKeyViaIndex
        : expandedKey;
    }, [mergeList, expandedKey, expandedIndex, _keyExtractor]);

    // key of the expanded element
    const [selected, setSelected] = useState(_expandedKey);

    // expand element if changed
    useEffect(() => {
      setSelected(_expandedKey);
    }, [_expandedKey]);

    return (
      <FlatList
        ref={ref}
        data={mergeList}
        renderItem={({item, index}) => {
          const isElementExpanded = _keyExtractor(item, index) === selected;
          return (
            <Collapse
              isCollapsed={isElementExpanded}
              onToggle={isExpanded => {
                const newlySelected = _keyExtractor(item, index);
                onToggle(newlySelected, index, isExpanded);
                setSelected(
                  isExpanded && !isNil(newlySelected)
                    ? newlySelected
                    : undefined,
                );
              }}
              disabled={isDisabled(item, index)}>
              <CollapseHeader>
                {header(item, index, isElementExpanded)}
              </CollapseHeader>
              <CollapseBody>
                {body(item, index, isElementExpanded)}
              </CollapseBody>
            </Collapse>
          );
        }}
        // Do not provide the internal keyExtractor to keep the default warning of react native FlatList
        keyExtractor={keyExtractor}
        {...restProps}
      />
    );
  },
);

export default AccordionList;
