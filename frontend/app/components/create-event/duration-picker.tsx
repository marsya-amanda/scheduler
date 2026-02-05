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
                <Picker.Item label="1 hr 15 mins" value={75}/>
                <Picker.Item label="1 hr 30 mins" value={90}/>
                <Picker.Item label="1 hr 45 mins" value={105}/>
                <Picker.Item label="2 hrs" value={120}/>
                <Picker.Item label="2hrs 15 mins" value={135}/>
                <Picker.Item label="2hrs 30 mins" value={150}/>
                <Picker.Item label="2hrs 45 mins" value={165}/>
                <Picker.Item label="3 hrs" value={180}/>
                <Picker.Item label="3 hrs 15 mins" value={195}/>
                <Picker.Item label="3 hrs 30 mins" value={210}/>
                <Picker.Item label="3 hrs 45 mins" value={225}/>
                <Picker.Item label="4 hrs" value={240}/>
                <Picker.Item label="4 hrs 15 mins" value={255}/>
                <Picker.Item label="4 hrs 30 mins" value={270}/>
                <Picker.Item label="4 hrs 45 mins" value={285}/>
                <Picker.Item label="5 hrs" value={300}/>
                <Picker.Item label="5 hrs 15 mins" value={315}/>
                <Picker.Item label="5 hrs 30 mins" value={330}/>
                <Picker.Item label="5 hrs 45 mins" value={345}/>
                <Picker.Item label="6 hrs" value={360}/>
                <Picker.Item label="7 hrs" value={420}/>
                <Picker.Item label="8 hrs" value={480}/>
                <Picker.Item label="9 hrs" value={540}/>
                <Picker.Item label="10 hrs" value={600}/>
                <Picker.Item label="11 hrs" value={660}/>
                <Picker.Item label="12 hrs" value={720}/>
                <Picker.Item label="13 hrs" value={780}/>
                <Picker.Item label="14 hrs" value={840}/>
                <Picker.Item label="15 hrs" value={900}/>
                <Picker.Item label="16 hrs" value={960}/>
                <Picker.Item label="17 hrs" value={1020}/>
                <Picker.Item label="18 hrs" value={1080}/>
                <Picker.Item label="19 hrs" value={1140}/>
                <Picker.Item label="20 hrs" value={1200}/>
                <Picker.Item label="21 hrs" value={1260}/>
                <Picker.Item label="22 hrs" value={1320}/>
                <Picker.Item label="23 hrs" value={1380}/>
                <Picker.Item label="24 hrs" value={1440}/>
            </Picker>
        </View>
    )
}