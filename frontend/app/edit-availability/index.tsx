import { View, Text, Button } from 'react-native';
import  { editAvailabilityStyles } from '../components/edit-availability/styles';
import { useRouter } from 'expo-router';
import ViewOptions from '../components/view-options';
import { useState } from 'react';


export default function EditAvailabilityScreen( ) {
    const router = useRouter();
    const [view, setView] = useState('list');

    const handleViewChange = (newView: string) => {
        setView(newView);
    }

    return (
        <View style={editAvailabilityStyles.parent}>
            <ViewOptions onViewChange={handleViewChange} />
            <View>
                <Text>hello</Text>
            </View>
            
            <View>
                <Button title='cancel' onPress={() => router.push('/(tabs)')} />
            </View>
            
        </View>
    );
}