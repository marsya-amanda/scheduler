import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router";

export default function EventConfirmation() {
    const router = useRouter()
    return (
        <View>
        <Pressable onPress={() => router.push("/create-event")}>
            <Text>exit (temp)</Text>
        </Pressable>
        <Text>Event confirmed!</Text>
        </View>
    )
}