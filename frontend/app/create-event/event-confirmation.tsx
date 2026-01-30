import { View, Text, Pressable } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EventConfirmation() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View>
        <Pressable onPress={() => router.push("/create-event")}>
            <Text>exit (temp)</Text>
        </Pressable>
        <Text>Event Created</Text>
        <Text>{params.title}</Text>
        <Text>Date:</Text>
        <Text>Time Range</Text>
        <Text>Duration:</Text>
        <Text>Response Deadline:</Text>
        </View>
    )
}