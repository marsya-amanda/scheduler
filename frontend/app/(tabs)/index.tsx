import { Text, View, StyleSheet, SectionList, Button } from 'react-native';
import ViewOptions from '../components/view-options';
import CardHeader from '../components/home/event-display/card-header';
import FinalisedEventBlock from '../components/home/event-display/finalised-event-block';
import PendingEventBlock from '../components/home/event-display/pending-event-block';
import React, { useState, useEffect } from 'react';
import CreateEventButton from '../components/home/create-event-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DUMMY_EVENTS } from '../../constants/dummyEvents';
import { cardStyles } from '../components/home/event-display/styles';
import { fetchEvents } from '../../utils/event-api';
import type { Event } from '../types/event';

// const pendingEvents = DUMMY_EVENTS.filter(event => !event.status);
// const finalisedEvents = DUMMY_EVENTS.filter(event => event.status);

export default function HomeScreen() {
    const [view, setView] = useState('list');

    const [events, setEvents] = useState([] as Event[]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await fetchEvents();
            setEvents(data);
        } catch (err) {
            setError((err as Error).message ?? 'Network error');
        } finally {
            setLoading(false);
        }
    };

    // call on mount
    useEffect(() => {
        loadData();
    }, []);

    const pendingEvents = events.filter(event => !event.status);
    const finalisedEvents = events.filter(event => event.status)

    const handleViewChange = (newView: string) => {
        setView(newView);
    };

    const [expanded, setExpanded] = useState({
        Pending: false,
        Finalised: false,
    });

    const sections = [
        {
        title: 'Pending',
        data: expanded.Pending ? pendingEvents : [],
        },
        {
        title: 'Finalised',
        data: expanded.Finalised ? finalisedEvents : [],
        },
    ];

    if (loading) {
        return <Text>Loading events...</Text>;
    }
    if (error) {
        return (
            <View>
                <Text>failed. Try again</Text>
                <Text>{error}</Text>
                <Button title='retry' onPress={loadData} />
            </View>
        )
    }

    return (
        // pass callback function so ViewOptions can update 'view'
        // pass view to DE so DE knows which presentation to use
        
        <SafeAreaView style={ styles.parent }>
            <ViewOptions onViewChange={handleViewChange} />
            
            { view === 'list' ? (
                <View style={cardStyles.cardContainer}>
                    {/* <Card cardTitle={ 'Pending' } events={ pendingEvents } />
                    <Card cardTitle={ 'Finalised' } events={ finalisedEvents } /> */}

                    <SectionList
                        sections={sections}
                        keyExtractor={(item) => item.id}
                        stickySectionHeadersEnabled
                        renderSectionHeader={({ section }) => (
                        <CardHeader
                            title={section.title}
                            expanded={expanded[section.title as keyof typeof expanded]}
                            onPress={() =>
                            setExpanded((prev) => ({
                                ...prev, 
                                [section.title]: !prev[section.title as keyof typeof expanded],
                            }))
                            }
                        />
                        )}
                        renderItem={({ item, section }) =>
                        section.title === 'Pending' ? (
                            <PendingEventBlock event={item} />
                        ) : (
                            <FinalisedEventBlock event={item} />
                        )
                        }
                        ListEmptyComponent={<Text>No events here!</Text>}
                    />
                </View> 
            ) :
            (
                <Text>Cal view</Text>
            )}
            

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
    }
})