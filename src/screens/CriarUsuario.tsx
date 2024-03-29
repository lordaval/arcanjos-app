import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import SelectInput from "../components/SelectInput";

export default function CriarUsuario({
  closeFunction,
}: {
  closeFunction?: any;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cargosArray = [
    { cargo: "CAIXA", id: 1 },
    { cargo: "VENDEDOR", id: 2 },
    { cargo: "PRESIDENTE", id: 3 },
    { cargo: "TESOUREIRO", id: 4 },
    { cargo: "DIRETOR DE BASE", id: 5 },
  ];

  function handleRegister() {
    if (!isValid()) {
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addDoc(collection(firestore, "usuarios"), {
          nome: nome,
          email: email,
          cargo: cargo,
        })
          .then(() => {
            alert("Usuário criado com sucesso");
            setNome("");
            setEmail("");
            setPassword("");
            setCargo("");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  function isValid() {
    if (nome === "" || email === "" || password === "" || cargo === "") {
      alert("Preencha todos os campos");
      return false;
    }
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 4 caracteres");
      return false;
    }
    return true;
  }

  return (
    <View style={styles.screen}>
      <View style={{ width: "100%", padding: 20, marginBottom: 40 }}>
        <TouchableOpacity onPress={closeFunction}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/arcanjos-logo.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.field}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            onChangeText={setNome}
            placeholderTextColor={"#555"}
            placeholder="Exemplo da Silva"
            style={styles.input}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Cargo:</Text>
          <SelectInput
            placeholder="Selecione um cargo..."
            options={cargosArray}
            onValueChange={setCargo}
            value={cargo}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            onChangeText={setEmail}
            placeholderTextColor={"#555"}
            placeholder="example@gmail.com"
            style={styles.input}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            onChangeText={setPassword}
            placeholderTextColor={"#555"}
            secureTextEntry
            placeholder="******"
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={{
            width: "60%",
            borderRadius: 8,
            alignItems: "center",
            padding: 10,
            backgroundColor: "#fff",
            marginTop: 10,
            height: 50,
          }}
        >
          {isLoading ? (
            <ActivityIndicator
              size={24}
              color={"#000"}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          ) : (
            <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
              Criar Usuário
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    paddingTop: 20,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  field: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 4,
    width: "85%",
  },
  label: {
    fontSize: 16,
    color: "#ffffff",
  },
  input: {
    backgroundColor: "#272727",
    padding: 16,
    width: "100%",
    borderRadius: 5,
    fontSize: 14,
    color: "#fff",
    height: 50,
  },
  closeButton: {
    color: "#fff",
  },
});
