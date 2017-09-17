import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry } from 'react-native';

import Button                from '../components/button.js';
import MyTextInput           from '../components/textInput.js';
import Location              from '../components/Location.js';
import AddressLocation       from '../components/AddressLocation.js';




class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Enter ID", };
  }

  render() {
    let userId = this.state.text;
    return(
      <View style={ styles.screenStyle }>
        <MyTextInput
          onChangeText={(text) => this.setState({text:text})}
        ></MyTextInput>
        <Text style={ styles.componentPadding }></Text>
        <Button
          id={ userId }
        ></Button>
      </View>
    );
  }
}

const styles = {
  screenStyle: {
    padding: 10,
    flexDirection: 'row',
    width: 1000,
  },

  componentPadding: {
    padding: 5,
  },

  labelStyle: {
    paddingLeft: 10,
    paddingTop: 10,
  },

  outerScreen: {

  }
}

export default Clock;