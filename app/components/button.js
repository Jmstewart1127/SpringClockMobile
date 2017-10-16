import React, { Component } from 'react';
import { Text, TouchableOpacity, AsyncStorage } from 'react-native';


class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
    };
  }


  _clockIn(id) {
   fetch('https://spring-clock.herokuapp.com/rest/clockin/' + id)
     .then((responseJson) => {
       return responseJson;
     })
     .catch((error) => {
       console.error(error);
     });
  }

  async _onPressButton(id) {
    var userId = {};
    try {
      await AsyncStorage.setItem('userId', id);
    } catch (error) {
      // Error saving data
    }
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null){
        // We have data!!
        console.log("async test: " + value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    const { id } = this.props;
      return (
        <TouchableOpacity style={ styles.buttonStyle }
           onPress={() => this._onPressButton(this.props.id)}>
          <Text style={styles.textStyle}>
            Start/End Shift
          </Text>
        </TouchableOpacity>
      );
    }

}
  const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 10
    },
    buttonStyle: {
      borderWidth: 1,
      borderColor: 'blue',
      borderStyle: 'solid',
      borderRadius: 10,
      backgroundColor: 'transparent',
    }
  }


export default Button;
