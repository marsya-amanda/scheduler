import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function NextBar() {
    return (
        <Pressable style={styles.nextBar}>
            <Text style={{top: 10}}>
                &gt;
            </Text>
        </Pressable>
    );
}