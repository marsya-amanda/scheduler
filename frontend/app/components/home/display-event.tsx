import { View, Text } from 'react-native';
import EventBlock from './event-display/event-block';

type DisplayEventProps = {
    view: string;
};

export default function DisplayEvent({ view }: DisplayEventProps) {
    return (
        <View>
            {view === "list" ? (
                <EventBlock />
            ) : (
                <Text>cal view</Text>
            )}
        </View>
    );
}