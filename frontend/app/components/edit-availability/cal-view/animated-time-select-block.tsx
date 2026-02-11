import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import {styles} from './styles';
import { View, Dimensions } from 'react-native';

type Prop = {
    id: number[],
    committed: SharedValue<boolean[][]>,
    temp: SharedValue<number[][]>
}

export default function AnimatedTimeSelectBlock({id, committed, temp}: Prop) {
    const style = useAnimatedStyle(() => {
        'worklet';

        const overlay = temp.value[id[0]][id[1]];
        const selected = overlay !== -1 ? overlay === 1 : committed.value[id[0]][id[1]];

        return {
            backgroundColor: selected ? '#5cc9ffff' : 'transparent',
            opacity: 0.5,
            borderWidth: 1
        };
    })
    return (
        <View style={{width: Dimensions.get('window').width * .24}}>
            <Animated.View style={[styles.timeSelectBlock, style]} />
        </View>
    );
}