import React from 'react';
import { View, Image } from 'react-native';

export default HeaderLogo = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: "center", backgroundColor: "white" }}>
            <View style={{ padding: 10 }}>
                <Image source={require('../../assets/img/btpn_smbc_logo.jpg')} />
             </View>
        </View>
    )
}