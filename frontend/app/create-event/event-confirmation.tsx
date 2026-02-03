import { View, Text, Pressable, StyleSheet } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router";
import { confirmationStyles, generalStyles } from './styles';

export default function EventConfirmation() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View style={generalStyles.container}>
            <View style={confirmationStyles.topBar}>
                <Pressable style= {{alignSelf: "flex-start"}} onPress={() => router.push("../(tabs)")}>
                    <Text>home</Text>
                </Pressable>
                <Text>share</Text>
            </View>


            <Text style={generalStyles.title}>Event Created</Text>

            <Text style={confirmationStyles.eventTitle}>{params.title}</Text>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Date:</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Time Range</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Duration:</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Response Deadline:</Text>
            </View>
            
        </View>
    )
}