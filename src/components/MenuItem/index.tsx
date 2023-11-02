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
        width: '100%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        paddingHorizontal: 20,
    },
    text: {
        color: '#000',
        fontSize: 16,
    }
})