import { View, Text } from 'react-native';
import { styles } from './styles';

export default function DayHeader() {
    return (
        <View style={styles.dateHeader}>
            <Text>D/M</Text>
            <Text>W</Text>
        </View>
    );
}