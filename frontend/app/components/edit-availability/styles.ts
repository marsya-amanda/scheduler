import { StyleSheet, Dimensions } from 'react-native';

export const editAvailabilityStyles = StyleSheet.create({
    parent: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: Dimensions.get('window').width * 0.1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})