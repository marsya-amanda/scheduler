import TimeBlock from './time-block';
import { View, Dimensions } from 'react-native';
import { styles } from './styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import React from 'react';
import { useSharedValue } from 'react-native-reanimated';

// make this into memo
export default function SelectionZone2() {
    // shared values are shared between UI and normal JS thread (dont know why)
    const ids: number[] = Array.from({ length: 24}, (_, i) => i);
    const committedSelection = useSharedValue<boolean[]>(Array(96).fill(false));
    
    // -1 = untouched, 0 = force deselect, 1 = force select
    const workingSelection = useSharedValue<Int8Array>(
        new Int8Array(96).fill(-1)
    );

    const TIMESLOT_WIDTH = Dimensions.get('window').width * .24;
    const TIMESLOT_HEIGHT = 15;
    const SELECTIONZONE_YHEIGHT: number = 480 / TIMESLOT_HEIGHT;
    const SELECTIONZONE_XWIDTH: number = 3;
    
    const getCoords = (x: number, y: number) => {
        'worklet';
        const x_box = Math.floor(x / TIMESLOT_WIDTH);
        const y_box = Math.floor(y / TIMESLOT_HEIGHT);
        return {x_box, y_box};
    }
    
    const getID = (x: number, y: number) => {
        'worklet';
        const {x_box, y_box} = getCoords(x, y);
        return x_box * SELECTIONZONE_YHEIGHT + y_box;
    }
    
    const lastID = useSharedValue(-1);
    const lastCoords = useSharedValue([-1, -1]);
    const applyTemp = (x: number, y: number) => {
        'worklet';
        const id = getID(x, y);

        if (id === lastID.value) return;
        lastID.value = id;

        const next = new Int8Array(workingSelection.value); // need to copy so can reassign value and react re-renders

        if (next[id] === -1) {
            next[id] = committedSelection.value[id] ? 0 : 1;
        } else {
            next[id] = -1;
        }

        workingSelection.value = next;
    };

    const boxSelect = (x: number, y: number) => {
        'worklet';
        const {x_box, y_box} = getCoords(x, y);
        if (x_box < lastCoords.value[0] && y_box < lastCoords.value[1]) {
            for (let i = x_box; i < lastCoords.value[0]; i++) {
                for (let j = y_box; j < lastCoords.value[1]; j++) {
                    const id = i * SELECTIONZONE_XWIDTH + j;
                    const next = new Int8Array(workingSelection.value); // need to copy so can reassign value and react re-renders

                    if (next[id] === -1) {
                        next[id] = committedSelection.value[id] ? 0 : 1;
                    } else {
                        next[id] = -1;
                    }

                    workingSelection.value = next;
                }
            }
        } else if (x_box < lastCoords.value[0] && y_box > lastCoords.value[1]) {
            for (let i = x_box; i < lastCoords.value[0]; i++) {
                for (let j = lastCoords.value[1]; j < y_box; j++) {
                    const id = i * SELECTIONZONE_XWIDTH + j;
                    const next = new Int8Array(workingSelection.value); // need to copy so can reassign value and react re-renders

                    if (next[id] === -1) {
                        next[id] = committedSelection.value[id] ? 0 : 1;
                    } else {
                        next[id] = -1;
                    }

                    workingSelection.value = next;
                }
            }
        } else if (x_box > lastCoords.value[0] && y_box < lastCoords.value[1]) {
            for (let i = lastCoords.value[0]; i < x_box; i++) {
                for (let j = y_box; j < lastCoords.value[1]; j++) {
                    const id = i * SELECTIONZONE_YHEIGHT + j;
                    const next = new Int8Array(workingSelection.value); // need to copy so can reassign value and react re-renders

                    if (next[id] === -1) {
                        next[id] = committedSelection.value[id] ? 0 : 1;
                    } else {
                        next[id] = -1;
                    }

                    workingSelection.value = next;
                }
            }
        } else if (x_box > lastCoords.value[0] && y_box > lastCoords.value[1]) {
            for (let i = lastCoords.value[0]; i < x_box; i++) {
                for (let j = lastCoords.value[1]; j < y_box; j++) {
                    const id = i * SELECTIONZONE_XWIDTH + j;
                    const next = new Int8Array(workingSelection.value); // need to copy so can reassign value and react re-renders

                    if (next[id] === -1) {
                        next[id] = committedSelection.value[id] ? 0 : 1;
                    } else {
                        next[id] = -1;
                    }

                    workingSelection.value = next;
                }
            }
        }
        
    }


    const commitSelection = () => {
        'worklet';
        const nextCommitted = [...committedSelection.value];

        for (let i = 0; i < workingSelection.value.length; i++) {
            const v = workingSelection.value[i];
            if (v !== -1) {
                nextCommitted[i] = v === 1;
            }
        }

        workingSelection.value = new Int8Array(96).fill(-1);
        committedSelection.value = nextCommitted;
    }

    const pan = Gesture.Pan().
        onBegin((e) => {
            lastID.value = -1;
            lastCoords.value = [e.x, e.y];
            workingSelection.value = new Int8Array(96).fill(-1);
            applyTemp(e.x, e.y);
        }).
        onTouchesMove((e) => {
            boxSelect(e.changedTouches[0].x, e.changedTouches[0].y);
        }).
        onEnd((e) => {
            lastID.value = -1;
            lastCoords.value = [-1, -1];
            commitSelection();
        });

    const tap = Gesture.Tap().
        onBegin((e) => {
            applyTemp(e.x, e.y);
        }).
        onEnd((e) => {
            commitSelection();
            lastID.value = -1;
            lastCoords.value = [-1, -1];
        })

    const combined = Gesture.Exclusive(tap, pan);

    return (
        <GestureDetector gesture={combined} >
            <View style={styles.selectionZone}>
                {ids.map((id) => (
                    <TimeBlock key={id} blockID={id} committedSelection={committedSelection} workingSelection={workingSelection}/>
                ))}
            </View>
        </GestureDetector>
        
    );
}