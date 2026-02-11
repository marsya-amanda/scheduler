import { View } from 'react-native';
import {styles} from './styles';
import HourBar from './hour-bar';
import NextBar from './next-bar';
import DayHeader from './day-header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SelectionZone from './selection-zone';
import SelectionZoneV3 from './selection-zone-v3';

// passed array per-page
export default function Calendar() {


    return (
        <GestureHandlerRootView style={{height: 530}}>
                <View style={styles.view}>
                    <HourBar />

                    <View style={{display: 'flex', flexDirection:'column'}}>
                        <DayHeader />

                        <SelectionZoneV3 />
                    </View>
                                            
                    <NextBar />
                </View>
                
        </GestureHandlerRootView>
        
    );
}