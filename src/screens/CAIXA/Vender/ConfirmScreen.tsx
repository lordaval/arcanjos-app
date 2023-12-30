import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getOneProduto } from "../../../API/Produtos";
import Produto from "../../../@types/Produto";

export default function ConfirmScreen({ id }: { id: string | string[] }) {
  useEffect(() => {
    Array.isArray(id)
      ? id.map((id) => {
          console.log(getOneProduto(id));
        })
      : console.log(getOneProduto(id));
  });

  const [products, setProducts] = useState<Produto[]>([]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Vender</Text>
      </View>
      <View>
        <View style={styles.header2}>
          <Text style={styles.subTitle}>Ajustar venda</Text>
        </View>
        <View style={styles.main}>
          <Text>Id do produto: {id}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    padding: 16,
    alignItems: "flex-start",
  },
  header2: {
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "flex-start",
    paddingBottom: 16,
  },
  main: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
  },
});
