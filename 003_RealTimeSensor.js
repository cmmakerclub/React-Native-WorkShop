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
      temp: 0,
      humid: 0
    };
  }

  fetchData() {
      let netpie_auth  = '?auth=EAHSjdbQZMtDlJD:ZdsVsuu7EkBPrlnmJwO08Rjb9';
      let url = 'https://api.netpie.io/topic/HelloNETPIE' + '/gearname/plug001/temp' + netpie_auth;

      fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
          this.setState({ temp: responseJSON[0].payload } );
          this.setState({ lastUpdated: responseJSON[0].lastUpdated });
      })
      .catch((error) => {
          alert (error);
      });
  }
  componentDidMount() {

    setInterval( () => {
        this.fetchData();
    }, 1000);

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.labelSensor}>Temp : { this.state.temp } C</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.labelSensor}>Humid : { this.state.humid } %</Text>
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
    flex: 5,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 5,
    //backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  labelSensor: {
    fontSize: 30,
    fontWeight: '100'
  }
});

AppRegistry.registerComponent('App', () => App);
