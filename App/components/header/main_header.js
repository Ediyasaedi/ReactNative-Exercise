import React from 'react';
import { View, Image, Text } from 'react-native';
import { Avatar, Colors, Button, IconButton } from 'react-native-paper';

export default MainHeader = ({navigation}) => {
    return (
        <View style={{ flex: 1, flexDirection: "row", minHeight: 80}}>
            <View style={{ flex: 1, backgroundColor: Colors.white, flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                <View style={{ flex: 2, justifyContent: "space-evenly", flexDirection: "row" }}>
                    <IconButton
                        icon="currency-eth"
                        color={Colors.red500}
                        size={38}
                        onPress={() => navigation.openDrawer()}
                    />
                    <IconButton
                        icon="home"
                        color={Colors.red500}
                        size={38}
                        onPress={() => navigation.openDrawer()}
                    />
                    <IconButton
                        icon="account-circle"
                        color={Colors.red500}
                        size={38}
                        onPress={() => navigation.openDrawer()}
                    />
                    <IconButton
                        icon="crown"
                        color={Colors.red500}
                        size={38}
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: Colors.white }}>
                <Image 
                    source={require('../../assets/img/btpn_smbc_logo.jpg')} 
                    style={{ width: 250, height: 60 }}/>
            </View>
            <View style={{ flex: 1, backgroundColor: Colors.white, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Avatar.Text size={38} label="PL" style={{ backgroundColor: Colors.red100}} />
                    <Text style={{ fontSize: 24, maxWidth: 220 }} numberOfLines={1} >Perwira Lona</Text>
                    <Avatar.Icon size={38} icon="arrow-down-drop-circle-outline" style={{ backgroundColor: Colors.white}} />
                </View>
            </View>
        </View>
    )
    
}