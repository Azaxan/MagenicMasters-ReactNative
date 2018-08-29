import React from 'react';
import { AppRegistry, Button, View, Text, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Greetings',
  }
  constructor(props){
    super(props);
    this.state = {
      inputName: "",
      isShowGreetings: false
    }
  }
  handleTextInput = (input) => {
    this.setState({inputName: input});
  }
  setVisibility = () => {
    this.setState({isShowGreetings: true});
  }
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style = {
            {
            height: 50,
            width:150,
            fontSize: 20
            }
          }
          placeholder="Type your name here"
          onChangeText={this.handleTextInput}
           />
        <Button
          onPress={
            () => navigate("Second",{name:"Elther"})
          }
          title = "Show Greetings" />

      </View>
    );
  }
}
