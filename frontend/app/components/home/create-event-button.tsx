import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text} from 'react-native';
import { useRouter } from "expo-router";

export default function CreateEventButton() {
    const router = useRouter();
    return (
        <Pressable style={styles.container} onPress={() => router.push("/create-event")}>
            <Ionicons name="add" size={30} color={'black'}/>
            <Text style={styles.buttonText}>event</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        backgroundColor: 'lightgrey',
    },
    buttonText: {
        fontSize: 28,
        padding: 5,
        color: 'black'
    }
})