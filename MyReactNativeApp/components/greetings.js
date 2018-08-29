import React from 'react';
import { View, Text } from 'react-native';

export default class Greetings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text   
        style = {
            {
            fontSize: 30,
            color: "blue"
            }
          }>Hello ELTHER!</Text>
      </View>
    );
  }
}
