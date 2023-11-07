import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

interface SelectInputProps {
    placeholder: string
    onValueChange: any
    value: string
    options: any[]
}

export default function SelectInput({ onValueChange, value, options, placeholder }: SelectInputProps) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <TouchableOpacity style={styles.select} onPress={() => setOpen(true)}>
                <Text style={styles.placeholder} numberOfLines={1} >{value || placeholder}</Text>
                <Ionicons name="chevron-down" size={22} color={'#fff'} />
            </TouchableOpacity>
            <Modal visible={open} onRequestClose={() => setOpen(false)} animationType="slide">
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setOpen(false)}>
                            <Ionicons name="chevron-back" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOpen(false)}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => {
                                    onValueChange(item.cargo)
                                    setOpen(false)
                                }}
                            >
                                <Text>{item.cargo}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: '#272727',
        paddingHorizontal: 16,
        width: '100%',
        borderRadius: 5,
        fontSize: 14,
        color: '#fff',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeholder: {
        color: '#fff'
    },
    header: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    option: {
        paddingHorizontal: 16,
        width: '100%',
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        color: '#fff',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
})