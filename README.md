# accordion-react-native

Accordion is a react javascript component that allow you to collapse a body by clicking on the header.

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
Accordion Components are considered as View , so you can use all the props of the View Component like style.

## Demo 

![](https://user-images.githubusercontent.com/15144618/35873278-282d7052-0b61-11e8-8041-f0046efe5c79.gif)

this is example is based on [native base list separator](https://docs.nativebase.io/Components.html#list-seperator-headref) combined with the accordion.
    
    import {  View,Text } from 'react-native';
    import { Accordion, AccordionHeader, AccordionBody } from "accordion-react-native";
    import { Thumbnail, List, ListItem, Separator } from 'native-base';
    
    <View>
        <Accordion>
          <AccordionHeader>
            <Separator bordered>
              <Text>FORWARD</Text>
            </Separator>
          </AccordionHeader>
          <AccordionBody>
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Claire Barclay</Text>
            </ListItem>
            <ListItem last>
              <Text>Kelso Brittany</Text>
            </ListItem>
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>
            <Separator bordered>
              <Text>FORWARD</Text>
            </Separator>
          </AccordionHeader>
          <AccordionBody>
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Claire Barclay</Text>
            </ListItem>
            <ListItem last>
              <Text>Kelso Brittany</Text>
            </ListItem>
          </AccordionBody>
        </Accordion>
      </View>

