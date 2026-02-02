import { View, Text, Pressable } from 'react-native';
import { editAvailabilityStyles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';

export default function TimePicker() {
    const styles = editAvailabilityStyles;
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date(startTime));
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
            <Text>Time available:</Text>

            {/* add input validation here */}

            <Pressable style={styles.timePickerButton} onPress={showPickerStart}>
                {/* <DateTimePicker
                    value={startDate}
                    mode='time'
                    display='default'
                /> */}
                <Text>
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
                />
            </Pressable>
            

            <Text>-</Text>

            <Pressable style={styles.timePickerButton} onPress={showPickerEnd}>
                {/* <DateTimePicker
                    value={endDate}
                    mode='time'
                    display='default'
                /> */}
                <Text>
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
                />
            </Pressable>

        </View>
    );
}