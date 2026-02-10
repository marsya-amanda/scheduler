import { View, Text, TextInput } from "react-native"
import { useState } from 'react';
import { generalStyles, notesBox } from "../styles"
import TagSelection from "./tag-selection"


export default function NotesBox() {
    const [notes, setNotes] = useState('Meeting link, location, etc');

    return (
        <View style={generalStyles.section}>
            <Text style={generalStyles.body}>Notes</Text>
            <View style={notesBox.mainContainer}>
                <TextInput
                    onChangeText={setNotes}
                    value={notes}
                ></TextInput>
                <TagSelection/>
            </View>
        </View>
    )
}