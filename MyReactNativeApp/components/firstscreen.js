import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, AsyncStorage, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LaunchService from "../services/LaunchService";
import { List, ListItem} from "react-native-elements"

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Launch',
  }
  constructor(props){
    super(props);
    this.state = {
      data:[],
      Mode: ''
    }
  }

    componentDidMount(){
      this.populateData();
  }
  async populateData(){

    var launchData = await LaunchService.getLaunchesAsync();
    this.setState({
        data: launchData,
        Mode:  await AsyncStorage.getItem('Mode')
    });
  }

  async populateDataCache() {
    var launchData = await LaunchService.getCachedLaunchesAsync();
    this.setState({
        data: launchData,
        Mode: await AsyncStorage.getItem('Mode')
    });
}

  render() {
    var {navigate} = this.props.navigation;

    return (
      <View>
        <Button title="Load data from Remote service" onPress={async () => {
                    await this.populateData();
                }}></Button>
         <Button title="Load data from Cache" onPress={async () => {
                    await this.populateDataCache();
                }}></Button>
        <Button title="Clear List" onPress={async () => {
             this.setState({
              data: JSON.parse('[]')
          });
        }}></Button>
        <Text>Mode: {this.state.Mode}</Text>
        <List>
            <FlatList
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            
            renderItem={({item}) =>
            (
              <TouchableOpacity
                onPress={
                  () => navigate("Second",{name: item.agency.name})
                }          
            >
              <ListItem
              roundAvatar
              title={item.agency.abbrev}
              subtitle={item.agency.name}
              
            />
            </TouchableOpacity>
            )
            }
            keyExtractor={item => item.agency.id}
          />
        </List>
      </View>
    );
  }
}

