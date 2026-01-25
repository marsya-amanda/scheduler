import { View, TouchableWithoutFeedback, Text } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import type { Event } from '../../../types/event';
import { cardStyles } from './styles';
import FinalisedEventBlock from './finalised-event-block';
import PendingEventBlock from './pending-event-block';

type CardProps = {
    cardTitle: string,
    events: Event[]
}

export default function Card( { cardTitle, events } : CardProps) {
    const [expanded, setExpanded] = useState(false);

    const onCardPress = () => {
        setExpanded(!expanded);
    };

    // tip: choose the component in the beginning
    const EventBlockComponent = cardTitle === "Finalised" ? FinalisedEventBlock : PendingEventBlock;

    return (
        // view expands, include contain IFF expanded === true
        <View style={ cardStyles.cardContainer}>
            <TouchableWithoutFeedback onPress={onCardPress}>
                <View style={ cardStyles.titleContainer}>
                    <Text style={ cardStyles.cardTitle }>{cardTitle}</Text>

                    { expanded ?
                        (<Ionicons name='arrow-down' size={20} /> )
                        :   (<Ionicons name='arrow-up' size={20} />)
                    }
                </View>
            </TouchableWithoutFeedback>

            { expanded && (
                <View>
                    {events.map(event =>
                        <EventBlockComponent key={event.id} event={event} />
                    )}
                </View>
            )}
        </View>
    );
};