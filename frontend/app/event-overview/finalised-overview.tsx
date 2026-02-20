import { View, Pressable, Text } from "react-native"
import { useRouter, useLocalSearchParams } from 'expo-router';
import { overviewStyles } from '../components/event-overview/styles';

export default function FinalisedOverviewScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View style={overviewStyles.container}>
            <Pressable onPress={() => router.push({pathname: "/(tabs)"})}>
                <Text>Exit</Text>
            </Pressable>

            <Text>Todo</Text>

        </View>
    )
}