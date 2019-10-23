
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, View } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://firebasestorage.googleapis.com/v0/b/react-hackathon-55981.appspot.com/o/img(3).jpeg?alt=media&token=d2b8e868-e3ef-4945-a779-7c43ac321f12',
        'https://firebasestorage.googleapis.com/v0/b/react-hackathon-55981.appspot.com/o/img(1).jpeg?alt=media&token=2c9d046f-202d-4495-a4ce-266307fd8a51',
        'https://firebasestorage.googleapis.com/v0/b/react-hackathon-55981.appspot.com/o/img(4).jpeg?alt=media&token=2080dd37-a191-4106-882f-2a285ffb7c20',
        'https://firebasestorage.googleapis.com/v0/b/react-hackathon-55981.appspot.com/o/img(2).jpeg?alt=media&token=1e91a269-9344-41f6-b8e8-dadc38924cae',
      ]
    };
  }

  render() {
    <SliderBox images={this.state.images} />
    return (
      <SliderBox
        images={this.state.images}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        circleLoop
      />

    )
  }
}