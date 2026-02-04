import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router";
import {createEvent} from '../../../utils/event-api';
import { styles } from "./styles"

export default function CancelCreateBar({ eventData }: any) {
    const router = useRouter();

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