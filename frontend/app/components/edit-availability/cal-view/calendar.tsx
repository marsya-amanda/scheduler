import { View } from 'react-native';
import {styles} from './styles';
import HourBar from './hour-bar';
import NextBar from './next-bar';
import DayHeader from './day-header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SelectionZone from './selection-zone';
import React, {useState} from 'react';

type Props = {
    isConfirmed: boolean,
    setAvailabilityCal: (newCal: boolean[][]) => void,
    currentCal: boolean[][]
}

// passed array per-page
export default function Calendar({isConfirmed, setAvailabilityCal, currentCal}: Props) {

    return (
        <GestureHandlerRootView style={{height: 530, }}>
                <View style={styles.view}>
                    <HourBar />

                    <View style={{display: 'flex', flexDirection:'column'}}>
                        <DayHeader />

                        <SelectionZone isConfirmed={isConfirmed} setAvailabilityCal={setAvailabilityCal} currentCal={currentCal}/>
                    </View>
                                            
                    <NextBar />
                </View>
                
        </GestureHandlerRootView>
        
    );
}