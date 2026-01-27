import { Button, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// import {ViewOptions} from "../components/view-options";

export default function CreateEventScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Button title="x" onPress={() => router.push("../(tabs)")}/>
            <Text style={styles.title}>Create Event</Text>

            <View>
                <Text style={styles.body}>Event Title*</Text>
                {/* Todo: add text input */}
            </View>

            <View>
                <Text style={styles.body}>Start Date*</Text>
                {/* Todo: add date input */}
                <Text style={styles.body}>End Date</Text>
                {/* Todo: add date input */}
                {/* Todo: add tickbox */}
                <Text style={styles.tickBoxText}>Single day availability</Text>
            </View>

            <View>
                <Text style={styles.body}>Available Time Range*</Text>
                {/* Todo: add start and end time inputs */}
                {/* Todo: add tickbox */}
                <Text style={styles.tickBoxText}>Block off time admin is unavailable</Text>
            </View>

            <View>
                <Text style={styles.body}>Event Duration</Text>
                {/* Todo: add duration input */}
            </View>

            <View>
                <Text style={styles.body}>Response Deadline</Text>
                {/* Todo: add input box */}
                {/* Todo: add tickbox */}
                <Text style={styles.tickBoxText}>Remind participants 1 day before deadline</Text>
            </View>

            {/* Todo: add cancel and create event buttons */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: `center`
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 20
    },
    tickBoxText: {
        fontSize: 10,
        color: 'darkgrey'
    }
})

export const unstable_settings = {
    presentation: "modal",
};