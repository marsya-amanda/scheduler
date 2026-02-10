import { View, Text, Pressable } from "react-native"
import { notesBox } from "../styles"


export default function TagSelection() {
    return (
        <View style={notesBox.tagSelectionContainer}>
            <Text style={notesBox.tagText}>Tags: </Text>
            <Pressable style={notesBox.tag}>
                <Text style={notesBox.tagText}>Virtual</Text>
            </Pressable>
            <Pressable style={notesBox.tag}>
                <Text style={notesBox.tagText}>In person</Text>
            </Pressable>
            <Pressable style={notesBox.tag}>
                <Text style={notesBox.tagText}>Work</Text>
            </Pressable>
            <Pressable style={notesBox.tag}>
                <Text style={notesBox.tagText}>+</Text>
            </Pressable>
        </View>
    )
}