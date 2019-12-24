import React, {useState} from 'react';
import {FlatList} from 'react-native';
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
  extraData,
  ...restProps
}) => {
  const [selected, setSelected] = useState();
  return (
    <FlatList
      data={data || list}
      renderItem={({item, index}) => {
        return (
          <Collapse
            isCollapsed={
              keyExtractor
                ? keyExtractor(item, index) === selected
                : index === selected
            }
            onToggle={() => {
              onToggle(keyExtractor ? keyExtractor(item, index) : index);
              setSelected(keyExtractor ? keyExtractor(item, index) : index);
            }}>
            <CollapseHeader>{header(item)}</CollapseHeader>
            <CollapseBody>{body(item)}</CollapseBody>
          </Collapse>
        );
      }}
      keyExtractor={keyExtractor}
      {...restProps}
    />
  );
};

export default AccordionList;
