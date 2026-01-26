import { Button, View, Text } from "react-native";

export default function CreateEvent() {
    const exit = () => {
        // Todo
    };

    return (
        <View>
            <Button title="x" onPress={exit}/>
            <Text>This is the create event page</Text>
        </View>
    );
}

export const unstable_settings = {
    presentation: "modal",
};