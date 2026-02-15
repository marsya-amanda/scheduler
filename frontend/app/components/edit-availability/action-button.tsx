import  { editAvailabilityStyles } from './styles';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { updateEvent } from '../../../utils/event-api';
import { Event } from '../../types/event'

type Props = {
    event: Event,
    onConfirm: ((confirm: boolean) => void) | null;
    availabilityCal: boolean[][]
}

export default function ActionButtons({event, onConfirm, availabilityCal}: Props) {
    const router = useRouter();

    const pressConfirm = () => {
        if (onConfirm) onConfirm(true);
        console.log(availabilityCal);
        event.timeslotMatrix = availabilityCal.map((row) => [...row]);
        console.log(event.timeslotMatrix)
        //updateEvent(event.id, event);
        router.back();
    }

    return (
        <View style={editAvailabilityStyles.actionButtonContainer}>

            <Pressable onPress={() => router.push('/(tabs)')} 
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