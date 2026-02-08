import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: 10
    },
    section: {
        width: '100%',
        alignItems: 'center',
        // marginTop: 30,
        gap: 10
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

export const confirmationStyles = StyleSheet.create({
    eventTitle: {
        fontFamily: "Georgia",
        fontSize: 30,
        fontStyle: "italic",
        textAlign: "center"
    },
    topBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    fieldTitle: {
        fontSize: 20,
        fontWeight: 600
    }
})

export const buttonBars = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-around",
        marginTop: 30
    },
    button: {
        backgroundColor: 'lightgrey',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15
    },
    buttonText: {
        fontWeight: 600
    }
})

export const notesBox = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        width: 280,
        height: 70,
        justifyContent: "space-between"
    }
})