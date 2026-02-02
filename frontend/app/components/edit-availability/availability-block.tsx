import { View, Text } from 'react-native';
import { editAvailabilityStyles } from './styles';
import DateHeader from './date-header';
import TimePicker from './time-picker';
import AddTimeButton from './add-time-button';
import {useState} from 'react';

type AvailabilityBlockProps = {
    date: Date
}

export default function AvailabilityBlock({date}: AvailabilityBlockProps) {
    const [timePickers, setTimePickers] = useState<{ id: number }[]>([]); // make have start end dates later

    const addTimePicker = () => {
        setTimePickers(prev => [
            ...prev,
            { id: Date.now() } // simple unique id
        ]);
    };


    return (
        <View style={editAvailabilityStyles.dateBlockContainer}>

            <DateHeader date={date}/>

            {timePickers.map(picker => (
                <TimePicker key={picker.id} />
            ))}

            <AddTimeButton onPress={addTimePicker} />
        </View>
    );
}