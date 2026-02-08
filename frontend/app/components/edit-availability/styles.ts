import { StyleSheet, Dimensions } from 'react-native';

export const editAvailabilityStyles = StyleSheet.create({
    parent: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: 47,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        overflowY: 'scroll'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: Dimensions.get('window').height * .72,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    dateBlockContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        width: Dimensions.get('window').width - 20,
        overflowX: 'hidden'
    },
    dateBlockHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    dateHeaderText: {
        fontWeight: 'bold'
    },
    addButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginBottom: 20
    },
    timePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    timePickerButton: {
        padding: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    actionButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    actionButton: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
    actionText: {
        fontWeight: 'bold'
    },
    checked: {
        color: 'black',
        borderColor: 'black'
    },
    unchecked: {
        color: 'darkgrey',
        borderColor: 'darkgrey'
    }
})