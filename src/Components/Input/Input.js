import React from 'react'
import { Input } from 'react-native-elements';


class TextInput extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        console.log(this.props, 'jdsidhsh')
    }
    render() {
        return (
            <Input value={this.props.value} style={this.props.style} keyboardType={this.props.type} placeholder={this.props.label} onChangeText={this.props.onChangeText} ref={this.props.ref} />

        )
    }
}


export default TextInput