import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import app from '../../../firebase'
import { getAuth, signOut } from 'firebase/auth'
import MenuItem from '../../components/MenuItem'

const auth = getAuth(app)

const Settings = () => {

    function logOut() {
      signOut(auth)
    }

    function showUserInfo() {
      alert(auth.currentUser?.email)
    }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Ações</Text>
      </View>
      <MenuItem text="Criar novo usuário" onPress={showUserInfo} />
      <MenuItem text="Sair" onPress={logOut} />
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