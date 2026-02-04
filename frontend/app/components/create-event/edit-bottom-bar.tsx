import { View, Text, Pressable } from "react-native"
import { styles } from "./styles"

export default function EditBottomBar() {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit Event</Text>
            </Pressable>
            <Pressable style= {styles.button}>
                <Text style={styles.buttonText}>Your Availability</Text>
            </Pressable>
        </View>
    )
}