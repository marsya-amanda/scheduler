import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { editAvailabilityStyles } from './styles';

type AddTimeButtonProps = {
    onPress: () => void
}

export default function AddTimeButton({onPress}: AddTimeButtonProps) {
    const styles = editAvailabilityStyles;
    return (
        <View>
            <Pressable style={styles.addButton} onPress={onPress}>
                <Ionicons name='add-circle-outline'
                    size={16}
                    accessible={true}
                    accessibilityLabel='Add availability time slot'
                    accessibilityRole='button'
                />

                <Text>
                    Add time slot
                </Text>
            </Pressable>
        </View>
    );
}