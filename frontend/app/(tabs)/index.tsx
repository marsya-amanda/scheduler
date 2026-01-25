import { Text, View, StyleSheet, FlatList } from 'react-native';
import ViewOptions from '../components/view-options';
import Card from '../components/home/event-display/card';
import React, { useState} from 'react';
import CreateEventButton from '../components/home/create-event-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DUMMY_EVENTS } from '../../constants/dummyEvents';

const pendingEvents = DUMMY_EVENTS.filter(event => !event.status);
const finalisedEvents = DUMMY_EVENTS.filter(event => event.status);

export default function HomeScreen() {
    const [view, setView] = useState('list');

    const handleViewChange = (newView: string) => {
        setView(newView);
    };

    return (
        // pass callback function so ViewOptions can update 'view'
        // pass view to DE so DE knows which presentation to use
        
        <SafeAreaView style={ styles.parent }>
            <ViewOptions onViewChange={handleViewChange} />
            
            { view === 'list' ? (
                <View>
                    <Card cardTitle={ 'Pending' } events={ pendingEvents } />
                    <Card cardTitle={ 'Finalised' } events={ finalisedEvents } />
                </View> 
            ) :
            (
                <Text>Cal view</Text>
            )};
            

            <CreateEventButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 2,
    },
    eventcontainer: {
        flex: 1,
        display: 'flex',
        width: '100%'
    },
    text: {
        fontSize: 20
    }
})