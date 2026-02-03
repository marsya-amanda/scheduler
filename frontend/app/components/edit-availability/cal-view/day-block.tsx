import { View, Text } from 'react-native';
import { styles } from './styles';
import DayHeader from './day-header';
import TimeBlock from './time-block';

export default function DayBlock() {
    return(
        <View style={styles.dayBlock}>
            <DayHeader />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
            <TimeBlock />
        </View>
    );
}