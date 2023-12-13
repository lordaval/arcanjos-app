import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Card({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: any;
}) {
  return (
    <TouchableOpacity
      onLongPress={() => console.log("Long Press")}
      onPress={() => console.log("Press")}
      style={styles.card}
      activeOpacity={0.8}
    >
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>
        {"R$ " + price.toFixed(2).toString().replace(".", ",")}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
})