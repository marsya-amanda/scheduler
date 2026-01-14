import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text} from 'react-native';

export default function CreateEventButton() {
    return (
        <Pressable style={styles.container}>
            <Ionicons name="add" size={30} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: '2%',
        position: 'absolute',
        bottom: '2%',
        zIndex: 100
    },
    buttonText: {
        fontSize: 24,
        padding: '1%'
    }
})