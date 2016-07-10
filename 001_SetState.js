import React, { Component, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor() {
    super();
    this.state = {
      temp: 0
    };
  }

  detectClick() {
    this.setState({temp: (Math.random()*100).toFixed(2)});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.labelTemp}>{ this.state.temp } C</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.detectClick.bind(this)}>
            <Text style={styles.labelClickMe}>click me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 8,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelTemp: {
    fontSize: 50,
    fontWeight: '100'
  },
  labelClickMe: {
    fontSize: 30,
    fontWeight: '100'
  }
});

AppRegistry.registerComponent('App', () => App);
