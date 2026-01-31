import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox'
import { editAvailabilityStyles } from './styles';
import AddTimeBlock from './add-time-block';

export default function DateBlock() {
    const style = editAvailabilityStyles;

    return(
        <View style={style.dateBlockContainer}>
            <View style={style.dateBlockTitle}>
                <Checkbox />
                <Text>5 Jan </Text>
            </View>
            
            <AddTimeBlock />
        </View>
    );
}