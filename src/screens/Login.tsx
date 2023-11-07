import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user.email)
      })
      .catch((error) => {
        alert(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={require('../../assets/arcanjos-logo.png')} style={{ width: 200, height: 200 }} />
        <View style={styles.field}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput onChangeText={setEmail} placeholderTextColor={'#555'} placeholder="example@gmail.com" style={styles.input} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput onChangeText={setPassword} placeholderTextColor={'#555'} secureTextEntry placeholder="******" style={styles.input} />
        </View>
        <TouchableOpacity onPress={handleLogin} style={{ width: '60%', borderRadius: 8, alignItems: 'center', padding: 10, backgroundColor: '#fff', marginTop: 10, height: 50 }}>
          {isLoading ? <ActivityIndicator size={24} color={'#000'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} /> : <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Entrar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#111',
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
    width: '85%',
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#272727',
    padding: 16,
    width: '100%',
    borderRadius: 5,
    fontSize: 14,
    color: '#fff',
    height: 50,
  }
});