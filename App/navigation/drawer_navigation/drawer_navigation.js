import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainDashboard } from '../../screens';
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

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="MainDashboard" component={MainDashboard} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}