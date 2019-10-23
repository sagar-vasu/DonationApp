import React from 'react'
import { View, StyleSheet, Platform, SafeAreaView, StatusBar, Image, WebView } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItem, Card } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class Mission extends React.Component {

    constructor() {
        super()
        this.state = {
            name: true
        }
    }

    static navigationOptions = {
        drawerLabel: 'Mission',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-square" size={20} color={tintColor} />
        ),
    }
    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <Container>
                    <Header style={{backgroundColor: '#056839'}}>
                    <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Title style={{ alignSelf: 'center' }}>Mission</Title>
                        </Body>
                    </Header>
                    <Content>
                        <View >
                            <Card transparent>
                                <CardItem>
                                    <Body>
                                        <Image
                                            source={require('../../../assets/Imran-Khan.jpg')}
                                            style={styles.imranKhan}
                                        >
                                        </Image>
                                        <View>
                                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                                                Assalam-o-Alaikum
                                    </Text>

                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text>
                                                “Prime Minister Imran congratulated Dr Nishtar as well as the Saylani Trust for initiating the programme and said that none of the previous administrations had spent on welfare as much as his own government. He repeated his ambition to build a welfare state, based on the model of the state of Madina, where the poor section of the society will be uplifted. He said that the government was striving to create opportunities for the business community in order to generate wealth that can be spent on people. He emphasised, however, that change would take time. "People are impatient," the prime minister said. "It's only been 13 months and they ask 'where is the state of Madina'. The state of Madina was not created within a day."
                                        </Text>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>

                        </View>
                        <View style={{ marginTop: 12 }}>
                            <Card transparent>
                                <CardItem>
                                    <Body>
                                        <Image
                                            source={require('../../../assets/chairman.jpg')}

                                            style={styles.imranKhan}
                                        >
                                        </Image>
                                        <View>
                                            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                                                Assalam-o-Alaikum
                                    </Text>

                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ alignSelf: 'center' }}>
                                                Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? ( Surat Baqara, Verse 245)
                                        </Text>

                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text>
                                                It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is
                                                in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that
                                                He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting
                                                Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so,
                                                no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when
                                                you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence
                                                of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only
                                                take strict accountability from those people but He will also punish them accordingly.”
                                        </Text>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>


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
    imranKhan: {
        width: '100%',
        height: 200
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 20
    }
});

