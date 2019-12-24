import 'react-native';
import React from 'react';

import Collapse from './index';
import {act, create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import CollapseHeader from '../CollapseHeader';
import CollapseBody from '../CollapseBody';

describe('Collapse', () => {
  it('Should render Collapse', () => {
    create(
      <Collapse>
        <CollapseHeader>click here</CollapseHeader>
        <CollapseBody>Ta da!</CollapseBody>
      </Collapse>,
    );
  });
  it('Should match snapshot', () => {
    const renderedComponent = create(
      <Collapse>
        <CollapseHeader>click here</CollapseHeader>
        <CollapseBody>Ta da!</CollapseBody>
      </Collapse>,
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
  it('Should match snapshot while collapsed', () => {
    const renderedComponent = create(
      <Collapse isCollapsed={true}>
        <CollapseHeader>click here</CollapseHeader>
        <CollapseBody>Ta da!</CollapseBody>
      </Collapse>,
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
  it('Should display body when clicked', () => {
    let renderedComponent;
    act(() => {
      renderedComponent = create(
        <Collapse>
          <CollapseHeader>click here</CollapseHeader>
          <CollapseBody>Ta da!</CollapseBody>
        </Collapse>,
      );
    });
    expect(
      renderedComponent.root.find(node => node.props.children === 'click here'),
    ).toBeDefined();
    const touchable = renderedComponent.root.findByType(TouchableOpacity);
    expect(
      renderedComponent.root.find(node => node.props.children === 'click here'),
    ).toBeDefined();
    expect(() =>
      renderedComponent.root.find(node => node.props.children === 'Ta da!'),
    ).toThrow();
    act(touchable.props.onPress);
    expect(
      renderedComponent.root.find(node => node.props.children === 'Ta da!'),
    ).toBeDefined();
    expect(
      renderedComponent.root.find(node => node.props.children === 'click here'),
    ).toBeDefined();
  });
});
