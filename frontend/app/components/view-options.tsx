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
            <Pressable style= {[ styles.option, view === 'list' && styles.optionActive, styles.optionList ]} onPress = {onListPress}>
                <Text>List</Text>
            </Pressable>
            <Pressable style = {[styles.option, view === 'calendar' && styles.optionActive, styles.optionCalendar ]} onPress = { onCalendarPress }>
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
        width: 200,
        marginBottom: 10,
        height: 30
    },
    option: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 2
    },
    optionActive: {
        backgroundColor: 'lightgrey',
    },
    optionList: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    optionCalendar: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    text: {
        fontSize: 12,
        fontFamily: 'sans-serif'
    }
})