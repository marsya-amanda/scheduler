import  { editAvailabilityStyles } from './styles';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function ActionButtons() {
    const router = useRouter();

    return (
        <View style={editAvailabilityStyles.actionButtonContainer}>

            <Pressable onPress={() => router.push('/(tabs)')} 
                style={editAvailabilityStyles.actionButton}>
                <Text style={editAvailabilityStyles.actionText}>
                    Home
                </Text>
            </Pressable>
            
            <Pressable onPress={() => router.push('/(tabs)')}
                style={editAvailabilityStyles.actionButton}>
                <Text style={editAvailabilityStyles.actionText}>
                    Confirm
                </Text>
            </Pressable>
        </View>
    );
}