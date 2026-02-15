import { View, Text, Pressable } from 'react-native';
import { editAvailabilityStyles } from './styles';
import DateHeader from './date-header';
import TimePicker from './time-picker';
import AddTimeButton from './add-time-button';
import {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

type AvailabilityBlockProps = {
    date: Date
}

export default function AvailabilityBlock({date}: AvailabilityBlockProps) {
    const [timePickers, setTimePickers] = useState<{ id: number }[]>([]); // make have start end dates later
    const [isAvailableToday, setAvailability] = useState(false);

    const addTimePicker = () => {
        setTimePickers(prev => [
            ...prev,
            { id: Date.now() } // simple unique id
        ]);
    };

    const deleteTimePicker = (id: number) => {
        setTimePickers(prev => 
            prev.filter(time => time.id !== id)
        )
    }

    return (
        <View style={editAvailabilityStyles.dateBlockContainer}>

            <DateHeader date={date} onPress={() => setAvailability(!isAvailableToday)} checked={isAvailableToday}/>

            {timePickers.map(picker => (
                <View style={editAvailabilityStyles.timePickerContainer} key={picker.id}>
                    <TimePicker key={picker.id} checked={isAvailableToday} />
                    <Pressable onPress={() => deleteTimePicker(picker.id)}>
                        <Ionicons
                            name='remove-circle-outline'
                            size={20}
                            style={isAvailableToday ? editAvailabilityStyles.checked : editAvailabilityStyles.unchecked}
                        />
                    </Pressable>
                </View>
            ))}

            <AddTimeButton onPress={addTimePicker} checked={isAvailableToday}/>
        </View>
    );
}