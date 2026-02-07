import { View, Text } from 'react-native';
import { styles } from './styles';

type TimeBlockProps = {
    blockID: number | null,
    ids: [boolean, boolean, boolean, boolean] | null
}

export default function TimeBlock({ blockID, ids }: TimeBlockProps) {
    const DUMMY: boolean[] = [false, false, false, false];

    return (
        <View style={styles.timeBlock}>
            <View style={styles.timeSubBlock}>
                <View 
                    style={[styles.timeSelectBlock,
                    ids ? (ids[0] ? styles.selected : styles.unselected) : (DUMMY[0] ? styles.selected : styles.unselected)
                ]}>
                    <Text>{ids ? ids[0] : DUMMY[0]}</Text>
                </View>

                <View style={[
                    styles.timeSelectBlock, 
                    ids ? (ids[1] ? styles.selected : styles.unselected) : (DUMMY[1] ? styles.selected : styles.unselected)]
                    }>
                    <Text>{ids ? ids[1] : DUMMY[1]}</Text>
                </View>
            </View>

            <View style={styles.timeSubBlock}>
                <View style={[
                    styles.timeSelectBlock,
                    ids ? (ids[2] ? styles.selected : styles.unselected) : (DUMMY[2] ? styles.selected : styles.unselected)
                    ]}>
                </View>

                <View style={[
                    styles.timeSelectBlock,
                    ids ? (ids[3] ? styles.selected : styles.unselected) : (DUMMY[3] ? styles.selected : styles.unselected)
                    ]}>
                </View>
            </View>
        </View>
    );
}