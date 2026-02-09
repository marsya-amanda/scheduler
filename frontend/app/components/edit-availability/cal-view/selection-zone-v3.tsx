import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { View, Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { styles } from './styles';
import AnimatedTimeSelectBlock from './animated-time-select-block';

export default function SelectionZoneV3() {
    const ids = Array.from({ length: 3}, (_, i) => Array.from({length: 32}, (_, j) => [i,j]));
    //const ids = Array.from({length: 96}, (_, i) => i);
    const committed = useSharedValue<boolean[][]>(Array(3).fill(Array(32).fill(false)));
    const temp = useSharedValue<Int8Array[]>(Array(3).fill(Array(32).fill(-1))); // -1 untouched, 0 unselected, 1 selected

    const TIMESLOT_WIDTH = Dimensions.get('window').width * .24;
    const TIMESLOT_HEIGHT = 15;
        
    const prevCoords = useSharedValue<number[]>([-1, -1]);

    const setPrevCoords = (x: number, y: number) => {
        'worklet';
        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);
        prevCoords.value = [x_box, y_box];
    }

    const newValue = (next: Int8Array[], x_box: number, y_box: number) => {
        'worklet';

        if (next[x_box][y_box] === -1) {
            next[x_box][y_box] = committed.value[x_box][y_box] ? 0 : 1; // force deselect if committed value is selected
        } else {
            next[x_box][y_box] = next[x_box][y_box] === 1 ? 0 : 1;
        }
        return next;
    }

    const boxSelect = (x: number, y: number) => {
        'worklet';

        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);

        if (prevCoords.value[0] === x_box && prevCoords.value[1] === y_box) return;

        let next: Int8Array[] = [...temp.value];

        if (x_box > prevCoords.value[0] && y_box > prevCoords.value[1]) {
            // diagonal right-bottom
            for (let i = prevCoords.value[0]; i <= x_box; i++) {
                for (let j = prevCoords.value[1]; j <= y_box; j++) {
                    next = newValue(next, x_box, y_box);
                }
            }
        } else if (x_box > prevCoords.value[0] && y_box < prevCoords.value[1]) {
            // diagonal right-top
            for (let i = prevCoords.value[0]; i <= x_box; i++) {
                for (let j = y_box; j <= prevCoords.value[1]; j++) {
                    next = newValue(next, x_box, y_box);
                }
            }
        } else if (x_box < prevCoords.value[0] && y_box > prevCoords.value[1]) {
            // diagonal left-bottom
            for (let i = x_box; i <= prevCoords.value[0]; i++) {
                for (let j = prevCoords.value[1]; j <= y_box; j++) {
                    next = newValue(next, x_box, y_box);
                }
            }
        } else if (x_box < prevCoords.value[0] && y_box < prevCoords.value[1]) {
            // diagonal left-top
            for (let i = x_box; i <= prevCoords.value[0]; i++) {
                for (let j = y_box; j <= prevCoords.value[1]; j++) {
                    next = newValue(next, x_box, y_box);
                }
            }
        }

        temp.value = next;
    }

    const clearTemp = () => {
        'worklet';
        temp.value = Array(3).fill(Array(24).fill(-1));
    }

    const applyTemp = (x: number, y: number) => {
        'worklet';

        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);

        if (prevCoords.value[0] === x_box && prevCoords.value[1] === y_box) return;

        const next: Int8Array[] = newValue([...temp.value], x_box, y_box); // change initial

        temp.value = next;
    }

    const commit = () => {
        'worklet';

        const next = [...committed.value];

        for (let i = 0; i < next.length; i++) {
            for (let j = 0; j < next.length; j++) {
                if (temp.value[i][j] !== -1) {
                    next[i][j] = temp.value[i][j] === 1 ? true : false;
                }
            }
        }

        committed.value = next;

        console.log('committed: ', committed.value);
        console.log('temp: ', temp.value);
        clearTemp();
        prevCoords.value = [-1, -1];
    }

    const pan = Gesture.Pan()
        .onBegin((e) => {
            setPrevCoords(e.x, e.y);
            clearTemp();
            applyTemp(e.x, e.y);
        })
        .onTouchesMove((e) => {
            const x = e.changedTouches[0].x;
            const y = e.changedTouches[0].y;
            boxSelect(x, y);
        })
        .onEnd((e) => {
            commit();
        });

    const tap = Gesture.Tap()
        .onBegin((e) => {
            applyTemp(e.x, e.y);
        })
        .onEnd((e) => {
            commit();
        })

    const combined = Gesture.Exclusive(pan, tap);

    return (
        <GestureDetector gesture={combined} >
            <View style={styles.selectionZone}>
                {ids.map((row) =>
                    row.map(([i, j]) => (
                        <AnimatedTimeSelectBlock
                        key={`${i},${j}`}
                        id={[i, j]}
                        committed={committed}
                        temp={temp}
                        />
                    ))
                )}
            </View>
        </GestureDetector>
    );
}