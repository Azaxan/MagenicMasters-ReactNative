/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FirstScreen from './components/firstscreen';
import SecondScreen from './components/secondscreen';
import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator({
  First: {screen: FirstScreen},
  Second: {screen: SecondScreen}
})

export default Navigation;
