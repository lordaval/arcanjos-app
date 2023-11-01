import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    text: string;
    onPress: () => void;
}

export default function MenuItem({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text} onPress={onPress}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    text: {
        color: '#000',
        fontSize: 16,
    }
})