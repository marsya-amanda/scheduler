import TimeBlock from './time-block';
import { View } from 'react-native';
import { styles } from './styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function SelectionZone() {
    const items: { id: number }[] = Array.from({ length: 24 }, (_, i) => ({ id: i + 1 }));

    const pan = Gesture.Pan().
            onStart(() => {
                console.log('panning');
            }).
            onEnd(() => {
                console.log('stopped panning')
            });

    return (
        <GestureDetector gesture={pan}>
            <View style={styles.selectionZone}>
                {items.map(({id}) => (
                    <TimeBlock key={id} />
                ))}
            </View>
        </GestureDetector>
        
    );
}