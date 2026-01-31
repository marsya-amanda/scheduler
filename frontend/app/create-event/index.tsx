import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import CancelCreateBar from "../components/create-event/cancel-create-bar"
import Checkbox from 'expo-checkbox'
import DateTimePicker from '@react-native-community/datetimepicker';
// import {ViewOptions} from "../components/view-options";

export default function CreateEventScreen() {
    const router = useRouter();
    const [eventTitle, setTitle] = useState('');

    // Checkboxes
    const [isSingleDayAvail, setSingleDayAvail] = useState(false);
    const [isAdminTimeBlock, setAdminTimeBlock] = useState(false);
    const [isSendReminder, setSendReminder] = useState(false);

    // Date + time pickers
    const [responseDeadline, setResponseDeadline] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startRange, setStartRange] = useState(new Date());
    const [endRange, setEndRange] = useState(new Date());

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Create Event</Text>

            <View style={styles.section}>
                <Text style={styles.body}>Event Title*</Text>
                <TextInput
                    style={styles.textBox}
                    onChangeText={setTitle}
                    value={eventTitle}
                ></TextInput>
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Start Date*</Text>
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    onChange={(_, d) => d && setStartDate(d)}
                ></DateTimePicker>
                <Text style={styles.body}>End Date</Text>
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    onChange={(_, d) => d && setEndDate(d)}
                ></DateTimePicker>
                <View style={styles.tickContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isSingleDayAvail}
                        onValueChange={setSingleDayAvail}   
                        color={isSingleDayAvail ? 'grey' : undefined}
                    ></Checkbox>
                    <Text style={styles.tickBoxText}>Single day availability</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Available Time Range*</Text>
                <View style={styles.availRangeContainer}>
                <DateTimePicker
                    value={startRange}
                    mode="time"
                    onChange={(_, t) => t && setStartRange(t)}
                ></DateTimePicker>
                <Text style={{padding: 5}}>~</Text>
                <DateTimePicker
                    value={endRange}
                    mode="time"
                    onChange={(_, t) => t && setEndRange(t)}
                ></DateTimePicker>
                </View>
                <View style={styles.tickContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isAdminTimeBlock}
                        onValueChange={setAdminTimeBlock}   
                        color={isAdminTimeBlock ? 'grey' : undefined}
                    ></Checkbox>  
                    <Text style={styles.tickBoxText}>Block off time admin is unavailable</Text>                  
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Event Duration</Text>
                {/* Todo: add event duration picker */}
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Response Deadline</Text>
                <DateTimePicker
                    value={responseDeadline}
                    mode="datetime"
                    onChange={(_, d) => d && setResponseDeadline(d)}
                ></DateTimePicker>
                <View style={styles.tickContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isSendReminder}
                        onValueChange={setSendReminder}
                        color={isSendReminder ? 'grey' : undefined}
                    ></Checkbox>
                    <Text style={styles.tickBoxText}>Remind participants 1 day before deadline</Text>                  
                </View>
            </View>

            <CancelCreateBar
                eventData={{
                    title: eventTitle
                }}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'space-between',
        // height: '100%'
    },
    section: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 20
    },
    tickContainer: {
        flexDirection: 'row'
    },
    checkbox: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'lightgrey',
        height: 10,
        width: 10,
        marginRight: 5,
        alignSelf: 'center'
    },
    tickBoxText: {
        fontSize: 10,
        color: 'darkgrey'
    },
    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 5,
        paddingRight: 5,
        width: 220,
        height: 25
    },
    availRangeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export const unstable_settings = {
    presentation: "modal",
};