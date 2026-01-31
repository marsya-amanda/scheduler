import { View, Text, Button } from 'react-native';
import  { editAvailabilityStyles } from '../components/edit-availability/styles';
import { useRouter } from 'expo-router';
import ViewOptions from '../components/view-options';
import { useState } from 'react';
import DateBlock from '../components/edit-availability/date-block';

const DUMMY = {
    id: '53234329',
    title: 'mt wilson',
    startDate: '31-01-2026',
    endDate: '14-02-2026',
}

export default function EditAvailabilityScreen( ) {
    const router = useRouter();
    const [view, setView] = useState('list');
    const DUMMY_DATE = '5 jan'

    const handleViewChange = (newView: string) => {
        setView(newView);
    }

    return (
        <View style={editAvailabilityStyles.parent}>
            <ViewOptions onViewChange={handleViewChange} />
            <Text style={editAvailabilityStyles.title}>
                Your Availability
            </Text>
            
            <DateBlock date={DUMMY_DATE} />

            <View>
                <Button title='Home' onPress={() => router.push('/(tabs)')} />
            </View>
            
        </View>
    );
}