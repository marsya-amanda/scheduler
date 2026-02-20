import { View, Pressable, Text } from "react-native"
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function EventOverviewScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View>
            <Pressable onPress={() => router.push({pathname: "/(tabs)"})}>
                <Text>Exit</Text>
            </Pressable>

            <Text>{params.title}</Text>

        </View>
    )
}