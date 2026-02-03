import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({  
    selectionZone: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width * .9,
        height: 520,
        overflowY: 'scroll',
        borderWidth: 1
    },
    hourBar: {
        width: '13%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1
    },
    dayBlock: {
        width: '29%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    dateHeader: {
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeBlock: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
    },
    timeSubBlock: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey'
    }
});