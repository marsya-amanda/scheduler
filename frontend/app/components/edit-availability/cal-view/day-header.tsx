import { View, Text, Dimensions } from 'react-native';
import { styles } from './styles';

export default function DayHeader() {
    return (
        <View style={styles.dateHeader}>
            <Text style={{textAlign: 'center', width: Dimensions.get('window').width * .24, fontWeight: 'bold', fontSize: 16}}>{`16/02\nMon`}</Text>
            <Text style={{textAlign: 'center', width: Dimensions.get('window').width * .24, fontWeight: 'bold', fontSize: 16}}>{`17/02\nTues`}</Text>
            <Text style={{textAlign: 'center', width: Dimensions.get('window').width * .24, fontWeight: 'bold', fontSize: 16}}>{`18/02\nWed`}</Text>
        </View>
    );
}