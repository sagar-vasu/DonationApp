import React from 'react'
import { View, Text, } from 'native-base'
import { KeyboardAvoidingView, ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, Image } from 'react-native'
import { SimpleStepper } from 'react-native-simple-stepper';
import { foodData } from '../../Store/Action'
import { connect } from 'react-redux'
import { Input, Btn } from '../../Components'


class FoodDonation extends React.Component {
    constructor() {
        super()
        this.state = {
            days: 0
        }
    }
    static navigationOptions = {
        title: 'Food Donation',
        headerStyle: {
            backgroundColor: '#056839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    valueChanged(value) {
        const nextValue = Number(value.toFixed(2));
        this.setState({ days: nextValue });
        // ...
    }


    submitData = (data) => {
        if (!data.days) {
            this.setState({
                warning: 'Please Select Days'
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
            data.days = (data.days * 100)
            this.props.foodData(data)
            this.setState({
                name: '',
                number: '',
                days: '',
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
                                <Text style={{ alignSelf: 'center' }}>Please Select Days</Text>
                            </View>
                            <View style={{ width: 140, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>

                                <SimpleStepper containerStyle={{ backgroundColor: 'transparent', flexDirection: 'row', borderWidth: 2, borderRadius: 8, overflow: 'hidden', alignItems: 'center', borderColor: 'grey' }} showText={true} maximumValue={365} valueChanged={value => this.valueChanged(value)} />

                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.name} label='Enter Name' onChangeText={(text) => this.setState({ name: text })}
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.number} onChangeText={(text) => this.setState({ number: text })} type='numeric' label='Enter Phone Number'
                                />

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.address} onChangeText={(text) => this.setState({ address: text })} label='Enter Your Address'
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
        foodData: (obj) => dispatch(foodData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FoodDonation)


