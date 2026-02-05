import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router";
import { styles } from "./styles"

export default function EditBottomBar() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit Event</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => router.push("../edit-availability")}>
                <Text style={styles.buttonText}>Your Availability</Text>
            </Pressable>
        </View>
    )
}