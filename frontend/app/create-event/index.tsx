import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from 'react';
import { useRouter } from "expo-router";
import CancelCreateBar from "../components/create-event/cancel-create-bar"
import Checkbox from 'expo-checkbox'
// import {ViewOptions} from "../components/view-options";

export default function CreateEventScreen() {
    const router = useRouter();
    const [text, setText] = useState('');
    const [isSingleDayAvail, setSingleDayAvail] = useState(false);
    const [isAdminTimeBlock, setAdminTimeBlock] = useState(false);
    const [isSendReminder, setSendReminder] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Create Event</Text>

            <View style={styles.section}>
                <Text style={styles.body}>Event Title*</Text>
                <TextInput
                    style={styles.textBox}
                    onChangeText={setText}
                    value={text}
                ></TextInput>
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Start Date*</Text>
                {/* Todo: add date input */}
                <Text style={styles.body}>End Date</Text>
                {/* Todo: add date input */}
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
                {/* Todo: add start and end time inputs */}
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
                {/* Todo: add duration input */}
            </View>

            <View style={styles.section}>
                <Text style={styles.body}>Response Deadline</Text>
                {/* Todo: add input box */}
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

            <CancelCreateBar></CancelCreateBar>


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
        marginTop: 10
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
        width: 150
    }
})

export const unstable_settings = {
    presentation: "modal",
};