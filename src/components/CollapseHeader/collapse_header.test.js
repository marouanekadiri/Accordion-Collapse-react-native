import 'react-native';
import React from 'react';

import CollapseHeader from './index';
import renderer from 'react-test-renderer';
import {Text, View} from 'react-native';

describe('Collapse Header', () => {
  it('Should render CollapseHeader', () => {
    renderer.create(<CollapseHeader>Test</CollapseHeader>);
  });
  it('Should match snapshot', () => {
    const renderedComponent = renderer.create(
      <CollapseHeader>Test</CollapseHeader>,
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
  it('Should render children correctly', () => {
    const renderedComponent = renderer.create(
      <CollapseHeader>
        <Text>test</Text>
      </CollapseHeader>,
    );
    expect(renderedComponent.root.props.children.type).toBe(Text);
    expect(renderedComponent.root.props.children.props.children).toBe('test');
  });
  it('Should have same type when wrapped inside a view', () => {
    const renderedComponent = renderer.create(
      <View>
        <CollapseHeader>Test</CollapseHeader>
      </View>,
    );
    expect(renderedComponent.root.props.children.type).toBe(CollapseHeader);
  });
});
