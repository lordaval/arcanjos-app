import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Auth() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>Arcanjos Motoclube</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput placeholder="example@gmail.com" style={styles.input} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput placeholder="******" style={styles.input} />
        </View>
        <TouchableOpacity onPress={() => { alert('Login efetuado com sucesso!') }} style={{ width: '75%', borderRadius: 8, alignItems: 'center', padding: 10, backgroundColor: '#111', marginTop: 10 }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Entrar</Text>
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
    display: 'flex',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  field: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    gap: 10,
    width: '90%',
  },
  label: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    height: 36,
    borderRadius: 2,
    fontSize: 12,
  }
});
