import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { editAvailabilityStyles } from './styles';
import React from 'react';

type AddTimeButtonProps = {
    onPress: () => void,
    checked: boolean
}

const AddTimeButton: React.FC<AddTimeButtonProps> = ({onPress, checked}) => {
    const styles = editAvailabilityStyles;
    return (
        <View>
            <Pressable style={styles.addButton} onPress={() => {checked && onPress()}}>
                <Ionicons name='add-circle-outline'
                    size={16}
                    accessible={true}
                    accessibilityLabel='Add availability time slot'
                    accessibilityRole='button'
                    style={checked ? styles.checked : styles.unchecked}
                />

                <Text style={[{fontSize: 16}, checked ? styles.checked : styles.unchecked]}>
                    Add time slot
                </Text>
            </Pressable>
        </View>
    );
}

export default AddTimeButton;