import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getOneProduto } from "../../../API/Produtos";
import Produto from "../../../@types/Produto";

export default function ConfirmScreen({ id }: { id: string | string[] }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    if (Array.isArray(id)) {
      id.forEach(async (id) => {
        const product: Produto = (await getOneProduto(id)) as Produto;
        setProducts((prevState: Produto[]) => {
          if (prevState.includes(product)) {
            return prevState;
          }
          return [...prevState, product];
        });
        console.log("getOneProduto(id)", await getOneProduto(id));
      });
    } else {
      const product: Produto = (await getOneProduto(id)) as Produto;
      setProducts((prevState: Produto[]) => {
        if (prevState.includes(product)) {
          return prevState;
        }
        return [product];
      });
      console.log("getOneProduto(id)", await getOneProduto(id));
    }
  }

  const [products, setProducts] = useState<Produto[]>([]);

  return products.length > 0 ? (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Vender</Text>
      </View>
      <View>
        <View style={styles.header2}>
          <Text style={styles.subTitle}>Ajustar venda</Text>
        </View>
      </View>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          name={product.nome}
          price={product.valor}
          imageUrl={product.imagem}
        />
      ))}

      <Text style={styles.valorFinal}>Valor final: R$ 26,00</Text>

      <TouchableOpacity style={styles.finalizarButton}>
        <Text style={styles.finalizarButtonText}>FINALIZAR VENDA</Text>
      </TouchableOpacity>

      <Text style={styles.transaction}>Transaction 00</Text>
      <Text style={styles.account}>Account</Text>
    </SafeAreaView>
  ) : (
    <ActivityIndicator size="large" color="#000" />
  );
}

function ItemCard({
  name,
  price,
  imageUrl,
}: {
  name: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <View style={styles.ItemCard}>
      <Image
        style={styles.ItemCardImage}
        source={require("../../../assets/images/teste.png")}
      />
      <Text style={styles.ItemCardName}>{name}</Text>
      <Text style={styles.ItemCardDetail}>Preço (fixo)</Text>
      <Text style={styles.ItemCardDetail}>
        R$ {price.toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    padding: 14,
    alignItems: "flex-start",
  },
  header2: {
    width: "100%",
    alignItems: "flex-start",
    paddingBottom: 16,
  },
  main: {
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
  description: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ItemCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  ItemCardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  ItemCardName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 5,
  },
  ItemCardDetail: {
    fontSize: 12,
    color: "#888",
    marginBottom: 5,
  },
  valorFinal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 20,
  },
  finalizarButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  finalizarButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  transaction: {
    fontSize: 12,
    color: "#888",
    marginBottom: 5,
  },
  account: {
    fontSize: 12,
    color: "#888",
  },
});
