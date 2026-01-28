import { View, Text, Pressable, StyleSheet } from "react-native"
import { useRouter } from "expo-router";

export default function CancelCreateBar() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => router.push("../(tabs)")}>
                <Text>Cancel</Text>
            </Pressable>
            <Pressable style= {styles.button} onPress={() => router.push("/create-event/event-confirmation")}>
                <Text>Confirm</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-around"
    },
    button: {
        backgroundColor: 'lightgrey',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5
    }
})