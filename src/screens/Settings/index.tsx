import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { auth } from '../../../firebase'
import { signOut } from 'firebase/auth'
import MenuItem from '../../components/MenuItem'

const Settings = () => {

    function logOut() {
      signOut(auth)
    }

    function showUserInfo() {
      alert(auth.currentUser?.email)
    }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Ações</Text>
      </View>
      <MenuItem text="Criar novo usuário" onPress={showUserInfo} />
      <MenuItem text="Sair" onPress={logOut} />
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
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1,  },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default Settings