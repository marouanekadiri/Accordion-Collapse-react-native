/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Collapse from "../Collapse";
import CollapseBody from "../CollapseBody";
import CollapseHeader from "../CollapseHeader";

type Props = {
    list: Array,
    header: Function,
    body: Function,
    onToggle: Function
};

export default class AccordionList extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: null,
        }
    }

    componentDidUpdate(prevProps) {
        this.setState({
            selectedIndex: null,
        });
    }


    onToggle(index) {
        let selected = index;
        if (selected === this.state.selectedIndex) {
            selected = null;
        }
        this.setState({ selectedIndex: selected }, () => {
            if (this.props.onToggle) {
                this.props.onToggle(selected);
            }
        });
    }

    _renderItem = ({ item, index }) => (
        <Collapse key={index} isCollapsed={this.state.selectedIndex === index} onToggle={(isCollapsed) => this.onToggle(index)}>
            <CollapseHeader>
                {this.props.header(item)}
            </CollapseHeader>
            <CollapseBody>
                {this.props.body(item)}
            </CollapseBody>
        </Collapse>
    );

    render() {
        const { list } = this.props;

        return (
            <FlatList
                {...this.props}
                data={list}
                renderItem={this._renderItem}
            />
        )
    }
}

AccordionList.defaultProps = {
    list: [],
    header: (item) => undefined,
    body: (item) => undefined,
    onToggle: (item) => undefined
};
