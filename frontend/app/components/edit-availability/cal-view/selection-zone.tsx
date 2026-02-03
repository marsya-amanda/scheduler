import { View } from 'react-native';
import {styles} from './styles';
import HourBar from './hour-bar';
import DayBlock from './day-block';
import NextBar from './next-bar';

// passed array per-page
export default function SelectionZone() {
    return (
        <View style={styles.selectionZone}>
            <HourBar />
            <DayBlock />
            <DayBlock />
            <DayBlock />
            <NextBar />
        </View>
    );
}