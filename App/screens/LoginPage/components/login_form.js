import React from 'react';
import { Button, TextInput, Text, Avatar, Colors } from 'react-native-paper';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../../../redux/actions/authentication_user';

export default LoginForm = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const userAuthInfo = useSelector((state) => state.userAuth.userInfo);
    const isValidUserState = useSelector((state) => state.userAuth.isValidUser);
    const dispatch = useDispatch();

    console.log('balikan isValidUser => ',isValidUserState)
    console.log('userAuthInfo => ', userAuthInfo)
    const checkLogin = () => {
        let data = {
            username: username,
            password: password
        }
        dispatch(getUserLogin(data))

        if(isValidUserState) {
            navigation.navigate('DrawerNavigation')
        }
    }

    return (
        <View style={{ flexDirection: "column", minWidth: 350, maxHeight: 300, flex: 9 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Icon size={34} icon="account" color={Colors.grey700 } style={{ backgroundColor: Colors.white}}/>
                    <Text style={{ marginStart: 5, fontSize: 20, color: Colors.grey700 }}>USERNAME / NIK</Text>
                </View>
                <TextInput
                    label="username / NIK"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    mode="outlined"
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center", marginTop: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Icon size={34} icon="briefcase" color={Colors.grey700 } style={{ backgroundColor: Colors.white}}/>
                    <Text style={{ marginStart: 5, fontSize: 20, color: Colors.grey700 }}>PASSWORD</Text>
                </View>
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    mode="outlined"
                    secureTextEntry={true}
                    
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Button icon="login" mode="contained" onPress={() => checkLogin()} color={Colors.red600} style={{ padding: 10 }}>
                    Login
                </Button>
            </View>
            
        </View>
    )
}