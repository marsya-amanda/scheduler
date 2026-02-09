import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router";
import {createEvent} from '../../../utils/event-api';
import { buttonBars } from "./styles"

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
        <View style={buttonBars.container}>
            <Pressable style={buttonBars.button} onPress={() => router.push("../(tabs)")}>
                <Text style={buttonBars.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style= {buttonBars.button} onPress={handleConfirm}>
                <Text style={buttonBars.buttonText}>Confirm</Text>
            </Pressable>
        </View>
    )
}