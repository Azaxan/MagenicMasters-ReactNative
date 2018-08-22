import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen',
  }
  render() {
    var {params} = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is second Screen</Text>
        <Text>Hello {params.name}!</Text>
      </View>
    );
  }
}
