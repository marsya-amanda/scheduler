import { Text, View, StyleSheet } from 'react-native';
import ViewOptions from '../components/view-options';
import DisplayEvent from '../components/home/display-event';
import React, { useState} from 'react';
import CreateEventButton from '../components/home/create-event-button';

export default function HomeScreen() {
    const [view, setView] = useState('list');

    const handleViewChange = (newView: string) => {
        setView(newView);
    };

    return (
        // pass callback function so ViewOptions can update 'view'
        // pass view to DE so DE knows which presentation to use
        <View style={ styles.parent }>
            <ViewOptions onViewChange={handleViewChange} />
            <DisplayEvent view={view}/> 
            <CreateEventButton />
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20
    }
})