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
        paddingHorizontal: 5,
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
        paddingHorizontal: 20,
        paddingVertical: 10
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
        marginTop: 20
    },
    button: {
        backgroundColor: 'lightgrey',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingVertical: 7,
        paddingHorizontal: 15
    },
    buttonText: {
        fontWeight: 600
    }
})

export const notesBox = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        borderColor: "black",
        width: 280,
        height: 70,
        justifyContent: "space-between",
        padding: 3
    },
    tagSelectionContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    tagText: {
        fontSize: 10
    },
    tag: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 1,
        paddingHorizontal: 5,
        marginHorizontal: 3
    },
    tagSelected: {
        backgroundColor: 'lightgrey'
    }
})