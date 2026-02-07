import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({  
    view: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width * .9,
        height: 520,
        overflowY: 'scroll',
        borderWidth: 0,
    },
    selectionZone: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        height: 480,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        borderWidth: 0,

    },
    hourBar: {
        width: '13%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 0
    },
    dayBlock: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    dateHeader: {
        height: 40,
        width: Dimensions.get('window').width * .72,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    timeBlock: {
        width: Dimensions.get('window').width * .24,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
    },
    timeSubBlock: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey'
    },
    timeSelectBlock: {
        height: 15
    },
    nextBar: {
        height: '100%',
        width: '6%',
        display: 'flex',
        alignItems: 'center',
        borderWidth: 0
    },
    timezoneText: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
    },
    hourContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 60
    },
    hourText: {
        fontSize: 14,
        bottom: 8
    },
    selected: {
        backgroundColor: 'lightblue'
    },
    unselected: {
        backgroundColor: 'none',
    },
});