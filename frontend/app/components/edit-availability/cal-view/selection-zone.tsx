import TimeBlock from './time-block';
import { View, Dimensions } from 'react-native';
import { styles } from './styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { CoordsToID } from '../../../../utils/coords-to-id';

export default function SelectionZone() {
    const items: { id: number }[] = Array.from({ length: 24 }, (_, i) => ({ id: i + 1 }));

    const TIMESLOT_WIDTH = Dimensions.get('window').width * .24;
    const TIMESLOT_HEIGHT = 15;
    const SELECTIONZONE_XWIDTH = 3;
    const SELECTIONZONE_YHEIGHT = 480 / TIMESLOT_HEIGHT;

    const getCoords = (x: number, y: number) => {
        'worklet'; // signals to compiler to serialise and run this func on UI thread. MANDATORY
        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);
        return {x_box, y_box};
    }

    const pan = Gesture.Pan().
            onStart((e) => {
                console.log('panning');
                
                if (e.numberOfPointers === 1) { 
                    const {x_box, y_box} = getCoords(e.x ?? e.absoluteX, e.y ?? e.absoluteY);

                    console.log('box pos: ', x_box, y_box);
                }
            }).
            onTouchesMove((e) => {
                if (e.numberOfTouches === 1) { 
                    const {x_box, y_box} = getCoords(e.changedTouches[0].x, e.changedTouches[0].y)

                    console.log('box pos: ', x_box, y_box)

                }
            }).
            onEnd(() => {
                console.log('stopped panning');
            });

    return (
        <GestureDetector gesture={pan} >
            <View style={styles.selectionZone}>
                {items.map(({id}) => (
                    <TimeBlock key={id} />
                ))}
            </View>
        </GestureDetector>
        
    );
}

/* 
Gesture Pan Event Structure: 

{
    "allTouches": [{
        "absoluteX": 111.33333333333333, 
        "absoluteY": 347, 
        "id": 0, 
        "x": 45.99999936421712, 
        "y": 117
    }], 
    "changedTouches": [{
        "absoluteX": 111.33333333333333, 
        "absoluteY": 347, 
        "id": 0, 
        "x": 45.99999936421712, 
        "y": 117
    }], 
    "eventName": "onGestureHandlerEvent", 
    "eventType": 2, 
    "handlerTag": 1, 
    "numberOfTouches": 1, 
    "pointerType": 0, 
    "state": 4, 
    "target": 512
}

Interpret:
- doesn't matter allTouches or changedTouches - allTouches track multi-finger, but we only take one in
- test multiple fingers later on
- only register numberOfTouches == 1
*/