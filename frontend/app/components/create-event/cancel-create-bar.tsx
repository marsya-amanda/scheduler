import { View, Text, Pressable, StyleSheet } from "react-native"
import { useRouter } from "expo-router";

export default function CancelCreateBar({ eventData }: any) {
    const router = useRouter()

    const handleConfirm = () => {
        router.push({
            pathname: "/create-event/event-confirmation",
            params: eventData
        });
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => router.push("../(tabs)")}>
                <Text>Cancel</Text>
            </Pressable>
            <Pressable style= {styles.button} onPress={handleConfirm}>
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