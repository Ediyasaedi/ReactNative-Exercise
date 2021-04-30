import React from 'react';
import { View, Text } from 'react-native';
import { MainHeader } from '../../components';

export default CustomerPage = () => {
    return (
        <View>
            <MainHeader/>
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
            <Text>This is Customer Page View</Text>
        </View>
    )
}