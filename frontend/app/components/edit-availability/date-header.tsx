import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox'
import { editAvailabilityStyles } from './styles';
import React from 'react';

type DateHeaderProps = {
    date: Date,
    onPress: () => void;
    checked: boolean
}

const DateHeader: React.FC<DateHeaderProps> = ({date, onPress, checked}) => {
    const style = editAvailabilityStyles;
    const dayMonth = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
    });

    return(
        <View style={style.dateBlockContainer}>
            <View style={style.dateBlockHeader}>
                <Checkbox onValueChange={onPress} />
                <Text style={[style.dateHeaderText, checked ? style.checked : style.unchecked]}>
                    {dayMonth}
                    </Text>
            </View>
        </View>
    );
}

export default DateHeader;