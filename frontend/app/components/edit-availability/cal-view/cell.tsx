import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import {styles} from './styles';
import { View, Dimensions } from 'react-native';

type Prop = {
    id: number[],
    committed: SharedValue<boolean[][]>,
    temp: SharedValue<number[][]>
}

export default function Cell({id, committed, temp}: Prop) {
    const style = useAnimatedStyle(() => {
        'worklet';

        const overlay = temp.value[id[0]][id[1]];
        const selected = overlay === -1 ? committed.value[id[0]][id[1]] : overlay === 1;

        return {
            backgroundColor: selected ? '#5cc9ff9b' : 'transparent',
            borderWidth: 0.5,
            borderColor: '#7c7c7cff',
            borderStyle: 'dashed',
            zIndex: 1
        };
    }) // why does animated style stay after first change ????

    return (
        <View style={{width: Dimensions.get('window').width * .24}}>
            <Animated.View style={[styles.timeSelectBlock, style]} />
        </View>
    );
}