/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

type Props = {
};
export default class CollapseBody extends Component<Props> {

    render(){
        return (
            <View {...this.props}>
                {this.props.children}
            </View>
        );
    }
}