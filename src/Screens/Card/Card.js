import React from 'react'
import { View, Text, } from 'native-base'
import { KeyboardAvoidingView, ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, Image } from 'react-native'
import { cardData } from '../../Store/Action'
import { connect } from 'react-redux'

import { Input, Btn } from '../../Components'


class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            cardNo: '',
            cardCvc: '',
            name: '',
            number: '',
            address: ''
        }
    }
    static navigationOptions = {
        title: 'Credit Card',
        headerStyle: {
            backgroundColor: '#056839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    submitData = (data) => {
        if (!data.cardNo) {
            this.setState({
                warning: 'Please Enter Your CardNo'
            })
        }
        else if (!data.cardCvc) {
            this.setState({
                warning: 'Please Enter Your CardCvc'
            })
        }
        else if (!data.name) {
            this.setState({
                warning: 'Please Enter Your Name'
            })
        }
        else if (!data.number || data.number.length < 11) {
            this.setState({
                warning: 'Please Enter Your Number'
            })
        }
        else if (!data.address) {
            this.setState({
                warning: 'Please Enter Your Address'
            })
        }
        else {
            this.props.cardData(data)
            this.setState({
                warning: '',
                cardNo: '',
                cardCvc: '',
                name: '',
                number: '',
                address: ''
            })
        }

    }
    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <View style={{ flex: 1 }}>

                    <KeyboardAvoidingView
                        style={styles.keyboadView}
                        behavior="padding"
                        keyboardVerticalOffset={120}

                        enabled
                    >
                        <ScrollView style={styles.scrolView}>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.cardNo} type='numeric' label='Enter Card Number'
                                    onChangeText={(text) => this.setState({ cardNo: text })}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.cardCvc} type='numeric' label='Enter CVC'
                                    onChangeText={(text) => this.setState({ cardCvc: text })}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.name} label='Enter Name' onChangeText={(text) => this.setState({ name: text })}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.number} type='numeric' label='Enter Phone Number'
                                    onChangeText={(text) => this.setState({ number: text })}
                                />

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.address} label='Enter Your Address'
                                    onChangeText={(text) => this.setState({ address: text })}
                                />
                            </View>

                            <Text style={{ color: 'green', alignSelf: 'center' }}>
                                {this.props.success}
                            </Text>

                            <Text style={{ color: 'red', alignSelf: 'center' }}>
                                {this.state.warning}
                            </Text>
                            <Text style={{ color: 'red', alignSelf: 'center' }}>
                                {this.props.err}
                            </Text>
                            <View style={styles.btn}>
                                <Btn title='Donate Now' onPress={() => this.submitData(this.state)} />
                            </View>
                        </ScrollView>


                    </KeyboardAvoidingView>
                </View>

            </SafeAreaView>

        )
    }
}



const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    keyboadView: {
        flex: 1
    },
    scrolView: {
        flex: 1
    },
    btn: {
        marginTop: 30,
        padding: 10,
        borderRadius: 100
    }

});



const mapStateToProps = state => {
    return {
        success: state.success,
        err: state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cardData: (obj) => dispatch(cardData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card)



