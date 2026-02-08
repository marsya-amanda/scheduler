import { View, Text } from 'react-native';
import { styles } from './styles';
import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

type TimeBlockProps = {
    blockID: number | null,
    ids: [boolean, boolean, boolean, boolean] | null
}

// export default function TimeBlock({ blockID, ids }: TimeBlockProps) {
//     const DUM = ids ?? [false, false, false, false];

//     const style0 = useAnimatedStyle(() => ({
//         backgroundColor: DUM[0] ? 'blue' : 'none',
//         opacity: 0.5
//     }));

//     const style1 = useAnimatedStyle(() => ({
//         backgroundColor: DUM[1] ? 'blue' : 'none',
//         opacity: 0.5
//     }));

//     const style2 = useAnimatedStyle(() => ({
//         backgroundColor: DUM[2] ? 'blue' : 'none',
//         opacity: 0.5
//     }));

//     const style3 = useAnimatedStyle(() => ({
//         backgroundColor: DUM[3] ? 'blue' : 'none',
//         opacity: 0.5
//     }));

//     return (
//         <View style={styles.timeBlock}>
//         <View style={styles.timeSubBlock}>
//             <Animated.View style={[styles.timeSelectBlock, style0]} />
//             <Animated.View style={[styles.timeSelectBlock, style1]} />
//         </View>

//         <View style={styles.timeSubBlock}>
//             <Animated.View style={[styles.timeSelectBlock, style2]} />
//             <Animated.View style={[styles.timeSelectBlock, style3]} />
//         </View>
//         </View>
//     );
// }


function TimeBlock({ blockID, ids }: TimeBlockProps) {    
    const DUMMY: boolean[] = [false, false, false, false];

    return (
        <View style={styles.timeBlock}>
            <View style={styles.timeSubBlock}>
                <Animated.View 
                    style={[styles.timeSelectBlock,
                    ids ? (ids[0] ? styles.selected : styles.unselected) : (DUMMY[0] ? styles.selected : styles.unselected)
                ]}>
                    <Text>{ids ? ids[0] : DUMMY[0]}</Text>
                </Animated.View>

                <Animated.View style={[
                    styles.timeSelectBlock, 
                    ids ? (ids[1] ? styles.selected : styles.unselected) : (DUMMY[1] ? styles.selected : styles.unselected)]
                    }>
                    <Text>{ids ? ids[1] : DUMMY[1]}</Text>
                </Animated.View>
            </View>

            <View style={styles.timeSubBlock}>
                <Animated.View style={[
                    styles.timeSelectBlock,
                    ids ? (ids[2] ? styles.selected : styles.unselected) : (DUMMY[2] ? styles.selected : styles.unselected)
                    ]}>
                </Animated.View>

                <Animated.View style={[
                    styles.timeSelectBlock,
                    ids ? (ids[3] ? styles.selected : styles.unselected) : (DUMMY[3] ? styles.selected : styles.unselected)
                    ]}>
                </Animated.View>
            </View>
        </View>
    );
}

export default React.memo(TimeBlock, (prevProps, nextProps) => {
    return JSON.stringify(prevProps.ids) === JSON.stringify(nextProps.ids);
});