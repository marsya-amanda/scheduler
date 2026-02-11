import { View, StyleSheet, Dimensions } from 'react-native';

export default function GridLines() {
    return (
        <View style={styles.parent}>
            {/* left */}
            <View style={styles.vertical}>
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
                
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
            </View>

            {/* middle */}
            <View style={styles.vertical}>
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
                
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
            </View>

            {/*  right */}

                        <View style={styles.vertical}>
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
                
                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>

                <View style={styles.cell}>
                    <View style={styles.subCell} />
                    <View style={styles.subCell} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        width: Dimensions.get('window').width * .72,
        height: 480,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        borderColor: '#000',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    vertical: {
        width: Dimensions.get('window').width * .24,
        height: 480,
        borderWidth: 0.5,
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cell: {
        width: Dimensions.get('window').width * .24,
        height: 60,
        borderWidth: 0.5,
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subCell: {
        width: Dimensions.get('window').width * .24,
        height: 30,
        borderWidth: 0.5,
        borderColor: '#000'
    }
})