import React from 'react'
import { View, Text } from 'native-base'
import { KeyboardAvoidingView, ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, } from 'react-native'
import { Input, Btn, Map } from '../../Components'
import { connect } from 'react-redux'
import { landData } from '../../Store/Action'


class LandDonation extends React.Component {
    constructor() {
        super()
        this.state = {
            warning: ''
        }
    }
    static navigationOptions = {
        title: 'Land Donation',
        headerStyle: {
            backgroundColor: '#056839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    getLocation = (path) => {
        console.log(path)
        this.setState({
            location: path
        })
    }


    submitData = (data) => {
        if (!data.name) {
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
        else if (!data.location) {
            this.setState({
                warning: 'Please select Location'
            })
        }
        else {
            this.props.landData(data)
            this.setState({
                warning: '',
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
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ marginBottom: 10, alignSelf: 'center' }}>Long Press and select area </Text>

                            </View>

                            <View style={{ width: 400, height: 210, marginTop: 10 }}>
                                <Map getLocation={this.getLocation} />
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
                            <Btn title='Donate Now' onPress={() => this.submitData(this.state)} />
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
        landData: (obj) => dispatch(landData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LandDonation)




