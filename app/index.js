import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from "react-native-paper";

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
                            <Text>Business Name Generator</Text>
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
        margin: 10,
    },
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
    smallcard: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        width: '45%',
    },
})