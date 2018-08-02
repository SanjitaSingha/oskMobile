import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import Login from './src/screens/Login';
import { MainRoutes } from './Router';
import reducers from './src/reducers';

const store = createStore(reducers, {}, compose(
  applyMiddleware(ReduxThunk, logger)
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoutes />
      </Provider>
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
