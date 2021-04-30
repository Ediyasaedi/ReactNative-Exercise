import React from 'react';
import { View } from 'react-native';

export default CardSummary = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: 'red', minHeight: 100}}>

            </View>
            <View style={{ flex: 1, backgroundColor: 'blue', minHeight: 100}}>

            </View>
            <View style={{ flex: 1, backgroundColor: 'green', minHeight: 100}}>

            </View>
            <View style={{ flex: 1, backgroundColor: 'yellow', minHeight: 100}}>

            </View>
        </View>
    )
}