import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Login from './src/screens/Login';
import { MainRoutes } from './Router';

export default class App extends React.Component {
  render() {
    return (

        <MainRoutes />

    );
  }
}

EStyleSheet.build({
  $orangeTheme: '#FDA400',
  $white: '#ffffff',
  $black: '#0a0a0a',
  $lightBlack: '#131313',
  $grey: '#DBDCE0',
  $darkGrey: '#ada8a8',
  $lightGrey: '#e8e8ea',
  $red: '#ff0000',
  $green: '#0ca00c'
});
