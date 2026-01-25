import { StyleSheet, Dimensions } from 'react-native';

export const eventBlockStyles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.8,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        marginBottom: '5%',
        borderRadius: 20
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
    bottomContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    tagContainer: {
        width: '20%',
        borderRadius: 20,
        borderWidth: 1, 
        borderColor: 'black'
    },
    tagText: {
        fontSize: 16,
        lineHeight: 16
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    actionsButton: {
        fontSize: 12,
        borderColor: 'black',
        marginLeft: '1%'
    }
})