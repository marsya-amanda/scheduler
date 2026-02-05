import { Pressable } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';

export default function TimeSelectBlock() {
    const [isSelected, toggleSelected] = useState(false);

    const onPressIn = () => {
        toggleSelected(!isSelected);
        console.log('isSelected changed! now: ', isSelected);
    }

    return (
        <Pressable style={[styles.timeSelectBlock, isSelected ? styles.selected : styles.unselected]}
            onPressIn={onPressIn} 
            pressRetentionOffset={{ top: 100, bottom: 100, left: 50, right: 50 }}/>
    );
}