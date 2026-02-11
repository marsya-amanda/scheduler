import React, {useState} from 'react';
import { useSharedValue } from 'react-native-reanimated';
import {scheduleOnRN} from 'react-native-worklets';
import { View, Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { styles } from './styles';
import Cell from './cell';
import GridLines from './grid-lines'

export default function SelectionZone() {
    const ids = Array.from({ length: 3}, (_, i) => Array.from({length: 32}, (_, j) => [i,j]));
    //const ids = Array.from({length: 96}, (_, i) => i);
    //const committed = useSharedValue<boolean[][]>(Array(3).fill(Array(32).fill(false)));
    //const temp = useSharedValue<Int8Array[]>(Array(3).fill(Array(32).fill(-1))); // -1 untouched, 0 unselected, 1 selected

    const committed = useSharedValue<boolean[][]>(Array.from({ length: 3}, (_, i) => Array.from({ length: 32 }, (i, j) => false)));
    const temp = useSharedValue<number[][]>(Array.from({ length: 3 }, (_, i) => Array.from({ length: 32 }, (i, j) => -1)));
    const [reloadState, forceReload] = useState(0);

    const TIMESLOT_WIDTH = Dimensions.get('window').width * .24;
    const TIMESLOT_HEIGHT = 15;
        
    const prevCoords = useSharedValue<number[]>([-1, -1]);

    const setPrevCoords = (x: number, y: number) => {
        'worklet';
        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);
        prevCoords.value = [x_box, y_box];
    }

    const newValue = (next: number[][], x_box: number, y_box: number) => {
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

        let next: number[][] = [...temp.value];

        const xMin = x_box < prevCoords.value[0] ? x_box : prevCoords.value[0];
        const xMax = x_box === xMin ? prevCoords.value[0] : x_box;
        const yMin = y_box < prevCoords.value[1] ? y_box : prevCoords.value[1];
        const yMax = y_box === yMin ? prevCoords.value[1] : y_box;

        for (let i = xMin; i <= xMax; i++) {
            for (let j = yMin; j <= yMax; j++) {
                next = newValue(next, i, j);
            }
        }

        temp.value = next;
    }

    const clearTemp = () => {
        'worklet';
        //temp.value = Array(3).fill(Array(32).fill(-1));
        //temp.value = Array.from({ length: 3 }, (_, i) => Array.from({ length: 32 }, (i, j) => -1)) // CRASHES THE FUCKING APP
        const next: number[][] = [];

        for (let i = 0; i < 3; i++) {
            const row: number[] = []
            for (let j = 0; j < 32; j++) {
                row.push(-1);
            }
            next.push(row);
        }

        temp.value = next;
    }

    const applyTemp = (x: number, y: number) => {
        'worklet';

        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);

        if (prevCoords.value[0] === x_box && prevCoords.value[1] === y_box) return;

        let next: number[][] = temp.value; // change initial
        next = newValue(next, x_box, y_box);

        temp.value = next;
    }

    const commit = () => {
        'worklet';

        const next = committed.value;

        for (let i = 0; i < next.length; i++) {
            for (let j = 0; j < next[i].length; j++) {
                if (temp.value[i][j] !== -1) {
                    next[i][j] = temp.value[i][j] === 1 ? true : false;
                }
            }
        }

        committed.value = next;

        clearTemp();
        prevCoords.value = [-1, -1];
        //scheduleOnRN(forceReload, reloadState + 1);
    }

    const pan = Gesture.Pan()
        .onBegin((e) => {
            // cant do console.log on pan omg
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
            console.log('tap'); // runs even on pan?
            clearTemp();
            applyTemp(e.x, e.y); 
        })
        .onEnd((e) => {
            commit();
        })

    const combined = Gesture.Exclusive(pan, tap);

    return (
        <View>
            <GridLines />
            <GestureDetector gesture={combined} >
            <View style={styles.selectionZone}>
                {ids.map((row) => 
                    row.map(([i, j]) => (
                        <Cell
                        key={`${i},${j}`}
                        id={[i, j]}
                        committed={committed}
                        temp={temp}
                        />
                    ))
                )}
            </View>
        </GestureDetector>
        </View>
        
    );
}