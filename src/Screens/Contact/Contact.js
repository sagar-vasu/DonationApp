import React from 'react'
import { View, StyleSheet, Platform, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { Container, Header, Title, Content, Right, Body, Text, } from 'native-base';
import { Input, Btn } from '../../Components'
import { contactData } from '../../Store/Action'
import { connect } from 'react-redux'

class Contact extends React.Component {

    constructor() {
        super()
        this.state = {
            name: true
        }
    }

    static navigationOptions = {
        drawerLabel: 'Contact',
    }

    submitData = (data) => {
        if (!data.name) {
            this.setState({
                warning: 'Please Enter Your Name'
            })
        }
        else if (!data.email) {
            this.setState({
                warning: 'Please Enter Your Email'
            })
        }
        else if (!data.address) {
            this.setState({
                warning: 'Please Enter Your Address'
            })
        }
        else {
            this.props.contactData(data)
            console.log(data, 'contact page')
            this.setState({
                name: '',
                address: '',
                message: '',
                email: '',
                warning: ''
            })
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <Container>
                    <Header style={{ backgroundColor: '#056839' }}>
                        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ alignSelf: 'center' }}>Contact Us</Title>
                        </Body>
                    </Header>
                    <Content>
                        <View >
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
                                            <Input value={this.state.email} onChangeText={(text) => this.setState({ email: text })} label='Enter Email'
                                            />
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Input value={this.state.address} onChangeText={(text) => this.setState({ address: text })} label='Enter Address'
                                            />
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <TextInput
                                                placeholder='Enter Message'
                                                style={{ borderWidth: 1, borderColor: 'grey', width: "94%", marginLeft: 'auto', marginRight: 'auto' }}
                                                editable
                                                onChangeText={(text) => this.setState({ message: text })}
                                                value={this.state.message}
                                                numberOfLines={6}
                                            />
                                        </View>
                                        <Text style={{ color: 'green', alignSelf: 'center' }}>
                                            {this.props.success}
                                        </Text>

                                        <Text style={{ color: 'red', alignSelf: 'center' }}>
                                            {this.state.warning}
                                        </Text>
                                        <Text style={{ color: 'red', alignSelf: 'center' }}>
                                            {this.state.err}
                                        </Text>
                                        <View style={{ marginBottom: 30 }}>
                                            <Btn style={{ backgroundColor: '#056839' }} title='Send Now' onPress={() => this.submitData(this.state)} />
                                        </View>

                                    </ScrollView>

                                </KeyboardAvoidingView>
                            </View>


                            <View style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ alignSelf: 'auto' }}>Phone Number</Text>
                                <Text style={{ alignSelf: 'auto' }}>111-729-526</Text>
                            </View>


                            <View style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ alignSelf: 'auto' }}>Email Us</Text>
                                <Text>info@saylaniwelfare.com</Text>
                            </View>

                            <View style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ alignSelf: 'auto' }}>Address</Text>
                                <Text>A-25, Bahadurabad Chowrangi</Text>
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
});



const mapStateToProps = state => {
    return {
        success: state.success,
        err: state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        contactData: (obj) => dispatch(contactData(obj))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contact)





