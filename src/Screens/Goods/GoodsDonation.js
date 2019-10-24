import React from 'react'
import { View, Text, } from 'native-base'
import { KeyboardAvoidingView, ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput } from 'react-native'
import { goodsData } from '../../Store/Action'
import { connect } from 'react-redux'
import { Input, Btn } from '../../Components'


class GoodDonation extends React.Component {
    constructor() {
        super()
        this.state = {
            warning: '',
            name: '',
            number: '',
            address: '',
            products: ''
        }
    }
    static navigationOptions = {
        title: 'Goods Donation',
        headerStyle: {
            backgroundColor: '#056839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
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
        else if (!data.products) {
            this.setState({
                warning: 'Please type Products'
            })
        }
        else {
            this.props.goodsData(data)
            this.setState({
                warning: '',
                name: '',
                number: '',
                address: '',
                products: ''
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
                                <Input label='Enter Name' value={this.state.name} onChangeText={(text) => this.setState({ name: text })}
                                />

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input type='numeric' value={this.state.number} onChangeText={(text) => this.setState({ number: text })} label='Enter Phone Number'
                                />

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Input value={this.state.address} onChangeText={(text) => this.setState({ address: text })} label='Enter Your Address'
                                />


                            </View>
                            <View style={{ marginTop: 10 }}>
                                <TextInput
                                    placeholder='What you want to donate type here'
                                    style={{ borderBottomWidth: 1, width: "95%", marginLeft: 'auto', marginRight: 'auto' }}
                                    editable
                                    onChangeText={(text) => this.setState({ products: text })}
                                    value={this.state.products}
                                    numberOfLines={4}
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
        goodsData: (obj) => dispatch(goodsData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GoodDonation)






