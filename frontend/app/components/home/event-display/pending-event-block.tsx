import { eventBlockStyles } from './styles';
import type { Event } from '../../../types/event';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PendingEventBlockProps = {
    event: Event;
}

export default function PendingEventBlock( { event } : PendingEventBlockProps ) {
    return (
            <View>
                <Pressable style = {eventBlockStyles.container}>
                    <View style={eventBlockStyles.eventTitle}>
                        <Text style={eventBlockStyles.titleText}>{ event.title }</Text>
                        <Pressable style={{width: '10%', bottom: '-5%', left: '4%'}}>
                            <Ionicons 
                                name='pin-outline' 
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
    
                            <Pressable style={eventBlockStyles.actionsButton}>
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