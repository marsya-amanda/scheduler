import { View, Text, Pressable, StyleSheet } from "react-native"
import { useRouter } from "expo-router";
import {createEvent} from '../../../utils/event-api';

export default function CancelCreateBar({ eventData }: any) {
    const router = useRouter()

    const handleConfirm = async () => {
        const createdEvent = await createEvent(eventData);
        router.push({
            pathname: "/create-event/event-confirmation",
            params: eventData
        });
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => router.push("../(tabs)")}>
                <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style= {styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-around",
        marginTop: 30
    },
    button: {
        backgroundColor: 'lightgrey',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15
    },
    buttonText: {
        fontWeight: 600
    }
})