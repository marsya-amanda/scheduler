import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text} from 'react-native';

export default function CreateEventButton() {
    return (
        <Pressable style={styles.container}>
            <Ionicons name="add" size={30} color={'white'}/>
            <Text style={{fontSize: 28, color: 'white'}}>event</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: '2%',
        paddingRight: '3%',
        position: 'absolute',
        bottom: '4%',
        left: '10%',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '40%',
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 24,
        padding: '1%'
    }
})