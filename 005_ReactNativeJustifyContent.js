import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var ReactNativeJustify = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={{backgroundColor: '#00ffff',width: 50 ,height:50 }}>A</Text>
                    <Text style={{backgroundColor: '#66ff99',width: 50 ,height:50 }}>B</Text>
                    <Text style={{backgroundColor: '#ff0066',width: 50 ,height:50 }}>C</Text>
                </View>
                <View style={styles.content2} >
                    <Text style={{backgroundColor: '#00ffff',width: 50 ,height:50 }}>A</Text>
                    <Text style={{backgroundColor: '#66ff99',width: 50 ,height:50 }}>B</Text>
                    <Text style={{backgroundColor: '#ff0066',width: 50 ,height:50 }}>C</Text>
                </View>
                <View style={styles.content3} >
                    <Text style={{backgroundColor: '#00ffff',width: 50 ,height:50 }}>A</Text>
                    <Text style={{backgroundColor: '#66ff99',width: 50 ,height:50 }}>B</Text>
                    <Text style={{backgroundColor: '#ff0066',width: 50 ,height:50 }}>C</Text>
                </View>
            </View>

        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black'
    },
    content: {
        flex: 3,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#ffe6e6',
        // justifyContent: 'flex-end',
        alignItems: 'center'
    },
    content2: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#ccddff',
        justifyContent: 'center'
    },
    content3: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#ffb3ec',
        justifyContent: 'flex-end'
    }
});

AppRegistry.registerComponent('ReactNativeJustify', () => ReactNativeJustify);
