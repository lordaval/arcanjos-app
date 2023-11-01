import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        alert('Login efetuado com sucesso')
      })
      .catch((error) => {
        alert(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>Arcanjos Motoclube</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput onChangeText={setEmail} placeholder="example@gmail.com" style={styles.input} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput onChangeText={setPassword} secureTextEntry placeholder="******" style={styles.input} />
        </View>
        <TouchableOpacity onPress={handleLogin} style={{ width: '60%', borderRadius: 8, alignItems: 'center', padding: 10, backgroundColor: '#111', marginTop: 10 }}>
          {isLoading ? <ActivityIndicator color={'#fff'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/> : <Text style={{ color: '#fff', fontSize: 20 }}>Entrar</Text>}
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  field: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 4,
    width: '60%',
  },
  label: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 36,
    borderRadius: 2,
    fontSize: 12,
  }
});