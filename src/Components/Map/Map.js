import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Spinner } from 'native-base';

import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            location: false,
            markers: []
        }
    }

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            location: true
        })
    }

    setMargin = () => {
        this.setState({ mapMargin: 0 })
    }

    //press event to add marker
    _handleLongPress = (e) => {
        console.log(e.nativeEvent.coordinate.longitude, 'lonb')
        console.log(e.nativeEvent.coordinate.latitude, 'lat')
        this.setState({
            markers: [
                ...this.state.markers,
                {

                    coordinates: {
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitude: e.nativeEvent.coordinate.latitude
                    },

                }


            ],

        })

        this.props.getLocation(e.nativeEvent.coordinate)
    }


    render() {
        let { latitude, longitude } = this.state
        return (

            <View style={styles.container}>
                {
                    this.state.location ?

                            <MapView
                                showsMyLocationButton={true}
                                showsCompass={true}
                                zoomControlEnabled
                                showsUserLocation={true}
                                onMapReady={this.setMargin}
                                style={{ ...styles.mapStyle, marginBottom: this.state.mapMargin }}
                                initialRegion={{
                                    latitude,
                                    longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                //   add marker when user presses and hold map
                                onLongPress={e => this._handleLongPress(e)}

                            >
                                {this.state.markers.map((mark, i) =>
                                    (
                                        <MapView.Marker
                                            key={i}
                                            ref={this.setMarkerRef}
                                            draggable
                                            coordinate={mark.coordinates}

                                        >

                                        </MapView.Marker>
                                    ))}
                            </MapView>

                        :
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
                             <Spinner color='green' />
                        </View>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    mapStyle: {
        ...StyleSheet.absoluteFillObject,
    },


});


