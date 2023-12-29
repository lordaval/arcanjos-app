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
} from "react-native";
import React from "react";
import { Check, Search } from "lucide-react-native";
import Card from "./Card";

export default function Vender() {
  const fakeData = [
    {
      id: 1,
      name: "Heineken",
      price: 6.5,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 2,
      name: "Brahma",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 3,
      name: "Skol",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 4,
      name: "Antártica",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 5,
      name: "Pitoresca",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 6,
      name: "51",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 7,
      name: "Putaria",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
    {
      id: 8,
      name: "Sei lá",
      price: 89,
      image: require("../../../assets/images/teste.png"),
    },
  ];

  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(fakeData);

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  function handleSearch(text: string) {
    setSearch(text);
    if (text) {
      const newData = fakeData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(fakeData);
    }
  }

  function selectedOk(id?: string | any) {
    if (typeof id === "string") {
      console.log(id);
    } else console.log(selectedItems)

    setSelectedItems([]);
  }

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
          <FlatList
            data={filteredData}
            contentContainerStyle={styles.cardContainer}
            renderItem={({ item }) => (
              <Card
                nextFunction={selectedOk}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id.toString()}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          {selectedItems.length > 0 && (
            <TouchableOpacity style={styles.confirmButton} onPress={selectedOk}>
              <Check size={24} color="#fff" />
            </TouchableOpacity>
          )}
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
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
