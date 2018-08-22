import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'First Screen',
  }
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Screen</Text>
        <Button
          onPress={
            () => navigate("Second",{name:"Elther"})
          }
          title = "Go To Second Screen" />
      </View>
    );
  }
}
