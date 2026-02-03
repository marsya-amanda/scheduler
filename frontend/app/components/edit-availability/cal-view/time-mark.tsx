import {View, Text} from 'react-native';
import {styles} from './styles';

type TimeMarkProps = {
    hour: string
}

export default function TimeMark({hour}: TimeMarkProps) {
    return (
        <View style={styles.hourContainer}>
            <Text style={styles.hourText}>
                {hour}
            </Text>
        </View>
    );
}