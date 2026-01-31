import { View, Pressable, Text } from 'react-native';

type AddTimeBlockProps = {
    date: string
}

export default function AddTimeBlock({date}: AddTimeBlockProps) {
    return (
        <View>
            <Pressable>
                <Text>
                    Add time slot
                </Text>
            </Pressable>
        </View>
    );
}