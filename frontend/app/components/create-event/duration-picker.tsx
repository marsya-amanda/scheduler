import { View, Text } from "react-native"
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { generalStyles } from '../../create-event/styles';

export default function DurationPicker({ value, onChange }: any) {

    return (
        <View style={generalStyles.section}>
            <Text style={generalStyles.body}>Event Duration</Text>
            <Picker style={{ height: 150, width: '100%' }} selectedValue={value} onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
                <Picker.Item label="15 mins" value={15}/>
                <Picker.Item label="30 mins" value={30}/>
                <Picker.Item label="45 mins" value={45}/>
                <Picker.Item label="1 hr" value={60}/>
            </Picker>
        </View>
    )
}