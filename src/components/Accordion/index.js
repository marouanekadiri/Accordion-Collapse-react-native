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
export default class Accordion extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
          show:false,
        };
    }

    __toggle(){
        this.setState({
           show:!this.state.show
        });
    }

    render() {
        let header = null;
        let body = null;
        React.Children.forEach(this.props.children,(child)=>{
            if(child.type.displayName === 'AccordionHeader'){
                header = (
                    <TouchableOpacity onPress={()=>this.__toggle()}>
                        {child}
                    </TouchableOpacity>
                );
            }else if(child.type.displayName === 'AccordionBody'){
               if(this.state.show){
                   body = child;
               }
            }
        });

            if(header === null){
                console.warn("header wasn't found to be rendered. Please make sure you have wrapped an AccordionHeader in the Accordion Component.");
                return null;
            }else{
                return (
                    <View {...this.props}>
                        {header}
                        {body}
                    </View>
                );
            }

    }
}

