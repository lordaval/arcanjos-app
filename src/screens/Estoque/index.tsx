import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Search } from "lucide-react-native";

export default function Estoque() {
  const fakeData = [
    {
      id: 1,
      name: "Heineken",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 2,
      name: "Brahma",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 3,
      name: "Skol",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 4,
      name: "Antártica",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 5,
      name: "Pitoresca",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 6,
      name: "51",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 7,
      name: "Putaria",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
    {
      id: 8,
      name: "Sei lá",
      description: "Card",
      image: require("../../assets/images/teste.png"),
    },
  ];

  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(fakeData);

  function handleSearch(text: string) {
    setSearch(text);
    if (text) {
      const newData = fakeData.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(fakeData);
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Vender</Text>
      </View>
      <View style={{ flex: 1 }}>
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
                name={item.name}
                description={item.description}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Card({ name, description, image }: any) {
  return (
    <TouchableOpacity
      onLongPress={() => console.log("Long Press")}
      onPress={() => console.log("Press")}
      style={styles.card}
    >
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </TouchableOpacity>
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
  card: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 26,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
});
