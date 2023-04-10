import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';

const BusinessNameGenrator = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.cardcontainer}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text>Business Name Generator</Text>
                        </Card.Content>
                    </Card>
                    <Card style={styles.smallcard}>
                        <Card.Content>
                            <FontAwesome name="star" size={20} color="black" />
                        </Card.Content>
                    </Card>
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
        justifyContent: 'space-between',
    },
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    smallcard: {
        margin: 5,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        width: '100%',
    },
})