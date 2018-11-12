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
//39.290386
//-76.612190
type Props = {};
export default class Map extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            lat: '33.653390',
            long: '-84.449500',
            userLong: '',
            userLat: '',
        };
     }

    printProperties(object){
         for(var propName in object) {
             propValue = object[propName]
             console.log("PROPERTY = "+ propName,propValue);
         }
    }

    updateLongitude = (typedText) => {
         console.log("Longitude" + typedText.toString());
         this.printProperties(typedText)
         this.setState({long: parseFloat(typedText)});
     }

     updateLatitude = (typedText) => {
        console.log("Latitude " + typedText.toString());
        this.printProperties(typedText)
        this.setState({lat: parseFloat(typedText)});
        //console.log("Latitude = " + this.state.lat + " Longitude = " + this.state.long);
     }

   //Runs before component is rendered
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  login = (user, pass) => {
    return fetch('localhost:8000/login',{
        method: 'POST',
        body: JSON.stringify({
          username: user,
          password: pass,
          })
    });
  }

  // displayMessage => (longitude, latitude) => {
  //   return "";
  // }

     updateRegion = (region) => {
        if(region.longitude == null){
            region.longitude = this.state.long;
            console.log("REGION LONGITUDE " + region.longitude);
        }
        if(region.latitude == null){
            region.latitude = this.state.lat;
            console.log("REGION LATITUDE " + region.latitude);
        }
        this.setState({lat: parseFloat(region.latitude), long: parseFloat(region.longitude)});
        //console.log("Latitude = " + this.state.lat + " Longitude = " + this.state.long);
     }

  render() {
    if(this.props.hide){
      return (<Text> Componenet Hidden </Text>);
    }
    return (
      <View style={styles.container}>
       <MapView style={styles.map}
            region = {{
              latitude: parseFloat(this.state.lat),
              longitude: parseFloat(this.state.long),
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            onRegionChange = {(region) => this.updateRegion(region)}

            >
        </MapView>
        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                            keyExtractor={({id}, index) => id}
                          />
        <TextInput
          style={styles.longitude}
          onChangeText = {(typedText) => this.updateLongitude(typedText)}
          placeholder={this.state.long.toString()}
          //value={this.state.long.toString()}
        />
        <TextInput
          style={styles.latitude}
          onChangeText = {(typedText) => this.updateLatitude(typedText)}
          //onSubmitEditing = {(typedText) => this.setState(this.value: typedText)}
          placeholder={this.state.lat.toString()}
          //value={this.state.lat.toString()}

        />
    </View>
    );
  }

  longitudeHandler = (typedText) => {
      this.setState({long: parseFloat(typedText) })
   }

   latitudeHandler = (typedText) => {
        this.setState({lat: parseFloat(typedText)})
   }
}

const styles = StyleSheet.create({
  container: {
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   justifyContent: 'flex-end',
   alignItems: 'center'
  },
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  longitude:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    left: '50%',
    position: 'absolute'
  },
  latitude:{
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      right: '50%',
      position: 'absolute'
    }
});
