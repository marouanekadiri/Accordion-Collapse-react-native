/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Accordion, AccordionBody, AccordionHeader} from "../../index";

type Props = {
    List:Array,
    header:Function,
    body:Function,
};
export default class AccordionList extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex:null,
        }
    }

    componentWillReceiveProps(){
            this.setState({
                selectedIndex:null,
            });
    }


    onToggle(index){
        let selected = index;
        if(selected === this.state.selectedIndex){
            selected = null;
        }
        this.setState({selectedIndex:selected});
    }

    _renderItem = ({item,index}) => (
        <Accordion key={index} isCollapsed={this.state.selectedIndex === index} onToggle={(isCollapsed)=>this.onToggle(index)}>
            <AccordionHeader>
                {this.props.header(item)}
            </AccordionHeader>
            <AccordionBody>
                {this.props.body(item)}
            </AccordionBody>
        </Accordion>
    );

    render() {
        return(
            this.props.list.map((item,index)=>this._renderItem({item,index}))
        );
    }
}

AccordionList.defaultProps = {
    List:[],
    header:(item) => undefined,
    body:(item) => undefined,
};