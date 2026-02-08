import TimeBlock from './time-block';
import { View, Dimensions } from 'react-native';
import { styles } from './styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import React, {useState} from 'react';
import { scheduleOnRN } from 'react-native-worklets';
import { useSharedValue } from 'react-native-reanimated';

// make this into memo
export default function SelectionZone() {
    type Bool4 = [boolean, boolean, boolean, boolean];

    const items: { id: number }[] = Array.from({ length: 24 }, (_, i) => ({ id: i }));
    const [selected, setSelected] = useState<boolean[]>(
        () => Array(96).fill(false)
    );

    const TIMESLOT_WIDTH = Dimensions.get('window').width * .24;
    const TIMESLOT_HEIGHT = 15;
    const SELECTIONZONE_YHEIGHT: number = 480 / TIMESLOT_HEIGHT;

    const getCoords = (x: number, y: number) => {
        'worklet'; // signals to compiler to serialise and run this func on UI thread. MANDATORY
        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);
        return {x_box, y_box};
    }

    const getID = (x: number, y: number) => {
        'worklet';
        const {x_box, y_box} = getCoords(x, y);
        return x_box * SELECTIONZONE_YHEIGHT + y_box;
    }

    const [prevID, setPrevID] = useState(-1);
    const toggleAtID = (index: number) => {
        if (index === prevID) return;
        setSelected(prev => {
            const next = [...prev];
            next[index] = !next[index];
            setPrevID(index);
            return next;
        })
    }

    // method2
    const prevID2 = useSharedValue(-1);
    const selected2 = useSharedValue(Array(96).fill(false));
    const toggleAtID2 = (index: number) => {
        'worklet';
        if(index === prevID2.value) return;
        selected2.value[index] = !selected2.value[index];
        prevID2.value = index;
    }

    const pan = Gesture.Pan().
            onBegin((e) => {
                if (e.numberOfPointers !== 1) return;
                const id = getID(e.x, e.y);

                scheduleOnRN(toggleAtID, id);
                //toggleAtID2(id);
            }).
            onTouchesMove((e) => {
                if (e.numberOfTouches !== 1) return;

                const id = getID(e.changedTouches[0].x, e.changedTouches[0].y);
                scheduleOnRN(toggleAtID, id);
                //toggleAtID2(id);
            }).
            onEnd((e) => {
                scheduleOnRN(setPrevID, -1);
                //prevID2.value = -1;
            });

    const tap = Gesture.Tap().
            onEnd((e, success) => {
                if (success) {
                    scheduleOnRN(setPrevID, -1);
                    //prevID2.value = -1;
                }
            })

    const combined = Gesture.Exclusive(tap, pan);

    return (
        <GestureDetector gesture={combined} >
            <View style={styles.selectionZone}>
                {items.map(({id}) => (
                    <TimeBlock key={id} blockID={id} ids={selected.slice(id * 4, id * 4 + 4) as Bool4}/>
                ))}
            </View>
        </GestureDetector>
        
    );
}