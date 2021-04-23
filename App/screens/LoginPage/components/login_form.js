import React from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { View } from 'react-native';

export default LoginForm = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={{ flexDirection: "column", minWidth: 350, maxHeight: 300 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text>Username / NIK</Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text>Password</Text>
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Button icon="login" mode="contained" onPress={() => navigation.navigate('KeywordPage')}>
                    Login
                </Button>
            </View>
            
        </View>
    )
}