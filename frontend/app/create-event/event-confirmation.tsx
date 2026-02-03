import { View, Text, Pressable, StyleSheet } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router";
import { confirmationStyles, generalStyles } from './styles';

export default function EventConfirmation() {
    const router = useRouter();
    const params = useLocalSearchParams();

    function formatDate(str: string | string[]) {
        if(Array.isArray(str)) {
            str = str[0];
        }
        return new Date(str).toLocaleDateString("en-GB",{
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }

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
                <Text style={generalStyles.body}>{formatDate(params.startDate)} ~ {formatDate(params.endDate)}</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Time Range:</Text>
                <Text style={generalStyles.body}>{params.timeRangeStart} ~ {params.timeRangeEnd}</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Duration:</Text>
                <Text style={generalStyles.body}>{params.duration} minutes</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Response Deadline:</Text>
                <Text style={generalStyles.body}>{params.responseDeadline}</Text>
            </View>
            
        </View>
    )
}