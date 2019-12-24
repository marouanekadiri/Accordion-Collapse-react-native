import 'react-native';
import React from 'react';

import CollapseBody from './index';
import renderer from 'react-test-renderer';
import {Text, View} from 'react-native';

describe('Collapse Body', () => {
  it('Should render CollapseBody', () => {
    renderer.create(<CollapseBody>Test</CollapseBody>);
  });
  it('Should match snapshot', () => {
    const renderedComponent = renderer.create(
      <CollapseBody>Test</CollapseBody>,
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
  it('Should render children correctly', () => {
    const renderedComponent = renderer.create(
      <CollapseBody>
        <Text>test</Text>
      </CollapseBody>,
    );
    expect(renderedComponent.root.props.children.type).toBe(Text);
    expect(renderedComponent.root.props.children.props.children).toBe('test');
  });
  it('Should have same type when wrapped inside a view', () => {
    const renderedComponent = renderer.create(
      <View>
        <CollapseBody>Test</CollapseBody>
      </View>,
    );
    expect(renderedComponent.root.props.children.type).toBe(CollapseBody);
  });
});
