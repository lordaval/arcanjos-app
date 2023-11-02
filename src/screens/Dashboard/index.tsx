import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Dashboard () {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-Vindo!</Text>
      </View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 16,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
