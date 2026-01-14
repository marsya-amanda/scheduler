import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function EventBlock() {
    return (
        <View style = {styles.container}>
            <View style={styles.eventTitle}>
                <Text style={styles.titleText}>emma bday</Text>
                <Pressable>
                    <Ionicons name='ellipsis-vertical' size={14}></Ionicons>
                </Pressable>
            </View>

            <View style={styles.eventDetails}>
                <Text style = {styles.detailsText}>participants: 3/4</Text>
                <Text style = {styles.detailsText}>best availability: may 5th, 2026</Text>
            </View>

            <View style={styles.editContainer}>
                <Pressable style={styles.editButton}>
                    <Text>share link</Text>
                </Pressable>
                <Pressable style={styles.editButton}>
                    <Text>edit my availability</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '2%'
    },
    eventTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 24
    },
    eventDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    detailsText: {
        fontSize: 16,
        lineHeight: 20
    },
    editContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    editButton: {
        alignSelf: 'flex-end',
        fontSize: 12,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '3%',
        padding: '1%'
    }
})