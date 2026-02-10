import { Pressable, View, Text } from "react-native";
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
            <Pressable onPress={showPicker}>
                <Text>
                    {String(value.getHours()).padStart(2, '0')}:
                    {String(value.getMinutes()).padStart(2, '0')}
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