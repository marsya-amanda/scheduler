import { View, Text, FlatList } from 'react-native';
import  { editAvailabilityStyles } from '../components/edit-availability/styles';
import ViewOptions from '../components/view-options';
import { useState } from 'react';
import AvailabilityBlock from '../components/edit-availability/availability-block';
import ActionButtons from '../components/edit-availability/action-button'
import Calendar from '../components/edit-availability/cal-view/calendar';

const DUMMY_DATES: Date[] = [
    new Date('2024-01-05'),
    new Date('2024-01-18'),
    new Date('2024-02-02'),
    new Date('2024-02-14'),
    new Date('2024-03-01'),
    new Date('2024-03-21'),
    new Date('2024-04-03'),
    new Date('2024-04-19'),
    new Date('2024-05-06'),
    new Date('2024-05-20'),
    new Date('2024-06-04'),
    new Date('2024-06-18'),
    new Date('2024-07-02'),
    new Date('2024-07-17'),
    new Date('2024-08-01'),
    new Date('2024-08-15'),
    new Date('2024-09-03'),
    new Date('2024-09-23'),
    new Date('2024-10-10'),
    new Date('2024-11-01'),
];


export default function EditAvailabilityScreen( ) {
    const [view, setView] = useState('calendar');

    const handleViewChange = (newView: string) => {
        setView(newView);
    }

    return (
        <View style={editAvailabilityStyles.parent}>
            <ViewOptions givenView={view} onViewChange={handleViewChange} />

            <Text style={editAvailabilityStyles.title}>
                Your Availability
            </Text>
            
            {/* {DUMMY_DATES.map(date => (
                <AvailabilityBlock key={date.getTime()} date={date} />
            ))} */}

            { view === 'list' ? 
            ( 
                <View style={editAvailabilityStyles.content}>
                    <FlatList
                        data={DUMMY_DATES}
                        keyExtractor={(item) => item.toISOString()}
                        renderItem={({item}) => <AvailabilityBlock date={item} />}
                    />
                </View>
            )
            :
            (
                <Calendar />
            )
            }

            <ActionButtons />
        </View>
    );
}