import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var ReactNativeFlexDirection = React.createClass( {
  onViewClick: function() {
    alert("test");
  },

  render: function () {
    return (
      <View style={styles.container}>
          <View style={styles.content}>
              <Text style={{backgroundColor: '#00ffff',width: 200 ,height:100 }}>A</Text>
              <Text style={{backgroundColor: '#66ff99',width: 100 ,height:100 }}>B</Text>
              <Text style={{backgroundColor: '#ff0066',width: 100 ,height:100 }}>C</Text>
          </View>
      		<TouchableHighlight onPress={  this.onViewClick }>
            <View style={styles.content1}>
                <Text style={{backgroundColor: '#00ffff',width: 100 ,height:100 }}>A</Text>
                <Text style={{backgroundColor: '#66ff99',width: 100 ,height:100 }}>B</Text>
                <Text style={{backgroundColor: '#ff0066',width: 100 ,height:100 }}>C</Text>
            </View>
					</TouchableHighlight>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ccff',
  },
  content: {
    backgroundColor: 'lightsalmon',
    margin: 30,
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },

  content1: {
    backgroundColor: 'lightblue',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

AppRegistry.registerComponent('ReactNativeFlexDirection', function () {
  return ReactNativeFlexDirection
});
