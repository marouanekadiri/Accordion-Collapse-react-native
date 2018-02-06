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


***First example***

![example in a list](https://user-images.githubusercontent.com/15144618/35876403-135c6954-0b6a-11e8-96c2-681cb1091441.gif)

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


***Second example***

![](https://user-images.githubusercontent.com/15144618/35877544-80db2fb2-0b6d-11e8-88c3-ecb9bb24ca28.gif)

      import { View,Text } from 'react-native';
      import {Accordion, AccordionHeader, AccordionBody} from "accordion-react-native";
      import { Thumbnail } from 'native-base';
    
    <View>
        <Accordion style={{borderBottomWidth:1,borderTopWidth:1}}>
          <AccordionHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
            <View style={{width:'25%',alignItems:'center'}}>
              <Thumbnail source={{uri: 'https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg'}} />
            </View>
            <View style={{width:'60%'}}>
              <Text>Name : Mohammed Ali Kley</Text>
              <Text>Profession: Boxer</Text>
            </View>
          </AccordionHeader>
          <AccordionBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
            <Accordion style={{flexDirection:'row'}}>
              <AccordionHeader>
                <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
              </AccordionHeader>
              <AccordionBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                <Text>+1 310 346 0018</Text>
              </AccordionBody>
            </Accordion>
            <Accordion style={{flexDirection:'row'}}>
              <AccordionHeader>
                <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
              </AccordionHeader>
              <AccordionBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                <Text>sample@sample.ma</Text>
              </AccordionBody>
            </Accordion>
          </AccordionBody>
        </Accordion>
      </View>