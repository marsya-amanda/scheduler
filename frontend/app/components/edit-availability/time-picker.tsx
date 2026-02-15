import { View, Text, Pressable } from 'react-native';
import { editAvailabilityStyles } from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';

type TimePickerProps = {
    checked:boolean
}

export default function TimePicker({checked}:TimePickerProps) {
    const styles = editAvailabilityStyles;
    const [startTime, setStartTime] = useState(new Date(2026, 11, 2, 9, 0, 0, 0));
    const [endTime, setEndTime] = useState(new Date(2026, 11, 2, 17, 0, 0, 0));
    const [isVisibleStart, setVisibilityStart] = useState(false);
    const [isVisibleEnd, setVisibilityEnd] = useState(false);

    const showPickerStart = () => {
        setVisibilityStart(true);
    }

    const hidePickerStart = () => {
        setVisibilityStart(false);
    }

    const showPickerEnd = () => {
        setVisibilityEnd(true);
    }

    const hidePickerEnd = () => {
        setVisibilityEnd(false);
    }

    const handleConfirmStart = (newTime: Date) => {
        if (newTime.getTime() <= startTime.getTime()) {
            setStartTime(newTime);
        } else {
            console.log('invalid end time');
        }
        console.log('date picked, ', newTime);
        hidePickerStart();
    }

    const handleConfirmEnd = (newTime: Date) => {
        if (newTime.getTime() >= startTime.getTime()) {
            setEndTime(newTime);
        } else {
            console.log('invalid end time');
        }
        hidePickerEnd();
    }

    return (
        <View style={styles.timePickerContainer}>
            <Text style={[{fontSize: 16}, checked ? styles.checked : styles.unchecked]}>
                Time available:
            </Text>

            {/* add input validation here */}

            <Pressable style={[styles.timePickerButton, checked ? styles.checked : styles.unchecked]} 
                onPress={showPickerStart}
            >
                <Text style={[{fontSize: 16}, checked ? styles.checked : styles.unchecked]}>
                    {String(startTime.getHours()).padStart(2, '0')}:
                    {String(startTime.getMinutes()).padStart(2, '0')}
                </Text>
                <DateTimePickerModal
                    isVisible={isVisibleStart}
                    mode='time'
                    onConfirm={handleConfirmStart}
                    onCancel={hidePickerStart}
                    date={startTime}
                    pickerContainerStyleIOS={{
                        alignItems: 'center',
                    }}
                    minuteInterval={15}
                />
            </Pressable>
            

            <Text style={[{fontSize: 16}, checked ? styles.checked : styles.unchecked]}>-</Text>

            <Pressable style={[styles.timePickerButton, checked ? styles.checked : styles.unchecked]}
                onPress={showPickerEnd}
            >
                <Text style={[{fontSize: 16}, checked ? styles.checked : styles.unchecked]}>
                    {String(endTime.getHours()).padStart(2, '0')}:
                    {String(endTime.getMinutes()).padStart(2, '0')}
                </Text>
                
                <DateTimePickerModal
                    isVisible={isVisibleEnd}
                    mode='time'
                    onConfirm={handleConfirmEnd}
                    onCancel={hidePickerEnd}
                    date={endTime}
                    pickerContainerStyleIOS={{
                        alignItems: 'center',
                    }}
                    minuteInterval={15}
                />
            </Pressable>

        </View>
    );
}