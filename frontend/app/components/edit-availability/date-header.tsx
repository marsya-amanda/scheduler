import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox'
import { editAvailabilityStyles } from './styles';

type DateHeaderProps = {
    date: Date
}

export default function DateHeader({date}: DateHeaderProps) {
    const style = editAvailabilityStyles;
    const dayMonth = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
    });

    return(
        <View style={style.dateBlockContainer}>
            <View style={style.dateBlockHeader}>
                <Checkbox />
                <Text style={style.dateHeaderText}>{dayMonth}</Text>
            </View>
        </View>
    );
}