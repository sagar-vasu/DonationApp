import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, SafeAreaView, AppRegistry, Platform, StatusBar } from 'react-native';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    static navigationOptions = {
        header: null,

    };


    render() {
        return (
            <SafeAreaView style={styles.safeView}>

                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../../../assets/img(2).jpeg')}
                        style={styles.logo}
                    >
                    </Image>
                    <View style={{ marginTop: '40%', flex: 1 }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={styles.signup}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logo: {
        width: "100%",
        height: 340,
    },
    text: {
        color: 'white',
        marginTop: '-25%',
        marginLeft: '20%'
    },
    signup: {
        backgroundColor: '#316DC3',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize: 27,
    },

});

AppRegistry.registerComponent('Main', () => Main);
