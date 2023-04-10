import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';

const BusinessNameGenrator = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.cardcontainer}>
                    <View style={styles.cards}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Text>Business Generator</Text>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={styles.cards2}>
                        <Card style={styles.smallcard}>
                            <Card.Content>
                                <FontAwesome name="star" size={20} color="black" />
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
    },
    card: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    smallcard: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    cards: {
        width: 270,
    },
    cards2: {
        width: 50,
    }
})