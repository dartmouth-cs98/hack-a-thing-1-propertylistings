//All code taken from https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript
//Tutorial followed on React-Native
//Mahnoor Maqsood
//January 2018

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

export default class PropertyView extends Component<{}> {
  render() {
    var property = this.props.property;
    var info = property.bedroom_number + ' bed ' + property.property_type;
    if (property.bathroom_number){
      info += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1 ? 'bathrooms' : 'bathroom');
    }
    var cost = property.price_formatted.split(' ')[0];

    return(
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{cost}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{info}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  seperator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  cost: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});
