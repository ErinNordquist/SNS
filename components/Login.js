
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, FlatList, WebView} from 'react-native';
//39.290386
//-76.612190
type Props = {};
export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
     }

  render() {
    return (
      <View>
    <TextInput
      placeholder={'Username'}
      style={styles.text}
    />
    <TextInput
      placeholder={'Password'}
      style={styles.text}
    />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      top: 40,
    }
});
