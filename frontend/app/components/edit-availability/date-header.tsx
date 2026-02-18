import { View, Text } from 'react-native';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
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

    const weekday = date.toLocaleDateString('en-GB', {
        weekday: 'short',
    });

    const formattedDate = `${dayMonth} (${weekday})`;

    return(
        <View style={style.dateBlockContainer}>
            <View style={style.dateBlockHeader}>
                <AdvancedCheckbox 
                value={checked} 
                onValueChange={onPress} 
                accessibilityLabel="Add availability time slots for ${dayMonth}"/>
                <Text style={[style.dateHeaderText, checked ? style.checked : style.unchecked]}>
                    {formattedDate}
                    </Text>
            </View>
        </View>
    );
}

export default DateHeader;