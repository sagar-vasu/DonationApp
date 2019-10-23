import React from 'react'
import { Button,Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class Btn extends React.Component {
    render() {
        return (
            <Button  style={{alignSelf:'center'}} rounded success onPress={this.props.onPress}>
                <Text style={{color:'white',}} >{this.props.title}</Text>
            </Button>

        )
    }
}

export default Btn