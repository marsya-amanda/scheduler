import { View, Text } from 'react-native';
import { styles } from './styles';
import React, {memo} from 'react';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type TimeBlockProps = {
    blockID: number,
    committedSelection: SharedValue<boolean[]>;
    workingSelection: SharedValue<Int8Array>;
}

export default function TimeBlock({ blockID, committedSelection, workingSelection }: TimeBlockProps) {
    const startID = blockID * 4;
    
    const cellStyle0 = useAnimatedStyle(() => {
        'worklet';
        const id = startID;
        const overlay = workingSelection.value[id];

        // if not untouched (-1), then use workingSelection value, else use committedSelection
        let selected = false;
        if (overlay === -1) {
            selected = committedSelection.value[id];
        } else if (overlay === 1) {
            selected = true
        } else {
            selected = false;
        }

        return {
            backgroundColor: selected ? '#000000' : 'transparent',
            opacity: 0.5
        };
    });

    const cellStyle1 = useAnimatedStyle(() => {
        'worklet';
        const id = startID + 1;

        const overlay = workingSelection.value[id];
        const selected = overlay !== -1 ? overlay === 1 : committedSelection.value[id];

        return {
            backgroundColor: selected ? '#000000' : 'transparent',
            opacity: 0.5
        };
    });

    const cellStyle2 = useAnimatedStyle(() => {
        'worklet';
        const id = startID + 2;

        const overlay = workingSelection.value[id];
        const selected = overlay !== -1 ? overlay === 1 : committedSelection.value[id];

        return {
            backgroundColor: selected ? '#000000' : 'transparent',
            opacity: 0.5
        };
    });

    const cellStyle3 = useAnimatedStyle(() => {
        'worklet';
        const id = startID + 3;

        const overlay = workingSelection.value[id];
        const selected = overlay !== -1 ? overlay === 1 : committedSelection.value[id];

        return {
            backgroundColor: selected ? '#252323ff' : 'transparent',
            opacity: 0.5
        };
    });

    return (
        <View style={styles.timeBlock}>
            <View style={styles.timeSubBlock}>
                <Animated.View style={[styles.timeSelectBlock, cellStyle0]} />
                <Animated.View style={[styles.timeSelectBlock, cellStyle1]} />
            </View>

            <View style={styles.timeSubBlock}>
                <Animated.View style={[styles.timeSelectBlock, cellStyle2]} />
                <Animated.View style={[styles.timeSelectBlock, cellStyle3]} />
            </View>
        </View>
    );
}