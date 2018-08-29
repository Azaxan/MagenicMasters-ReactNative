import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    var {params} = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text   
        style = {
            {
            fontSize: 30,
            color: "blue"
            }
          }>Hello {params.name}!</Text>
      </View>
    );
  }
}
