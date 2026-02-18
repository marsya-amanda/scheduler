import  { editAvailabilityStyles } from './styles';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { updateEvent } from '../../../utils/event-api';
import { Event } from '../../types/event'

type Props = {
    event: Partial<Event>,
    onConfirm: ((confirm: boolean) => void),
    availabilityCal: boolean[][]
}

export default function ActionButtons({event, onConfirm, availabilityCal}: Props) {
    const router = useRouter();

    useEffect(() => {
        console.log('cal change: ', availabilityCal);
    }, [availabilityCal]) // doesnt call

    const pressConfirm = () => {
        if (onConfirm) onConfirm(true);
        event.timeslotMatrix = availabilityCal.map(row => [...row]);

        if (event.id) updateEvent(event.id, event);
        router.back();
    }

    const pressHome = () => {
        router.back();
    }

    return (
        <View style={editAvailabilityStyles.actionButtonContainer}>

            <Pressable onPress={pressHome} 
                style={editAvailabilityStyles.actionButton}>
                <Text style={editAvailabilityStyles.actionText}>
                    Home
                </Text>
            </Pressable>
            
            <Pressable onPress={pressConfirm}
                style={editAvailabilityStyles.actionButton}>
                <Text style={editAvailabilityStyles.actionText}>
                    Confirm
                </Text>
            </Pressable>
        </View>
    );
}