import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function EventBlock() {
    return (
        <View style = {styles.container}>
            <View style={styles.eventTitle}>
                <Text style={styles.titleText}>emma bday 123 bonanza</Text>
                <Pressable style={{width: '10%', bottom: '-5%', left: '4%'}}>
                    <Ionicons name='link' size={16} />
                </Pressable>
            </View>

            <View style={styles.eventDetails}>
                <Text style = {styles.detailsText}>participants: 3/4</Text>
                <Text style = {styles.detailsText}>best availability: may 5th, 2026</Text>
            </View>

            <View style={styles.editContainer}>
                <Pressable style={styles.editButton}>
                    <Ionicons name='pencil' size={16} />
                </Pressable>
                <Pressable style={styles.editButton}>
                    <Ionicons name='trash' size={16} />
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
        padding: '2%',
        marginBottom: '5%'
    },
    eventTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 24,
        width: '90%'
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
        justifyContent: 'flex-end',
        
    },
    editButton: {
        alignSelf: 'flex-end',
        fontSize: 12,
        borderColor: 'black',
        borderWidth: 0,
        marginTop: '3%',
        marginRight: '2%',
        padding: '1%'
    }
})