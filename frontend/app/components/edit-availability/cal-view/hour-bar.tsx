import { View, Text } from 'react-native';
import { styles } from './styles';
import TimeMark from './time-mark';

export default function HourBar() {
    const DUMMY_HOURS: string[] = ['7', '8', '9', '10', '11', '12', '13', '14', '15']

    return (
        <View style={styles.hourBar}>
            <View style={styles.dateHeader}>
                <Text style={styles.timezoneText}>
                    GMT+7
                </Text>
            </View>

            
            {DUMMY_HOURS.map(hour => (
                <TimeMark key={hour} hour={hour} />
            ))}
        </View>
    );
}