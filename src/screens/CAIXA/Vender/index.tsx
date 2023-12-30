import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Check, Search } from "lucide-react-native";
import Card from "./Card";
import ConfirmScreen from "./ConfirmScreen";
import { firestore } from "../../../../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getProdutos } from "../../../API/Produtos";
import Produto from "../../../@types/Produto";

export default function Vender() {
  useEffect(() => {
    async function fetchData() {
      const products: Produto[] = await getProdutos();
      console.log(products);
      setProductsData(products);
      setFilteredData(products);
    }
    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const [productsData, setProductsData] = useState<Produto[]>([]);
  const [filteredData, setFilteredData] = useState(productsData);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleSearch(text: string) {
    setSearch(text);
    if (text) {
      const newData = productsData.filter((item) => {
        const itemData = item.nome ? item.nome.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(productsData);
    }
  }

  function selectedOk(id?: string | any) {
    if (typeof id === "string") {
      console.log(id);
      setOpen(true);
    } else {
      console.log(selectedItems);
      setOpen(true);
    }
  }

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Vender</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.header2}>
          <Text style={styles.subTitle}>Vendas recentes</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.searchInputView}>
            <Search size={24} color="#000" />
            <TextInput
              placeholder="Buscar"
              onChangeText={handleSearch}
              value={search}
              style={styles.searchInput}
            />
          </View>
          {filteredData.length === 0 ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={filteredData}
              contentContainerStyle={styles.cardContainer}
              numColumns={2}
              columnWrapperStyle={{ gap: 10 }}
              renderItem={({ item }) => (
                <Card
                  nextFunction={selectedOk}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  name={item.nome}
                  price={item.valor}
                  image={item.imagem}
                  id={item.id}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          )}
          {selectedItems.length > 0 && (
            <TouchableOpacity style={styles.confirmButton} onPress={selectedOk}>
              <Check size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        <Modal
          visible={open}
          onRequestClose={() => setOpen(false)}
          animationType="slide"
        >
          <ConfirmScreen id={selectedItems} />
        </Modal>
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
  searchInputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 30,
  },
  searchInput: {
    padding: 14,
    width: "100%",
    fontSize: 16,
    color: "#000",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 16,
    right: 26,
    width: 60,
    height: 60,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
