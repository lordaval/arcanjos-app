import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase'
import { useAuth } from '../../contexts/User'

export default function Dashboard() {

  const userData = useAuth()

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-Vindo!</Text>
      </View>
      <Text>Home</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>Nome: {userData?.nome}</Text>
      <Text>Cargo: {userData?.cargo}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
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
