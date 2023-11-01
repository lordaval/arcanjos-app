import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../../firebase'
import MenuItem from '../../components/MenuItem'

const Settings = () => {

    function logOut() {
      confirm('Tem certeza que deseja sair?') && auth.signOut()
    }

  return (
    <View>
      <MenuItem text="Sair" onPress={logOut} />
    </View>
  )
}

export default Settings