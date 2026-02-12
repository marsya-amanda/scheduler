import { Pressable, View, Text } from "react-native";
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatTime } from "@/utils/formatting-helpers";
import { generalStyles } from "./styles";

export default function TimePicker({ value, onChange }: any) {
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
                <Text>
                    {formatTime(String(value.toTimeString().slice(0, 8)))}
                </Text>
                <DateTimePickerModal
                    isVisible={isVisible}
                    mode="time"
                    date={value}
                    onConfirm={handleConfirm}
                    onCancel={hidePicker}
                    pickerContainerStyleIOS={{
                        alignItems: 'center'
                    }}
                />
            </Pressable>
        </View>
    )
}