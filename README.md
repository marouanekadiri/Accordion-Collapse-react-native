# accordion-react-native

Accordion is a pure javascript component that allow you to collapse a body by clicking on the header.

## Installation

    npm install --save accordion-react-native



## Usage

    import {Accordion,AccordionHeader, AccordionBody} from 'accordion-react-native';

    <Accordion>
	    <AccordionHeader>
	      <View>
	        <Text>Click here</Text>
	      </View>
	    </AccordionHeader>
	    <AccordionBody>
	      <Text>Ta daa!</Text>
	    </AccordionBody>
	</Accordion>
Accordion Components are considered as View , so you can use the props of the View to style the component as you want.

## Demo

