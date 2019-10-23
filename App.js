import React from 'react';
import { AppLoading } from 'expo';
import Navigation from './src/Config/Navigation/Navigation';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { YellowBox } from 'react-native'
import _ from 'lodash';

import Store from './src/Store'

import { Provider } from 'react-redux'


YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>

    );
  }
}

