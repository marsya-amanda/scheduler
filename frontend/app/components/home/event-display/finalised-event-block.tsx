import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { eventBlockStyles } from './styles';
import type { Event } from '../../../types/event';
import { deleteEvent } from '../../../../utils/event-api'

type FinalisedEventBlockProps = {
    event: Event,
    onPress: () => void;
}


export default function FinalisedEventBlock( { event, onPress } : FinalisedEventBlockProps ) {
    const onDelete = async (id: string) => {
        deleteEvent(id);
        onPress();
    }

    return (
        <View>
            <Pressable style = {eventBlockStyles.container}>
                <View style={eventBlockStyles.eventTitle}>
                    <Text style={eventBlockStyles.titleText}>{ event.title }</Text>
                    <Pressable style={{}}>
                        <Ionicons 
                            name={event.pinned ? 'pin' : 'pin-outline'} 
                            size={16} 
                            accessible={true} 
                            accessibilityLabel="Pin event"
                            accessibilityRole="button"
                        />
                    </Pressable> 
                </View>
                
                <View style={eventBlockStyles.eventDetails}>
                    <Text style = {eventBlockStyles.detailsText}>Response Rate: { event.numAvailable }/{ event.numParticipants }</Text>
                    
                    {event.bestAvailability && (
                        <Text style={eventBlockStyles.detailsText}>Best availability: { event.bestAvailability }</Text>
                    )}
                    
                </View>

                <View style={eventBlockStyles.bottomContainer}>
                    <View style={eventBlockStyles.tagContainer}>
                        { event.tag && (<Text style={eventBlockStyles.tagText}>
                            { event.tag }
                        </Text>
                        )}
                    </View>

                    <View style={eventBlockStyles.actionsContainer}>

                        <Pressable style={eventBlockStyles.actionsButton}>
                            <Ionicons 
                                name='link-outline' 
                                size={16} 
                                accessible={true} 
                                accessibilityLabel="Share event link"
                                accessibilityRole="button"
                            />
                        </Pressable>

                        <Pressable style={eventBlockStyles.actionsButton}>
                            <Ionicons 
                                name='pencil-outline' 
                                size={16} 
                                accessible={true} 
                                accessibilityLabel="Edit event details"
                                accessibilityRole="button"
                            />
                        </Pressable>

                        <Pressable style={eventBlockStyles.actionsButton} onPress={() => onDelete(event.id)}> 
                            <Ionicons 
                                name='trash-bin-outline' 
                                size={16} 
                                accessible={true} 
                                accessibilityLabel="Delete event"
                                accessibilityRole="button"
                            />
                        </Pressable>
                    </View>
                </View>
                    
            </Pressable>
        </View>
    );
};