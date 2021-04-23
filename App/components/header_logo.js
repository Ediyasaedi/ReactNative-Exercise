import React from 'react';
import { View, Image } from 'react-native';

export default HeaderLogo = () => {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: "center", backgroundColor: "white" }}>
            <View style={{ padding: 10 }}>
                <Image source={require('../assets/img/btpn_logo.png')} />
             </View>
            <View style={{ padding: 10 }}>
                <Image source={require('../assets/img/smbc_logo.png')} />
            </View>  
        </View>
    )
}