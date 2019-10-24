import React from 'react'
import { View, Text, Toast } from 'native-base'
import { KeyboardAvoidingView, ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, } from 'react-native'
import { Input, Btn } from '../../Components'
import { connect } from 'react-redux'
import { cashData } from '../../Store/Action'

class CashPayment extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            number: '',
            payment: '',
            address: ''
        }

    }
    static navigationOptions = {
        title: 'Cash Donation',
        headerStyle: {
            backgroundColor: '#056839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    submitData = (data) => {
        if (!data.payment) {
            this.setState({
                warning: 'Please Enter Payment'
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
            this.props.cashData(data)
            this.setState({
                warning: '',
                name:'',
                number:'',
                payment:'',
                address:''
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
                                <Input value={this.state.payment}  type='numeric' label='Enter Payment'
                                    onChangeText={(text) => this.setState({ payment: text })}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input  value={this.state.name} label='Enter Name' onChangeText={(text) => this.setState({ name: text })}
                                />
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Input  value={this.state.number} type='numeric' onChangeText={(text) => this.setState({ number: text })} label='Enter Phone Number'
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input  value={this.state.address} onChangeText={(text) => this.setState({ address: text })} label='Enter Address'
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
                                <Btn style={{backgroundColor:'#056839'}}  title='Donate Now' onPress={() => this.submitData(this.state)} />
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
        marginTop: 10,
        padding: 10,
        borderRadius: 100
    }

});


const mapStateToProps = state => {
    return {
        success: state.success,
        err:state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cashData: (obj) => dispatch(cashData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CashPayment)