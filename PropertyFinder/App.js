//All code taken from https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript
//Tutorial followed on React-Native
//Mahnoor Maqsood
//January 2018

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import SearchPage from './SearchPage';


export default class App extends Component<{}>{
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  }
});
