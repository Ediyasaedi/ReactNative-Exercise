import React from 'react';
import { LoginScreen, KeywordPage } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './drawer_navigation';

const Stack = createStackNavigator();

export default MainNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
           headerShown: false
         }}>
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="KeywordPage" component={KeywordPage} />
         <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
       </Stack.Navigator>
      </NavigationContainer>
    )
}