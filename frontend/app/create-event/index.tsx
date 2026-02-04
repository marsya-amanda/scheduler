import { Pressable, View, Text, TextInput } from "react-native";
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import CancelCreateBar from "../components/create-event/cancel-create-bar"
import Checkbox from 'expo-checkbox'
import DateTimePicker from '@react-native-community/datetimepicker';
import { generalStyles } from './styles';
import ViewOptions from "../components/view-options";

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
        <View style={generalStyles.container}>
            <ViewOptions/>

            <Text style={generalStyles.title}>Create Event</Text>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Event Title*</Text>
                <TextInput
                    style={generalStyles.textBox}
                    onChangeText={setTitle}
                    value={eventTitle}
                ></TextInput>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Start Date*</Text>
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    onChange={(_, d) => d && setStartDate(d)}
                ></DateTimePicker>
                <Text style={generalStyles.body}>End Date</Text>
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    onChange={(_, d) => d && setEndDate(d)}
                ></DateTimePicker>
                <Pressable style={generalStyles.tickContainer} onPress={() => setSingleDayAvail(prev => !prev)}>
                    <Checkbox
                        style={generalStyles.checkbox}
                        value={isSingleDayAvail}
                        onValueChange={setSingleDayAvail}   
                        color={isSingleDayAvail ? 'grey' : undefined}
                    ></Checkbox>
                    <Text style={generalStyles.tickBoxText}>Single day availability</Text>
                </Pressable>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Available Time Range*</Text>
                <View style={generalStyles.availRangeContainer}>
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
                <Pressable style={generalStyles.tickContainer} onPress={() => setAdminTimeBlock(prev => !prev)}>
                    <Checkbox
                        style={generalStyles.checkbox}
                        value={isAdminTimeBlock}
                        onValueChange={setAdminTimeBlock}   
                        color={isAdminTimeBlock ? 'grey' : undefined}
                    ></Checkbox>  
                    <Text style={generalStyles.tickBoxText}>Block off time admin is unavailable</Text>                  
                </Pressable>
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Event Duration</Text>
                {/* Todo: add event duration picker */}
            </View>

            <View style={generalStyles.section}>
                <Text style={generalStyles.body}>Response Deadline</Text>
                <DateTimePicker
                    value={responseDeadline}
                    mode="datetime"
                    onChange={(_, d) => d && setResponseDeadline(d)}
                ></DateTimePicker>
                <Pressable style={generalStyles.tickContainer} onPress={() => setSendReminder(prev => !prev)}>
                    <Checkbox
                        style={generalStyles.checkbox}
                        value={isSendReminder}
                        onValueChange={setSendReminder}
                        color={isSendReminder ? 'grey' : undefined}
                    ></Checkbox>
                    <Text style={generalStyles.tickBoxText}>Remind participants 1 day before deadline</Text>                  
                </Pressable>
            </View>

            <CancelCreateBar
                eventData={{
                title: eventTitle,
                startDate: startDate.toISOString().slice(0, 10),
                endDate: endDate.toISOString().slice(0, 10),
                timeRangeStart: startRange.toTimeString().slice(0, 8),
                timeRangeEnd: endRange.toTimeString().slice(0, 8),
                duration: 60, // TODO: 15min time slot picker
                responseDeadline: responseDeadline.toISOString(),
                singleDayAvail: isSingleDayAvail,
                blockAdminAvail: isAdminTimeBlock,
                sendReminder: isSendReminder
                }}
            />
        </View>
    );
}

export const unstable_settings = {
    presentation: "modal",
};