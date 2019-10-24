import React from 'react'
import { View, StyleSheet, Platform, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Title, Content, Body, Text } from 'native-base';
import { Slider } from '../../Components'
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

export default class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            name: true
        }
    }

    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-square" size={40} color={tintColor} />
        ),
    }

    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <Container>
                    <Header style={{ backgroundColor: 'white' }} >
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/splash.png')}
                                style={{ width: 100, height: 50 }}
                            >
                            </Image>
                        </Body>
                    </Header>
                    <Content>
                        <View style={{ marginTop: 5 }}>
                            <Slider />
                            <View style={{ backgroundColor: '#ED1B24', padding: 15, marginTop: 30 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                                    Donation Methods
                                </Text>
                            </View>

                            <View style={styles.container}>
                                <TouchableOpacity style={{ ...styles.item, backgroundColor: '#8dc04f', borderColor: '#8dc04f' }} onPress={() => { this.props.navigation.navigate('Cash') }}>
                                    <Ionicons name="md-cash" size={40} color="white" />
                                    <Text style={{ color: 'white', fontSize: 20, marginTop: 15 }}> Cash Payment</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ ...styles.item, backgroundColor: '#48cfae', borderColor: '#48cfae' }} onPress={() => { this.props.navigation.navigate('Card') }}>
                                    <Ionicons name="md-card" size={40} color="white" />
                                    <Text style={{ color: 'white', fontSize: 20, marginTop: 15 }}> Card Payment</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ ...styles.item, backgroundColor: '#F17600', borderColor: '#F17600' }} onPress={() => { this.props.navigation.navigate('Food') }}>
                                    <Ionicons name="md-pizza" size={40} color="white" />
                                    <Text style={{ color: 'white', fontSize: 20 }}> Donate Food</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ ...styles.item, backgroundColor: '#e9573e', borderColor: '#e9573e' }} onPress={() => { this.props.navigation.navigate('Goods') }}>
                                    <Ionicons name="md-gift" size={40} color="white" />
                                    <Text style={{ color: 'white', fontSize: 20, marginTop: 15 }}> Donate Goods</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ borderColor: '#B06E40', width: '47%', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20, height: 140, marginRight: 'auto', marginLeft: 'auto', borderWidth: 1, backgroundColor: '#B06E40' }} onPress={() => { this.props.navigation.navigate('Land') }}>
                                    <Ionicons name="md-planet" size={40} color="white" />
                                    <Text style={{ color: 'white', fontSize: 20, marginTop: 15 }}>
                                        Donate Land
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            </View>
                        </View>

                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        width: '47%',
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        height: 140,
        shadowOpacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'

    }

});

