import { Pressable, View, Text } from "react-native";
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { generalStyles } from "./styles";

export default function DatePicker({ value, onChange }: any) {
    const [isVisible, setVisibility] = useState(false);

    const showPicker = () => setVisibility(true);

    const hidePicker = () => setVisibility(false);

    const handleConfirm = (date: Date) => {
        onChange(date);
        hidePicker();
    }

    return (
        <View>
            <Pressable style={generalStyles.selectorBoxContainer} onPress={showPicker}>
                <Text >{value.toLocaleDateString()}</Text>
                <DateTimePickerModal
                    isVisible={isVisible}
                    mode="date"
                    display="inline"
                    date={value}
                    onConfirm={handleConfirm}
                    onCancel={hidePicker}
                />
            </Pressable>
        </View>
    )
}