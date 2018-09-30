import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'User List',
  }
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    this.populateData();
  }
  populateData(){
    this.setState({
      users:[
        {
          "name": "Elther Barrientos",
          "email": "eltherb@magenic.com"
        },
        {
            "name": "Ronyan Flores",
            "email": "ronyanf@magenic.com"
        },
        {
            "name": "Siena Mamaril",
            "email": "sienam@magenic.com"
        },
        {
            "name": "Rhoderick Bocobo",
            "email": "rhoderickb@magenic.com"
        },
        {
          "name": "Elther Barrientos II",
          "email": "eltherb@magenicII.com"
        },
        {
            "name": "Ronyan Flores II",
            "email": "ronyanf@magenicII.com"
        },
        {
            "name": "Siena Mamaril II",
            "email": "sienam@magenicII.com"
        },
        {
            "name": "Rhoderick Bocobo II",
            "email": "rhoderickb@magenicII.com"
        }
      ]
    });
  }
  render() {
    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container} >
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
          <TouchableOpacity
              onPress={
                () => navigate("Second",{name: item.name})
              }          
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </TouchableOpacity>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});
