/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, FlatList, WebView} from 'react-native';
import MapView from 'react-native-maps';
import Map from './components/Map.js';
//39.290386
//-76.612190
type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
     }

  render() {
    return (

    <Map hide={false}/>
    );
  }
}
