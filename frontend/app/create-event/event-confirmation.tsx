import { View, Text, Pressable, StyleSheet } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router";
import { confirmationStyles, generalStyles } from './styles';
import {formatDate, formateDateTime, formatTime, formatDuration} from "../../utils/formatting-helpers";
import EditBottomBar from "../components/create-event/edit-bottom-bar"

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
                <Text style={confirmationStyles.fieldTitle}>Date Range:</Text>
                <Text style={generalStyles.body}>{formatDate(params.startDate)} ~ {formatDate(params.endDate)}</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={confirmationStyles.fieldTitle}>Time Range:</Text>
                <Text style={generalStyles.body}>{formatTime(params.timeRangeStart)} ~ {formatTime(params.timeRangeEnd)}</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={confirmationStyles.fieldTitle}>Duration:</Text>
                <Text style={generalStyles.body}>{formatDuration(params.duration)}</Text>
            </View>

            <View style={generalStyles.section}>
                <Text style={confirmationStyles.fieldTitle}>Response Deadline:</Text>
                <Text style={generalStyles.body}>{formateDateTime(params.responseDeadline)}</Text>
            </View>

            <EditBottomBar/>
            
        </View>
    )
}