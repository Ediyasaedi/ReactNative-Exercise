import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LoginForm from './components/login_form';
import { HeaderLogo } from '../../components/';

const LoginScreen = ({ navigation }) => {
  return (
    <>
    <HeaderLogo />
    <View style={{flex: 9, flexDirection: 'row'}}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LoginForm navigation={navigation}/>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <Image source={require('../../assets/img/login_ilustration.png')} style={{ padding: 50 }}/>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LoginScreen;