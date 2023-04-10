import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
import { FONTS } from '../constants';

const BusinessNameGenrator = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.cardcontainer}>
                    <View style={styles.cards}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <FontAwesome name="plus" style={styles.icon} size={30} color="#F25900" />
                                    <Text style={styles.text}>Business Generator</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={styles.cards2}>
                        <Card style={styles.smallcard}>
                            <Card.Content>
                                <FontAwesome name="star" style={styles.icon} size={40} color="white" />
                            </Card.Content>
                        </Card>
                    </View>
                </View>
                <View style={styles.cardcontainer}>
                    <View style={styles.cards}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <FontAwesome name="plus" style={styles.icon} size={30} color="#F25900" />
                                    <Text style={styles.text} >Business Generator</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={styles.cards2}>
                        <Card style={styles.smallcard}>
                            <Card.Content>
                                <FontAwesome name="star" style={styles.icon} size={40} color="white" />
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BusinessNameGenrator

const styles = StyleSheet.create({
    container: {
    },
    cardcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -10,
    },
    card: {
        margin: 10,
        backgroundColor: "#FFF5E5",
        borderRadius: 5,
        borderColor: "#FFF5E5",
        borderWidth: 1,
    },
    smallcard: {
        backgroundColor: "#FFF5E5",
        borderRadius: 5,
        borderColor: "#FFF5E5",
        borderWidth: 1,
    },
    cards: {
        width: 300,
    },
    cards2: {
        // width: 50,
    },
    icon: {
        alignSelf: 'center',
        margin: -10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#666',
        alignSelf: 'center',
        fontFamily: FONTS.regular,
    }
});