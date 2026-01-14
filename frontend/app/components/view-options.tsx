import { Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

type ViewOptionsProps = {
    // create a prop which is a function.
    onViewChange?: (view: string) => void;
};

const ViewOptions: React.FC<ViewOptionsProps> = ({ onViewChange }) => {
    const [view, setView] = useState('list');

    const onListPress = () => {
        setView('list');
        // func called when view change
        onViewChange && onViewChange('list');
    };

    const onCalendarPress = () => {
        setView('calendar');
        onViewChange && onViewChange('calendar');
    };

    return (
        <View style={ styles.container}>
            <Pressable style= {[ styles.option, view === 'list' && styles.optionActive ]} onPress = {onListPress}>
                <Text>List</Text>
            </Pressable>
            <Pressable style = {[styles.option, view === 'calendar' && styles.optionActive ]} onPress = { onCalendarPress }>
                <Text>Calendar</Text>
            </Pressable>
        </View>
    );
};

export default ViewOptions;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        marginBottom: '10%'
    },
    option: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: '1%'
    },
    optionActive: {
        backgroundColor: '#dbdbdb',
    },
    text: {
        fontSize: 12,
        fontFamily: 'sans-serif'
    }
})