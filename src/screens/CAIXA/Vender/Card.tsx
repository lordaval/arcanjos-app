import { Check } from "lucide-react-native";
import { Dispatch, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card({
  name,
  price,
  image,
  id,
  selectedItems,
  setSelectedItems,
  nextFunction,
}: {
  name: string;
  price: number;
  image: any;
  id: string;
  selectedItems: string[];
  setSelectedItems: Dispatch<React.SetStateAction<any>>;
  nextFunction: (id: string | any) => void;
}) {
  function onSelectOne() {
    if (selectedItems.length >= 1) {
      return onSelect();
    }
    setSelectedItems((prevState: any) => [...prevState, id]);
    nextFunction(id);
  }

  function onSelect() {
    setSelectedItems((prevState: any) => {
      if (prevState.includes(id)) {
        return prevState.filter((item: any) => item !== id);
      }
      return [...prevState, id];
    });
  }

  return (
    <TouchableOpacity
      onPress={onSelectOne}
      onLongPress={onSelect}
      style={selectedItems.includes(id) ? styles.cardIfSelected : styles.card}
      activeOpacity={0.6}
    >
      <Image
        source={{ uri: image, scale: 1, width: 100, height: 100 }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>
        {"R$ " + price.toFixed(2).replace(".", ",")}
      </Text>
      {selectedItems.includes(id) && (
        <View style={styles.selectedIcon}>
          <Check size={20} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 175,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 26,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
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
  cardIfSelected: {
    width: 175,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 26,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
  },
  selectedIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 100,
    padding: 4,
    backgroundColor: "blue",
  },
});
