import { View, Text, Pressable, FlatList, Dimensions } from 'react-native';

export default function AvailabilityText() {
    interface TimeType {
        id: number,
        time: string
    }

    const BEST_TIMES: TimeType[] = [
        {id: 1, time: '3 Apr 13:00 PM (Wed) -- 4/5 ppl'}, 
        {id: 2, time: '5 Apr 9:00 AM (Fri) -- 4/5 ppl'},
        {id: 3, time: '4 Apr 8:00 PM (Thu) -- 3/5 ppl'}
    ]

    const PARTICIPANTS: string[] = ['Jack Smith', 'Sara', 'Dale', 'Caroline', 'Ainsly', 'Fadhilah', 'Alex', 'Jonh Ho', 'Anna', 'Netflix']

    return (
        <View style={{display:'flex', alignItems: 'center', gap: 20, paddingTop: 10, paddingBottom: 10}}>

            <View>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                    Best Available Time:
                </Text>

                <Text style={{textAlign: 'center', color: 'darkgrey'}}>
                    Click to confirm event time
                </Text>
                
                {BEST_TIMES.map((item) => (
                    <Text key={item.id}>
                        {item.id}. {item.time}
                    </Text>
                ))}
            </View>

            <View>
                <Text style={{textAlign: 'center', fontWeight: 'bold', paddingBottom: 10}}>
                    Participants:
                </Text>
                <View style={{padding: 10, gap: 10, width: Dimensions.get('window').width * .7, backgroundColor: 'lightgray', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {PARTICIPANTS.map((name) => (
                        <Text key={name}>{name}</Text>
                    ))}
                </View>
            </View>

            <View>
                <Text style={{fontWeight: 'bold'}}>
                    Response deadline:
                </Text>
                <Text>
                    1 Apr 12:00 AM (Mon)
                </Text>
            </View>

        </View>
    );
}