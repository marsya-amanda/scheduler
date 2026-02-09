import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router";
import { buttonBars } from "./styles"

export default function EditBottomBar() {
    const router = useRouter();

    return (
        <View style={buttonBars.container}>
            <Pressable style={buttonBars.button}>
                <Text style={buttonBars.buttonText}>Edit Event</Text>
            </Pressable>
            <Pressable style={buttonBars.button} onPress={() => router.push("../edit-availability")}>
                <Text style={buttonBars.buttonText}>Your Availability</Text>
            </Pressable>
        </View>
    )
}