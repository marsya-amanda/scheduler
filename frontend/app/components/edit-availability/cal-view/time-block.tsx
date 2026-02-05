import { View } from 'react-native';
import { styles } from './styles';
import TimeSelectBlock from './time-select-block';

export default function TimeBlock() {
    return (
        <View style={styles.timeBlock}>
            <View style={styles.timeSubBlock}>
            </View>

            <View style={styles.timeSubBlock}>
            </View>
        </View>
    );
}