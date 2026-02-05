import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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