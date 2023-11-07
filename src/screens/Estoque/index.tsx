import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Estoque() {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Estoque</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
    }
})