import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainDashboard, CustomerPage, ContactPage } from '../../screens';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerContent from "./drawer_content";

function HomeScreen({ navigation }) {
  const [UserInfo, setUserInfo] = useState({});

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    console.log("getData function called!!!")
    try {
      const jsonValue = await AsyncStorage.getItem('@userInfoStorage')
      console.log("Data hasil getData => ",jsonValue)
      return jsonValue != null ? setUserInfo(JSON.parse(jsonValue)) : null;
    } catch(e) {
      // error reading value
      console.log("Errog getData => ", e)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>UserInfo: {JSON.stringify(UserInfo)}</Text>
      {/* <Text>Hasil Decrypt: {pwd}</Text> */}
        <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
        />
        <Button
            onPress={() => navigation.openDrawer()}
            title="Go to notifications"
        />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="CustomerPage" drawerContent={() => <DrawerContent navigation={navigation}/>}>
            <Drawer.Screen name="MainDashboard" component={MainDashboard} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="CustomerPage" component={CustomerPage} />
            <Drawer.Screen name="ContactPage" component={ContactPage} />
      </Drawer.Navigator>
  );
}